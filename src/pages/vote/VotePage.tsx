import GemGif from "@/assets/Gem.gif";
import DiceSvg from "@/assets/ic_dice.svg?react";
import SkipSvg from "@/assets/ic_skip.svg?react";
import { Toast } from "@/components/common/Toast";
import type { QuestionSheetCandidate } from "@/generated/model/questionSheetCandidate";
import { getCreate1MutationOptions } from "@/generated/pick/pick";
import { getGetQuestionSheetQueryOptions } from "@/generated/question/question";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import clsx from "clsx";
import React, {
  type ElementType,
  Suspense,
  useEffect,
  useMemo,
  useState,
} from "react";
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
  const {
    mutate,
    data: create1Res,
    error,
  } = useMutation(getCreate1MutationOptions());

  const [qIndex, setQIndex] = React.useState(data.startingQuestionIndex);

  const question = data.questionSheetList.find(
    (q) => q.questionOrder === qIndex,
  );

  useEffect(() => {
    if (error) {
      Toast.alert("실패했습니다. 다시 시도해주세요.", () => {});
      console.log(error);
    }
  }, [error]);

  if (!question) {
    push("VoteDonePage", {});
    return;
  }
  return (
    <VoteLayout>
      <main className="flex flex-col gap-3 pt-[52px] pb-6 px-8 items-center h-full">
        <Indicator current={qIndex} total={data.sheetTotalCount} />
        <VoteQuestions
          content={question.questionContent}
          iconImgSrc={question.questionEmojiImageUrl}
          imgAlt={question.questionCategory}
          members={question.candidates}
          makePick={(v) => {
            mutate({
              data: {
                pickedId: v.pickId,
                questionId: question.questionId,
                questionSetId: data.questionSetId,
                questionSheetId: question.questionSheetId,
                skip: v.skip,
              },
            });
          }}
          earnedCoin={create1Res?.data?.coin}
          afterPick={() => {
            if (qIndex === data.sheetTotalCount) {
              push("VoteDonePage", {});
              return;
            }
            setQIndex((p) => p + 1);
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
  makePick,
  earnedCoin,
  afterPick,
}: {
  content: string;
  iconImgSrc: string;
  imgAlt: string;
  members: QuestionSheetCandidate[];
  makePick: (v: { pickId: string; skip: boolean }) => void;
  earnedCoin?: number;
  afterPick: () => void;
}) {
  const [selection, setSelection] = useState<number | null>(null);
  const [showIndex, setShowIndex] = useState(0);
  const [shuffledMembers, setShuffledMembers] = useState<
    QuestionSheetCandidate[]
  >([]);
  const [displayingEarnedCoin, setDisplayingEarnedCoin] = useState<
    number | null
  >(null);

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

  const cleanAndNext = () => {
    setSelection(null);
    setDisplayingEarnedCoin(null);
    afterPick();
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (earnedCoin) {
      setTimeout(() => {
        setDisplayingEarnedCoin(earnedCoin);
        setTimeout(() => {
          cleanAndNext();
        }, 1500);
      }, 1000);
    }

    if (earnedCoin === 0) {
      cleanAndNext();
    }
  }, [earnedCoin]);

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
      <div className="w-full grid grid-cols-2 gap-3 -mt-2">
        {displayedMembers.map((v, i) => (
          <AnswerCard
            key={content + v.memberId}
            selected={selection === i}
            onClick={async () => {
              setSelection(i);
              makePick({ pickId: v.memberId, skip: false });
            }}
            name={v.memberName}
            imgSrc={v.memberImageUrl}
            description={v.platform}
            displayingEarnedCoin={selection === i ? displayingEarnedCoin : null}
          />
        ))}
      </div>
      <div className="flex justify-between align-middle w-full mt-auto">
        <ShuffleButton disabled={isShuffleDisabled} onClick={handleShuffle} />
        <SkipButton
          disabled={isShuffleDisabled}
          onClick={() => makePick({ pickId: "", skip: true })}
        />
      </div>
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
      className="group flex gap-2 items-center py-2 px-4 rounded-[10px] border-[1px] border-solid border-offWhite010/30 disabled:text-gray040"
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      <DiceSvg className={clsx("group-disabled:[&>path]:fill-gray040")} />
      <span className="t-b3-m-14">셔플 하기</span>
    </button>
  );
}

function SkipButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className=" group flex gap-1 items-center py-2 px-4 rounded-10 bg-offWhite010/30 disabled:text-gray040"
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      <span className="t-b3-m-14">이 질문 스킵</span>
      <SkipSvg className={clsx("group-disabled:[&>path]:fill-gray040")} />
    </button>
  );
}

function AnswerCard({
  name,
  description,
  imgSrc,
  selected,
  onClick,
  displayingEarnedCoin,
}: {
  name: string;
  description: string;
  imgSrc: string;
  selected: boolean;
  onClick: () => void;
  displayingEarnedCoin: number | null;
}) {
  const [ripple, event] = useMouseOverRipple({
    cancelAutomatically: true,
  });

  return (
    <button
      className={clsx(
        "w-full odd:justify-self-end  rounded-10 py-3 transition-colors duration-300",
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
            src={displayingEarnedCoin ? GemGif : imgSrc}
            alt={name}
            className="w-6 h-6 xs:w-16 xs:h-16 rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-[2px]">
          <TextTransition
            as="h6"
            className="w-full min-h-[20px]"
            typoClassName="t-h6-sb-15 text-gray084"
            oldText={name}
            newText={`${displayingEarnedCoin} Gem`}
            showNewText={!!displayingEarnedCoin}
          />
          <TextTransition
            as="p"
            className="w-full min-h-[14px]"
            typoClassName="t-c2-m-12 text-gray054"
            oldText={description}
            newText="획득!"
            showNewText={!!displayingEarnedCoin}
          />
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

function TextTransition<T extends ElementType = "span">({
  oldText,
  newText,
  showNewText,
  className,
  typoClassName,
  as,
}: {
  oldText: string;
  newText: string;
  showNewText: boolean;
  className?: string;
  typoClassName?: string;
  as?: T;
}) {
  const Component = as || "span";

  return (
    <div className={clsx("relative", className)}>
      <Component
        className={clsx(
          typoClassName,
          "absolute left-0 right-0  transition-opacity duration-500",
          showNewText ? "opacity-0" : "opacity-100",
        )}
      >
        {oldText}
      </Component>
      <Component
        className={clsx(
          typoClassName,
          "absolute left-0 right-0  transition-opacity duration-500",
          showNewText ? "opacity-100" : "opacity-0",
        )}
      >
        {newText}
      </Component>
    </div>
  );
}
