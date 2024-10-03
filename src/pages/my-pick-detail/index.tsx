import GemImage from "@/assets/gem.png";
import { BackButton } from "@/components/common/BackButton";
import { Header } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { useGetCurrentCoin } from "@/generated/coin/coin";
import type { ReceivedPickDetail } from "@/generated/model";
import { getGetPickDetailQueryOptions } from "@/generated/pick/pick";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { cn } from "@/utils/cn";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PickBottomSheet } from "./PickBottomSheet";
import { PickNotice } from "./PickNotice";
import { PickNoticeList } from "./PickNoticeList";

type MyPickDetailPageProps = {
  questionId: string;
};

export const MyPickDetailPage: ActivityComponentType<MyPickDetailPageProps> = ({
  params,
}) => {
  const { questionId } = params;
  const { data: coin, refetch: currentCoinRefetch } = useGetCurrentCoin({
    query: {
      select: ({ data }) => data?.amount ?? 0,
    },
  });

  const { data: pickDetail, refetch: pickDetailRefetch } = useQuery(
    getGetPickDetailQueryOptions(
      {
        questionId,
      },
      {
        query: {
          select: ({ data }) => {
            if (!data) {
              return undefined;
            }
            const { picks, ...question } = data;
            return {
              picks: picks,
              question,
            };
          },
        },
      },
    ),
  );

  const [selectedPick, setSelectedPick] = useState<null | ReceivedPickDetail>(
    null,
  );
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.9,
    initialIsIntersecting: true,
  });

  const handleSelectPick = (pickId: string) => {
    const pick = pickDetail?.picks.find((pick) => pick.pickId === pickId);
    setSelectedPick(pick ?? null);
    setIsOpenSheet(true);
  };

  if (!pickDetail) {
    return <div>데이터가 없어요.</div>;
  }

  const { picks, question } = pickDetail;

  return (
    <AppScreen>
      <Header
        title={isIntersecting ? "" : question.questionContent}
        left={<BackButton />}
        right={
          <div className="flex gap-1 items-center">
            <Image src={GemImage} className="w-[18px] h-[18px]" />
            <span className="t-h6-sb-15">{coin ?? "-"}</span>
          </div>
        }
        className={cn("transition-colors duration-100 bg-transparent", {
          "bg-offWhite010": !isIntersecting,
        })}
      />
      <div className="flex flex-col absolute top-0 w-full">
        <PickNotice descriptionRef={ref} {...question} />
        <PickNoticeList onSelectPick={handleSelectPick} picks={picks} />
      </div>
      <PickBottomSheet
        refetch={() => {
          pickDetailRefetch();
          currentCoinRefetch();
        }}
        selectedPick={selectedPick}
        isOpen={isOpenSheet}
        onClose={() => {
          setIsOpenSheet(false);
        }}
      />
    </AppScreen>
  );
};
