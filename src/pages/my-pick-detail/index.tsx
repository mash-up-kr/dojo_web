import GEM from "@/assets/ic22_dia.svg?react";
import Close from "@/assets/ic_24_close.svg?react";
import { Header } from "@/components/common/Header";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PickBottomSheet } from "./PickBottomSheet";
import { PickNotice } from "./PickNotice";
import { PickNoticeList } from "./PickNoticeList";

export const MyPickDetailPage = () => {
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

  return (
    <>
      <Header
        title={
          isIntersecting
            ? ""
            : "매쉬업에서 친구에게 이성으로 소개시켜주고 싶은 사람? 매쉬업에서 매쉬업에서 친구에게 이성으로 소개소개"
        }
        left={
          <Link to="/my-pick" className="w-6 h-6 flex items-center">
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
        <PickNotice descriptionRef={ref} />
        <PickNoticeList onSelectPick={handleSelectPick} />
      </div>
      <PickBottomSheet
        selectedPick={selectedPick}
        isOpen={isOpenSheet}
        onClose={() => {
          setIsOpenSheet(false);
        }}
      />
    </>
  );
};
