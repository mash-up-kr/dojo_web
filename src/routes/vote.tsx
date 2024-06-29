import ShuffleSvg from "@/assets/Shuffle.svg?react";
import { Header, HeaderLogo } from "@/components/common/Header";
import { Toast } from "@/components/common/Toast";
import { getGradientBg } from "@/utils/getGradientBg";
import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import React from "react";
import { customRipple } from "use-ripple-hook";

export const Route = createFileRoute("/vote")({
  component: VotePage,
});

const bg = getGradientBg();

function VotePage() {
  const [selection, setSelection] = React.useState<number | null>(null);

  return (
    <div className={clsx("h-screen", bg)}>
      <Header
        left={<HeaderLogo />}
        title="테스트입니다"
        right={<div className="w-8 h-8 bg-grey084 rounded-full" />}
      />
      <main className="flex flex-col gap-3 py-6 px-8 items-center">
        {/* question */}
        <div className="flex flex-col items-center gap-3">
          <Indicator current={1} total={12} />
          <p className="flex items-center justify-center text-center t-h4-sb-20 h-[75px]">
            매쉬업에서 술 제일 잘 마실 것 같은 사람은?
          </p>
          {/* add gif icon */}
          <div className="w-[120px] h-[120px] bg-gray054/20" />
        </div>
        {/* answer */}
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <AnswerCard
              key={i}
              selected={selection === i}
              onClick={() => {
                setTimeout(() => setSelection(i), 200);
                // NOTE: This is a fake toast for demonstration purposes
                Toast.alert(
                  "방금 14기 ***님이 낭은영님을 Pick 했어요!",
                  () => {},
                );
              }}
              name={`Answer ${i}`}
              imgSrc="https://via.placeholder.com/150"
              description="Description"
            />
          ))}
        </div>
        {/* shuffle */}
        <button className="flex space-x-2 items-center py-2 px-4" type="button">
          <ShuffleSvg />
          <span>셔플</span>
        </button>
      </main>
    </div>
  );
}

function Indicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="px-2 py-1 text-purple100/50 t-h6-sb-15 bg-offWhite010/20 rounded-8">
      <span className="text-purple100">{current}</span> of {total}
    </div>
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
        selected ? "bg-offWhite010" : "bg-offWhite010/30",
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
          <img src={imgSrc} alt={name} className="w-16 h-16 rounded-full" />
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
