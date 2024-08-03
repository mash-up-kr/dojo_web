import { Button } from "@/components/common/Button";
import Image from "@/components/common/Image";
import type { IntersectionReturn } from "@/hooks/useIntersection";
import { cn } from "@/utils/cn";
import { memo } from "react";
import type { ClassNameValue } from "tailwind-merge";
import { CounterBox } from "./CounterBox";

export const OtherProfile = memo(
  ({
    profileRef,
    containerClassName,
    isFriend = false,
  }: {
    profileRef: IntersectionReturn["ref"];
    containerClassName?: ClassNameValue;
    isFriend?: boolean;
  }) => {
    return (
      <div
        className={cn(
          "bg-gradient-purple px-4 pb-5 pt-[72px] relative",
          containerClassName,
        )}
        ref={profileRef}
      >
        <div className="bg-gradient-white absolute bottom-0 right-0 left-0 h-[82px]" />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <Image
                src="https://picsum.photos/seed/picsum/200/300"
                alt="이름"
                className="w-[64px] h-[64px] rounded-[100px] border-[1px] border-solid border-offWhite010"
              />
            </div>
            <div className="flex flex-col space-y-1 ml-3">
              <strong className="t-h5-b-17">리아코</strong>
              <p className="t-c1-r-13">Product Design 14기</p>
            </div>
          </div>
          <Button disabled={isFriend} className="w-fit px-2.5 py-1.5">
            {isFriend ? "추가됨" : "친구 추가"}
          </Button>
        </div>
        <div className="flex space-x-4 mt-6 z-10 relative">
          <CounterBox title="받은 픽" counter={14} />
          <CounterBox title="친구들" counter={32} />
        </div>
      </div>
    );
  },
);

OtherProfile.displayName = "OtherProfile";
