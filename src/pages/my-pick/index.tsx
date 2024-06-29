import Back from "@/assets/ic_24_back.svg?react";
import { Header } from "@/components/common/Header";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { ChipButton } from "./ChipButton";
import { PickCardList } from "./PickCardList";
import { Profile } from "./Profile";

export const MyPickPage = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.9,
  });
  const [selectedChipFilter, setSelectedChipFilter] = useState<
    "latest" | "popular"
  >("latest");

  return (
    <>
      <Header
        title="내가 받은 픽"
        left={<Back />}
        className={cn("fixed transition-colors duration-300", {
          "bg-offWhite010": !isIntersecting,
        })}
      />
      <div className="flex flex-col">
        <Profile profileRef={ref} />
        <div className="flex items-center space-x-2 px-4 py-1.5 mt-7 sticky top-[52px] bg-offWhite010">
          <ChipButton
            isActive={selectedChipFilter === "latest"}
            onClick={() => setSelectedChipFilter("latest")}
          >
            최신 Pick 순
          </ChipButton>
          <ChipButton
            isActive={selectedChipFilter === "popular"}
            onClick={() => setSelectedChipFilter("popular")}
          >
            Pick 많은 순
          </ChipButton>
        </div>
        {/* TODO: Chip Filter에 따른 필터 */}
        <PickCardList />
      </div>
    </>
  );
};
