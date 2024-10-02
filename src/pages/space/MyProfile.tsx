import CAMERA from "@/assets/ic14_camera.svg?react";
import GEM from "@/assets/ic22_dia.svg?react";
import Image from "@/components/common/Image";
import { getGetCurrentCoinQueryOptions } from "@/generated/coin/coin";
import { getMeQueryOptions } from "@/generated/member/member";
import type { ReceivedPickDetailPickerPlatform } from "@/generated/model";
import type { IntersectionReturn } from "@/hooks/useIntersection";
import { Link } from "@/stackflow/Link";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { cn } from "@/utils/cn";
import { getPlatformText } from "@/utils/getPlatformText";
import { useSuspenseQuery } from "@tanstack/react-query";
import { memo } from "react";
import type { ClassNameValue } from "tailwind-merge";
import { CounterBox } from "./CounterBox";

export const MyProfile = memo(
  ({
    profileRef,
    containerClassName,
  }: {
    profileRef: IntersectionReturn["ref"];
    containerClassName?: ClassNameValue;
  }) => {
    const { push } = useMyFlow();
    const { data: profile } = useSuspenseQuery(
      getMeQueryOptions({
        query: {
          select: ({ data }) => {
            return data;
          },
        },
      }),
    );

    const { data: coin } = useSuspenseQuery(
      getGetCurrentCoinQueryOptions({
        query: {
          select: ({ data }) => data?.amount ?? 0,
        },
      }),
    );

    return (
      <div
        className={cn(
          "bg-gradient-purple px-4 pb-4 pt-[72px] relative",
          containerClassName,
        )}
        ref={profileRef}
      >
        <div className="bg-gradient-white absolute bottom-0 right-0 left-0 h-[62px]" />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              activityName="ProfilePage"
              activityParams={{}}
              className="relative"
            >
              <Image
                src={profile?.profileImageUrl}
                alt="이름"
                className="w-[64px] h-[64px] rounded-[100px] border-[1px] border-solid border-gray022"
              />
              <button
                className="absolute -bottom-[14px] -right-[14px] w-[42px] h-[42px] flex justify-center items-center"
                type="button"
              >
                <div className="bg-offWhite010 w-[22px] h-[22px] rounded-half shadow-sm flex justify-center items-center">
                  <CAMERA />
                </div>
              </button>
            </Link>
            <div className="flex flex-col space-y-1 ml-3">
              <strong className="t-h5-b-17">{profile?.memberName}</strong>
              <p className="t-c1-r-13">
                {profile
                  ? getPlatformText(
                      profile.platform as ReceivedPickDetailPickerPlatform,
                    )
                  : "-"}{" "}
                {profile?.ordinal ?? "-"}기
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-5 items-center">
            <GEM />
            <strong className="text-gray100 t-h6-sb-15 ml-1">{coin}</strong>
          </div>
        </div>
        <div className="flex space-x-4 mt-6 z-10 relative">
          <CounterBox
            title="내가 받은 픽"
            onClick={() => push("MyPickPage", {})}
            counter={profile?.pickCount ?? 0}
          />

          <CounterBox
            title="내 친구들"
            onClick={() => push("FriendMainPage", {})}
            counter={profile?.friendCount ?? 0}
          />
        </div>
      </div>
    );
  },
);

MyProfile.displayName = "MyProfile";
