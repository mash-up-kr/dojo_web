import { BackButton } from "@/components/common/BackButton";
import { DeferredComponent } from "@/components/common/DefferedComponent";
import { Header } from "@/components/common/Header";
import type { GetReceivedPickListSort } from "@/generated/model";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { Suspense, useState } from "react";
import { ChipButton } from "./ChipButton";
import { PickCardList } from "./PickCardList";

export const MyPickPage = () => {
  const [selectedChipFilter, setSelectedChipFilter] =
    useState<GetReceivedPickListSort>("LATEST");

  return (
    <AppScreen>
      <div className="h-full flex flex-col">
        <Header title="내가 받은 픽" left={<BackButton />} />
        <div className="flex flex-col flex-1">
          <div className="flex items-center space-x-2 px-4 py-1.5 sticky top-[52px] bg-offWhite010">
            <ChipButton
              isActive={selectedChipFilter === "LATEST"}
              onClick={() => setSelectedChipFilter("LATEST")}
            >
              최신 Pick 순
            </ChipButton>
            <ChipButton
              isActive={selectedChipFilter === "MOST_PICKED"}
              onClick={() => setSelectedChipFilter("MOST_PICKED")}
            >
              Pick 많은 순
            </ChipButton>
          </div>
          <Suspense
            fallback={<DeferredComponent>loading...</DeferredComponent>}
          >
            <PickCardList sort={selectedChipFilter} />
          </Suspense>
        </div>
      </div>
    </AppScreen>
  );
};
