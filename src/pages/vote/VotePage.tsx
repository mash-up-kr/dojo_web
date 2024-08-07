import ShuffleSvg from "@/assets/Shuffle.svg?react";
import type { QuestionSheetCandidate } from "@/generated/model/questionSheetCandidate";
import { getCreate1MutationOptions } from "@/generated/pick/pick";
import { getGetQuestionSheetQueryOptions } from "@/generated/question/question";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import clsx from "clsx";
import React, { Suspense, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { customRipple } from "use-ripple-hook";
import { VoteLayout } from "./VoteLayout";

export function VotePage() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense>
        <VotePageInner />
      </Suspense>
    </ErrorBoundary>
  );
}

function VotePageInner() {
  const { data } = useSuspenseQuery(getGetQuestionSheetQueryOptions());
  const { push } = useMyFlow();
  const { mutateAsync } = useMutation(getCreate1MutationOptions());

  const [qIndex, setQIndex] = React.useState(data.startingQuestionIndex);

  const question =
    data.questionSheetList.find((q) => q.questionOrder === qIndex) ??
    // TODO: remove this line after fixing the bug
    data.questionSheetList[0];

  if (!question) {
    return;
  }
  return (
    <AppScreen>
      <VoteLayout>
        <main className="flex flex-col gap-3 py-6 px-8 items-center">
          <Indicator current={qIndex} total={data.sheetTotalCount} />
          <VoteQuestions
            content={question.questionContent}
            imgSrc={question.questionEmojiImageUrl}
            imgAlt={question.questionCategory}
            members={question.candidates}
            onSelect={async (v) => {
              // TODO: uncomment this after impl the mutation
              // try {
              // await mutateAsync({
              mutateAsync({
                data: {
                  pickedId: v.pickId,
                  questionId: question.questionId,
                  questionSetId: "", //TODO: 타입 에러 때문에 임시로 채워 둠. 이후 수정 필요
                  questionSheetId: "", //TODO: 타입 에러 때문에 임시로 채워 둠. 이후 수정 필요
                },
              });
              if (qIndex === data.sheetTotalCount) {
                push("VoteDonePage", {});
                return;
              }
              setQIndex((p) => p + 1);
              // } catch (e) {
              // console.error(e);
              // }
            }}
          />
        </main>
      </VoteLayout>
    </AppScreen>
  );
}

function VoteQuestions({
  content,
  imgSrc,
  imgAlt,
  members,
  onSelect,
}: {
  content: string;
  imgSrc: string;
  imgAlt: string;
  members: QuestionSheetCandidate[];
  onSelect: (v: { pickId: string }) => void;
}) {
  const [selection, setSelection] = React.useState<number | null>(null);
  const [shuffled, setIsShuffled] = React.useState(false);

  const selects = useMemo(() => {
    const randMems = members.slice(0, 8).sort(() => Math.random() - 0.5);
    if (shuffled) return randMems.slice(4, 8);
    return randMems.slice(0, 4);
  }, [members, shuffled]);

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <p className="flex items-center justify-center text-center t-h4-sb-20 h-[75px]">
          {content}
        </p>
        <div className="w-[44px] h-[44px] xs:w-[120px] xs:h-[120px]">
          <img src={imgSrc} alt={imgAlt} className="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {selects.map((v, i) => (
          <AnswerCard
            key={v.memberId}
            selected={selection === i}
            onClick={() => {
              setSelection(i);
              setTimeout(() => {
                onSelect({ pickId: v.memberId });
                setSelection(null);
              }, 500);
            }}
            name={v.memberName}
            // TODO: need to add imgSrc
            imgSrc={"https://via.placeholder.com/150"}
            description={v.platform}
          />
        ))}
      </div>
      {/* shuffle */}
      <ShuffleButton disabled={shuffled} onClick={() => setIsShuffled(true)} />
    </>
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
