import Close from "@/assets/ic_24_close.svg?react";
import { Header } from "@/components/common/Header";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { cn } from "@/utils/cn";
import { useRouter } from "@tanstack/react-router";
import { PickNotice } from "./PickNotice";
import { PickNoticeList } from "./PickNoticeList";

export const MyPickDetailPage = () => {
  const { history } = useRouter();
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <>
      <Header
        title={
          isIntersecting
            ? ""
            : "매쉬업에서 친구에게 이성으로 소개시켜주고 싶은 사람? 매쉬업에서 매쉬업에서 친구에게 이성으로 소개소개"
        }
        left={
          <button
            type="button"
            onClick={() => history.back()}
            className="w-6 h"
          >
            <Close />
          </button>
        }
        className={cn("fixed transition-colors duration-300", {
          "bg-offWhite010": !isIntersecting,
        })}
      />
      <div className="flex flex-col">
        <PickNotice descriptionRef={ref} />
        <PickNoticeList />
      </div>
    </>
  );
};
