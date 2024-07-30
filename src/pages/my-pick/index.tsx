import Back from "@/assets/ic_24_back.svg?react";
import { Header } from "@/components/common/Header";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChipButton } from "./ChipButton";
import { PickCardList } from "./PickCardList";

export const MyPickPage = () => {
  const [selectedChipFilter, setSelectedChipFilter] = useState<
    "latest" | "popular"
  >("latest");

  return (
    <>
      <Header
        title="내가 받은 픽"
        left={
          <Link to="/vote">
            <Back />
          </Link>
        }
        className="sticky top-0 bg-offWhite010"
      />
      <div className="flex flex-col">
        <div className="flex items-center space-x-2 px-4 py-1.5 sticky top-[56px] bg-offWhite010">
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
        <PickCardList />
      </div>
    </>
  );
};
