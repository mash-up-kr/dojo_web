import GEM from "@/assets/ic22_dia.svg?react";
import Image from "@/components/common/Image";
import type { IntersectionReturn } from "@/hooks/useIntersection";
import { Link } from "@tanstack/react-router";
import { memo } from "react";

export const Profile = memo(
  ({
    profileRef,
  }: {
    profileRef: IntersectionReturn["ref"];
  }) => {
    return (
      <div className="bg-gradient-purple px-4 pb-5 pt-[52px]" ref={profileRef}>
        <div className="flex items-center">
          <Image
            src="https://picsum.photos/seed/picsum/200/300"
            alt="이름"
            className="w-[64px] h-[64px] rounded-[100px] border-[1px] border-solid border-offWhite010"
          />
          <div className="flex flex-col space-y-1 ml-3">
            <strong className="t-h5-b-17">리아코</strong>
            <p className="t-c1-r-13">Product Design 14기</p>
          </div>
          <button
            type="button"
            className="rounded-[100px] text-gray084 bg-[#ffffff4d] t-c2-r-12 ml-auto px-3 py-1.5"
          >
            사진 변경
          </button>
        </div>
        <div className="flex mt-5 bg-offWhite010 py-[13px] px-4 rounded-8 items-center">
          <GEM />
          <span className="t-b3-m-14 ml-[2px]">매시젬</span>
          <strong className="text-purple100 t-b3-sb-14 ml-2">200개</strong>
          <Link className="text-gray054 t-c1-m-13 ml-auto" to="/vote">
            질문 답해서 얻기 {">"}
          </Link>
        </div>
      </div>
    );
  },
);

Profile.displayName = "Profile";
