import GEM from "@/assets/ic22_dia.svg?react";
import { BackButton } from "@/components/common/BackButton";
import { Header } from "@/components/common/Header";
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
  const { data: pickDetail } = useQuery(
    getGetPickDetailQueryOptions(
      {
        pageNumber: 0,
        pageSize: 100,
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
          // TODO: GEM 개수 API 연동
          <div className="flex space-x-[2px] items-center">
            <GEM />
            <span className="t-h6-sb-15">200</span>
          </div>
        }
        className={cn("transition-colors duration-100 bg-transparent", {
          "bg-offWhite010": !isIntersecting,
        })}
      />
      <div className="flex flex-col absolute top-0">
        <PickNotice descriptionRef={ref} {...question} />
        <PickNoticeList onSelectPick={handleSelectPick} picks={picks} />
      </div>
      <PickBottomSheet
        selectedPick={selectedPick}
        isOpen={isOpenSheet}
        onClose={() => {
          setIsOpenSheet(false);
        }}
      />
      {/* <PickAlert /> */}
    </AppScreen>
  );
};
