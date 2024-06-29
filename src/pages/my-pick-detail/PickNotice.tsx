import Image from "@/components/common/Image";
import type { IntersectionReturn } from "@/hooks/useIntersection";

export const PickNotice = ({
  descriptionRef,
}: {
  descriptionRef: IntersectionReturn["ref"];
}) => {
  return (
    <div className="bg-gradient-purple pt-[54px] flex flex-col items-center relative">
      <div className="bg-gradient-white absolute bottom-0 right-0 left-0 top-[175px]" />
      <p
        className="t-h3-sb-22 text-gray084 text-center px-[28px] h-[84px]"
        ref={descriptionRef}
      >
        매쉬업에서 친구에게 이성으로 소개시켜주고 싶은 사람? 매쉬업에서
        매쉬업에서 친구에게 이성으로 소개소개
      </p>
      <div className="flex justify-center items-center w-[120px] h-[120px]">
        <Image
          src="https://picsum.photos/seed/picsum/200/300"
          alt="pick"
          className="w-[96px] h-[96px] rounded-0 z-[1]"
        />
      </div>
      <div className="w-[250px] relative mt-5">
        <div className="flex flex-col space-y-1 items-center bg-offWhite010 px-7 pt-3 pb-4 rounded-[100px] relative  shadow-lg">
          <strong className="t-h5-b-17 text-gray084">7명</strong>
          <span className=" t-c2-m-12 text-gray054">
            이 질문에서 이현재님을{" "}
            <strong className="text-purple100">Pick</strong>했어요
          </span>
        </div>
        <div className="absolute -top-[16px] arrow-top" />
      </div>
    </div>
  );
};
