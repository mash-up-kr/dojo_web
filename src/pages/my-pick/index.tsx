import Back from "@/assets/ic_24_back.svg?react";
import { Header } from "@/components/common/Header";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useState } from "react";
import { ChipButton } from "./ChipButton";
import { PickCardList } from "./PickCardList";

export const MyPickPage = () => {
  const { pop } = useMyFlow();
  const [selectedChipFilter, setSelectedChipFilter] = useState<
    "latest" | "popular"
  >("latest");

  return (
    <AppScreen>
      <Header
        title="내가 받은 픽"
        left={
          <button type="button" onClick={pop}>
            <Back />
          </button>
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
    </AppScreen>
  );
};
