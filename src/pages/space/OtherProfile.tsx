import { FriendAddButton } from "@/components/FriendAddButton";
import Image from "@/components/common/Image";
import { getGetProfileQueryOptions } from "@/generated/member/member";
import type { IntersectionReturn } from "@/hooks/useIntersection";
import { cn } from "@/utils/cn";
import { useActivityParams } from "@stackflow/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { memo } from "react";
import type { ClassNameValue } from "tailwind-merge";
import { CounterBox } from "./CounterBox";

export const OtherProfile = memo(
  ({
    profileRef,
    containerClassName,
  }: {
    profileRef: IntersectionReturn["ref"];
    containerClassName?: ClassNameValue;
  }) => {
    const { memberId } = useActivityParams<{
      memberId: string;
    }>();
    const { data: profile } = useSuspenseQuery(
      getGetProfileQueryOptions(memberId, {
        query: {
          select: ({ data }) => {
            return data;
          },
        },
      }),
    );

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
                src={profile?.profileImageUrl}
                alt="프로필"
                className="w-[64px] h-[64px] rounded-[100px] border-[1px] border-solid border-offWhite010"
              />
            </div>
            <div className="flex flex-col space-y-1 ml-3">
              <strong className="t-h5-b-17">
                {profile?.memberName ?? "-"}
              </strong>
              <p className="t-c1-r-13">{profile?.platform}</p>
            </div>
          </div>
          <FriendAddButton memberId={memberId} />
        </div>
        <div className="flex space-x-4 mt-6 z-10 relative">
          <CounterBox title="받은 픽" counter={profile?.pickCount ?? 0} />
          <CounterBox title="친구들" counter={profile?.friendCount ?? 0} />
        </div>
      </div>
    );
  },
);

OtherProfile.displayName = "OtherProfile";
