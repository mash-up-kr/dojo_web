import ShuffleSvg from "@/assets/Shuffle.svg?react";
import type { QuestionSheetCandidate } from "@/generated/model/questionSheetCandidate";
import { getCreate1MutationOptions } from "@/generated/pick/pick";
import { getGetQuestionSheetQueryOptions } from "@/generated/question/question";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import clsx from "clsx";
import React, { Suspense, useEffect, useMemo, useState } from "react";
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

  const question = data.questionSheetList.find(
    (q) => q.questionOrder === qIndex,
  );

  if (!question) {
    return;
  }
  return (
    <VoteLayout>
      <main className="flex flex-col gap-3 pt-[52px] pb-6 px-4 items-center h-full">
        <Indicator current={qIndex} total={data.sheetTotalCount} />
        <VoteQuestions
          content={question.questionContent}
          iconImgSrc={question.questionEmojiImageUrl}
          imgAlt={question.questionCategory}
          members={question.candidates}
          onSelect={async (v) => {
            try {
              await mutateAsync({
                data: {
                  pickedId: v.pickId,
                  questionId: question.questionId,
                  questionSetId: data.questionSetId,
                  questionSheetId: question.questionSheetId,
                },
              });
              if (qIndex === data.sheetTotalCount) {
                push("VoteDonePage", {});
                return;
              }
              setQIndex((p) => p + 1);
            } catch (e) {
              console.error(e);
            }
          }}
        />
      </main>
    </VoteLayout>
  );
}

function VoteQuestions({
  content,
  iconImgSrc,
  imgAlt,
  members,
  onSelect,
}: {
  content: string;
  iconImgSrc: string;
  imgAlt: string;
  members: QuestionSheetCandidate[];
  onSelect: (v: { pickId: string }) => void;
}) {
  const [selection, setSelection] = useState<number | null>(null);
  const [showIndex, setShowIndex] = useState(0);
  const [shuffledMembers, setShuffledMembers] = useState<
    QuestionSheetCandidate[]
  >([]);

  // Shuffle members when the component mounts or when members prop changes
  useEffect(() => {
    const shuffled = [...members].sort(() => Math.random() - 0.5);
    setShuffledMembers(shuffled);
    setShowIndex(0);
  }, [members]);

  const displayedMembers = useMemo(() => {
    return shuffledMembers.slice(showIndex, showIndex + 4);
  }, [shuffledMembers, showIndex]);

  const handleShuffle = () => {
    if (showIndex === 0 && shuffledMembers.length > 4) {
      setShowIndex(4);
    }
  };

  const isShuffleDisabled = showIndex !== 0 || shuffledMembers.length <= 4;

  return (
    <>
      <div className="flex flex-col items-center gap-3 px-4">
        <p className="flex items-center justify-center text-center t-h4-sb-20 h-[75px]">
          {content}
        </p>
        <div className="w-[44px] h-[44px] xs:w-[120px] xs:h-[120px]">
          <img src={iconImgSrc} alt={imgAlt} className="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {displayedMembers.map((v, i) => (
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
            imgSrc={v.memberImageUrl}
            description={v.platform}
          />
        ))}
      </div>
      <ShuffleButton disabled={isShuffleDisabled} onClick={handleShuffle} />
    </>
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

const useMouseOverRipple = customRipple({
  onSpawn: ({ cancelRipple, ref }) => {
    const event = () => {
      cancelRipple();
      ref.current.removeEventListener("mouseout", event);
    };
    ref.current.addEventListener("mouseout", event);
  },
});
