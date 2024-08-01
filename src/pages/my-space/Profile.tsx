import CAMERA from "@/assets/ic14_camera.svg?react";
import GEM from "@/assets/ic22_dia.svg?react";
import Image from "@/components/common/Image";
import type { IntersectionReturn } from "@/hooks/useIntersection";
import { memo } from "react";
import { CounterBox } from "./CounterBox";

export const Profile = memo(
  ({
    profileRef,
  }: {
    profileRef: IntersectionReturn["ref"];
  }) => {
    return (
      <div className="bg-gradient-purple px-4 pb-5 pt-[72px]" ref={profileRef}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <Image
                src="https://picsum.photos/seed/picsum/200/300"
                alt="이름"
                className="w-[64px] h-[64px] rounded-[100px] border-[1px] border-solid border-offWhite010"
              />
              {/* TODO: 갤러리 이동 후 -> 사진업로드 -> 프로필 사진 변경 로직 */}
              <button
                className="absolute -bottom-[14px] -right-[14px] w-[42px] h-[42px] flex justify-center items-center"
                type="button"
              >
                <div className="bg-offWhite010 w-[22px] h-[22px] rounded-half shadow-sm flex justify-center items-center">
                  <CAMERA />
                </div>
              </button>
            </div>
            <div className="flex flex-col space-y-1 ml-3">
              <strong className="t-h5-b-17">리아코</strong>
              <p className="t-c1-r-13">Product Design 14기</p>
            </div>
          </div>
          <div className="flex justify-center mt-5 items-center">
            <GEM />
            <strong className="text-gray100 t-h6-sb-15 ml-1">200</strong>
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
          <CounterBox title="내가 받은 픽" counter={14} />
          <CounterBox title="내 친구들" counter={32} />
        </div>
      </div>
    );
  },
);

Profile.displayName = "Profile";
