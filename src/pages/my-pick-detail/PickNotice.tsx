import Image from "@/components/common/Image";
import { useMe } from "@/generated/member/member";
import type { PickPaging } from "@/generated/model";
import type { IntersectionReturn } from "@/hooks/useIntersection";
import { motion } from "framer-motion";

export const PickNotice = ({
  descriptionRef,
  ...question
}: {
  descriptionRef: IntersectionReturn["ref"];
} & Omit<PickPaging, "picks" | "anyOpenPickerCount">) => {
  const { data: profile } = useMe({
    query: {
      select: ({ data }) => data,
    },
  });

  return (
    <div className="bg-gradient-purple pt-[54px] flex flex-col items-center relative px-6">
      <div className="bg-gradient-white absolute bottom-0 right-0 left-0 top-[175px]" />
      <p
        className="t-h3-sb-22 text-gray084 text-center px-[28px] h-[84px]"
        ref={descriptionRef}
      >
        {question.questionContent}
      </p>
      <div className="flex justify-center items-center w-[120px] h-[120px]">
        <Image
          src={question.questionEmojiImageUrl}
          alt="pick"
          className="w-[96px] h-[96px] rounded-0 z-[1]"
        />
      </div>
      <motion.div
        className="w-full relative mt-5"
        initial={{ transform: "translateY(-10px)" }}
        animate={{ transform: "translateY(0px)" }}
        transition={{ duration: 0.65, repeat: 5, repeatType: "reverse" }}
      >
        <div className="flex flex-col space-y-1 items-center bg-offWhite010 px-7 pt-3 pb-4 rounded-[100px] relative shadow-lg">
          <strong className="t-h5-b-17 text-gray084">
            {question.totalReceivedPickCount}명
          </strong>
          <span className=" t-c2-m-12 text-gray054">
            이 질문에서 {profile?.memberName ?? "-"} 님을{" "}
            <strong className="text-purple100">Pick</strong>했어요
          </span>
        </div>
        <div className="absolute -top-[16px] arrow-top" />
      </motion.div>
    </div>
  );
};
