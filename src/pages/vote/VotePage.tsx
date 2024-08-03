import ShuffleSvg from "@/assets/Shuffle.svg?react";
import { getGetQuestionSheetQueryOptions } from "@/generated/question/question";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useSuspenseQuery } from "@tanstack/react-query";
import clsx from "clsx";
import React, { Suspense, useMemo } from "react";
import { customRipple } from "use-ripple-hook";
import { VoteLayout } from "./VoteLayout";

export function VotePage() {
  return (
    <Suspense>
      <VotePageInner />
    </Suspense>
  );
}

function VotePageInner() {
  const [selection, setSelection] = React.useState<number | null>(null);
  const [shuffled, setIsShuffled] = React.useState(false);

  const { data } = useSuspenseQuery(getGetQuestionSheetQueryOptions());

  const currentQ = data.questionSheetList.find(
    (q) => q.questionOrder === data.startingQuestionIndex,
  );

  const selects = useMemo(() => {
    if (!currentQ) return [];
    const members = currentQ.candidates
      .slice(0, 8)
      .sort(() => Math.random() - 0.5);
    if (shuffled) return members.slice(4, 8);
    return members.slice(0, 4);
  }, [currentQ, shuffled]);

  console.log("data", data);

  return (
    <AppScreen>
      <VoteLayout>
        <main className="flex flex-col gap-3 py-6 px-8 items-center">
          <Indicator
            current={data.startingQuestionIndex}
            total={data.sheetTotalCount}
          />
          <div className="flex flex-col items-center gap-3">
            <p className="flex items-center justify-center text-center t-h4-sb-20 h-[75px]">
              {currentQ?.questionContent}
            </p>
            <div className="w-[44px] h-[44px] xs:w-[120px] xs:h-[120px]">
              <img
                src={currentQ?.questionEmojiImageUrl}
                alt={currentQ?.questionCategory}
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {selects.map((v, i) => (
              <AnswerCard
                key={v.memberId}
                selected={selection === i}
                onClick={() => {
                  setTimeout(() => setSelection(i), 200);
                }}
                name={v.memberName}
                // TODO: need to add imgSrc
                imgSrc={""}
                description={v.platform}
              />
            ))}
          </div>
          {/* shuffle */}
          <ShuffleButton
            disabled={shuffled}
            onClick={() => setIsShuffled(true)}
          />
        </main>
      </VoteLayout>
    </AppScreen>
  );
}

function Indicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <div className="relative w-full h-[2px] bg-purple100/30 rounded-full">
        <div
          className="absolute inset-0 h-[2px] bg-purple100 rounded-full"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
      <div className="px-2 py-1 text-purple100/30 t-h6-sb-15 bg-offWhite010/30 rounded-8">
        <span className="text-purple100">{current}</span> of {total}
      </div>
    </div>
  );
}

function ShuffleButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="group flex gap-2 items-center py-2 px-4 rounded-12 disabled:text-gray040"
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      <ShuffleSvg className={clsx("group-disabled:[&>path]:fill-gray040")} />
      <span className="t-b3-m-14">셔플</span>
    </button>
  );
}

function AnswerCard({
  name,
  description,
  imgSrc,
  selected,
  onClick,
}: {
  name: string;
  description: string;
  imgSrc: string;
  selected: boolean;
  onClick: () => void;
}) {
  const [ripple, event] = useMouseOverRipple({
    cancelAutomatically: true,
  });

  return (
    <button
      className={clsx(
        "odd:justify-self-end aspect-[13/10] rounded-10 max-w-44 w-full py-3 transition-colors duration-300",
        selected ? "bg-offWhite010" : "bg-offWhite010/40",
      )}
      type="button"
      ref={ripple}
      onClick={(e) => {
        onClick();
        event(e);
      }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center">
          <img
            src={imgSrc}
            alt={name}
            className="w-6 h-6 xs:w-16 xs:h-16 rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-[2px]">
          <h6 className="t-h6-sb-15 text-gray084">{name}</h6>
          <p className="t-c2-m-12 text-gray054">{description}</p>
        </div>
      </div>
    </button>
  );
}

const useMouseOverRipple = customRipple({
  onSpawn: ({ cancelRipple, ref }) => {
    const event = () => {
      cancelRipple();
      ref.current.removeEventListener("mouseout", event);
    };
    ref.current.addEventListener("mouseout", event);
  },
});
