import { AppScreen } from "@stackflow/plugin-basic-ui";
import dayjs from "dayjs";
import React from "react";
import { VoteLayout } from "./VoteLayout";

export function VoteDonePage() {
  const [next, setNext] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNext(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppScreen>
      <VoteLayout>
        <main className="flex flex-col px-8 py-7 space-y-4">
          {!next ? (
            <DoneCongrat />
          ) : (
            <VoteLeftTime endDate={dayjs().add(6, "hour").toISOString()} />
          )}
        </main>
      </VoteLayout>
    </AppScreen>
  );
}

function DoneCongrat() {
  return (
    <>
      <div className="flex items-end justify-center h-[250px]">
        <img
          width={120}
          height={120}
          className="animate-zoom"
          alt="congrat"
          src="/src/assets/Congrat.gif"
        />
      </div>
      <div className="px-5 py-4 flex flex-col items-center space-y-[10px] bg-offWhite010/40 rounded-12 animate-zoom-sm">
        <h4 className="t-b2-m-15 text-gray064">투표 종료</h4>
        <p className="t-h2-b-26 text-purple100">투표를 끝냈어요!</p>
      </div>
    </>
  );
}

function VoteLeftTime({ endDate }: { endDate: string }) {
  const leftTime = dayjs(endDate).diff(dayjs(), "second");
  const [time, setTime] = React.useState(leftTime);
  const formattedTime = dayjs(time * 1000)
    .format("HH:mm:ss")
    .toString();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex items-end justify-center h-[250px]">
        <img
          width={120}
          height={120}
          alt="left-time"
          src="/src/assets/Waiting.gif"
        />
      </div>
      <div className="px-5 py-4 flex flex-col items-center space-y-[10px] bg-offWhite010/40 rounded-12">
        <h4 className="t-b2-m-15 text-gray064">다음 투표까지 남은 시간:</h4>
        <p className="t-h2-b-26 text-purple100 tabular-nums">{formattedTime}</p>
      </div>
    </>
  );
}
