import Image from "@/components/common/Image";
import { Link } from "@tanstack/react-router";

export const Profile = () => {
  return (
    <div className="bg-gradient-purple px-4 pb-5 pt-[52px]">
      <div className="flex items-center">
        <Image
          src="https://picsum.photos/seed/picsum/200/300"
          alt="이름"
          className="w-[64px] h-[64px] rounded-[100px]"
        />
        <div className="flex flex-col space-y-1 ml-3">
          <strong className="t-h5-b-17">리아코</strong>
          <p className="t-c1-r-13">Product Design 14기</p>
        </div>
        <button
          type="button"
          className="rounded-[100px] text-gray084 bg-offWhite010 t-c2-r-12 ml-auto px-3 py-1.5"
        >
          사진 변경
        </button>
      </div>
      <div className="flex mt-5 bg-offWhite010 py-[13px] px-4 rounded-8">
        <span className="t-b3-m-14">Mash-Gem</span>
        <strong className="text-purple100 t-b3-sb-14 ml-2">200개</strong>
        <Link className="text-gray054 t-c1-m-13 ml-auto">
          질문 답해서 얻기 {">"}
        </Link>
      </div>
    </div>
  );
};
