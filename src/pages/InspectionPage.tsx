import WAITING from "@/assets/Waiting.gif";
import Image from "@/components/common/Image";
import { cn } from "@/utils/cn";
import { getGradientBg } from "@/utils/getGradientBg";
import { AppScreen } from "@stackflow/plugin-basic-ui";

const backgroundColor = getGradientBg();

export const InspectionPage = () => {
  return (
    <AppScreen>
      <div
        className={cn(
          "h-full w-full flex flex-col gap-4 items-center justify-center",
          backgroundColor,
        )}
      >
        <div className="ml-2 flex flex-col gap-2 items-center">
          <span className="t-b1-m-17 text-gray084">
            MVP 많은 관심주셔서 감사합니다 🙏
          </span>
          <span className="t-b2-m-15  text-gray084">
            <strong className="text-purple100">9월 7일</strong> 런칭 데이를
            기대해주세요 🚀
          </span>
        </div>
        <Image src={WAITING} alt="Waiting" className="w-[200px] h-[200px]" />
      </div>
    </AppScreen>
  );
};
