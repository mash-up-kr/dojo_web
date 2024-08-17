import GEM from "@/assets/ic22_dia.svg?react";
import Close from "@/assets/ic_24_close.svg?react";
import { Header } from "@/components/common/Header";
import { getGetPickDetailQueryOptions } from "@/generated/pick/pick";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { Link } from "@/stackflow/Link";
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

  console.log(questionId);
  // TODO: generator DTO 반영
  const [selectedPick, setSelectedPick] = useState<null | {
    pickId: string;
  }>(null);
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    initialIsIntersecting: true,
  });

  const handleSelectPick = (pickId: string) => {
    setSelectedPick({ pickId });
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
        left={
          <Link
            activityName="MyPickPage"
            activityParams={{}}
            className="w-6 h-6 flex items-center"
          >
            <Close />
          </Link>
        }
        right={
          // TODO: GEM 개수 API 연동
          <div className="flex space-x-[2px] items-center">
            <GEM />
            <span className="t-h6-sb-15">200</span>
          </div>
        }
        className={cn("fixed transition-colors duration-300", {
          "bg-offWhite010": !isIntersecting,
        })}
      />
      <div className="flex flex-col">
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
