import CongratGif from "@/assets/Congrat.gif";
import WaitingGif from "@/assets/Waiting.gif";
import { useGetCoinBySolvedPick } from "@/generated/coin/coin";
import { getGetNextPickTimeQueryOptions } from "@/generated/pick/pick";
import { useSuspenseQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { VoteLayout } from "./VoteLayout";

const STEP_INTERVAL_MS = 2000;

export function VoteDonePage() {
  const [step, setStep] = useState<number>(1);
  const { data: coinBySolvedPickRes } = useGetCoinBySolvedPick();
  const { data: nextPickTimeRes } = useSuspenseQuery(
    getGetNextPickTimeQueryOptions(),
  );

  const goToNextStep = () => setStep((prev) => prev + 1);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense>
        <VoteLayout>
          <main className="flex flex-col px-8 py-7 space-y-4">
            {step === 1 ? (
              <DoneCongrat goToNextStep={goToNextStep} />
            ) : step === 2 ? (
              <GemCheck
                gemsEarned={coinBySolvedPickRes?.data?.amount ?? null}
                goToNextStep={goToNextStep}
              />
            ) : (
              <VoteLeftTime nextTime={nextPickTimeRes.data} />
            )}
          </main>
        </VoteLayout>
      </Suspense>
    </ErrorBoundary>
  );
}

function DoneCongrat({ goToNextStep }: { goToNextStep: () => void }) {
  useEffect(() => {
    const timer = setTimeout(goToNextStep, STEP_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [goToNextStep]);

  return (
    <>
      <div className="flex items-end justify-center h-[250px]">
        <img
          width={120}
          height={120}
          className="animate-zoom"
          alt="congrat"
          src={CongratGif}
        />
      </div>
      <div className="px-5 py-4 flex flex-col items-center space-y-[10px] bg-offWhite010/40 rounded-12 animate-zoom-sm">
        <h4 className="t-b2-m-15 text-gray064">투표 종료</h4>
        <p className="t-h2-b-26 text-purple100">투표를 끝냈어요!</p>
      </div>
    </>
  );
}

function GemCheck({
  gemsEarned,
  goToNextStep,
}: {
  gemsEarned: number | null;
  goToNextStep: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(goToNextStep, STEP_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [goToNextStep]);

  if (gemsEarned === null) {
    goToNextStep();
    return null;
  }

  return (
    <>
      <div className="flex items-end justify-center h-[250px]">
        <img
          width={120}
          height={120}
          className="animate-zoom"
          alt="congrat"
          src={CongratGif}
        />
      </div>
      <div className="px-5 py-4 flex flex-col items-center space-y-[10px] bg-offWhite010/40 rounded-12 animate-zoom-sm">
        <h4 className="t-b2-m-15 text-gray064">축하해요</h4>
        <p className="t-h2-b-26 text-purple100">
          총 {gemsEarned} Gem 받았어요!
        </p>
      </div>
    </>
  );
}

function VoteLeftTime({ nextTime }: { nextTime: string | undefined }) {
  const [time, setTime] = useState(() =>
    dayjs(nextTime).diff(dayjs(), "second"),
  );
  const formattedTime = dayjs(time * 1000)
    .format("HH:mm:ss")
    .toString();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          // Redirect to vote page when time is up
          location.assign("/vote");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex items-end justify-center h-[250px]">
        <img width={120} height={120} alt="left-time" src={WaitingGif} />
      </div>
      <div className="px-5 py-4 flex flex-col items-center space-y-[10px] bg-offWhite010/40 rounded-12">
        <h4 className="t-b2-m-15 text-gray064">다음 투표까지 남은 시간:</h4>
        <p className="t-h2-b-26 text-purple100 tabular-nums">{formattedTime}</p>
      </div>
    </>
  );
}
