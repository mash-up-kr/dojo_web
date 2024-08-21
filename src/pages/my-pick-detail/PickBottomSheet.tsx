import GEM from "@/assets/ic22_dia.svg?react";
import ABC_IMAGE from "@/assets/ic24_abc.svg?react";
import FUNNY_IMAGE from "@/assets/ic24_funny.svg?react";
import GIRL_IMAGE from "@/assets/ic24_girl.svg?react";
import MAN_IMAGE from "@/assets/ic24_man.svg?react";

import {
  BottomSheet,
  type BottomSheetProps,
} from "@/components/common/BottomSheet";
import { Button } from "@/components/common/Button";
import { Toast } from "@/components/common/Toast";
import { useMe } from "@/generated/member/member";
import type {
  PickOpenResponsePickOpenItemDto,
  ReceivedPickDetail,
} from "@/generated/model";
import { cn } from "@/utils/cn";
import { type ButtonHTMLAttributes, useState } from "react";

export type PickBottomSheetProps = Omit<BottomSheetProps, "children"> & {
  selectedPick: null | ReceivedPickDetail;
};

export const PickBottomSheet = ({
  selectedPick,
  ...rest
}: PickBottomSheetProps) => {
  const { data: profile } = useMe({
    query: {
      select: ({ data }) => data,
    },
  });
  const [selectedPickType, setSelectedPickType] =
    useState<PickOpenResponsePickOpenItemDto | null>(null);

  const handleSelectPick = (pickInfo: (typeof PICKUP_INFO_BUTTONS)[number]) => {
    if (selectedPickType === pickInfo.pickType) {
      setSelectedPickType(null);
      return;
    }

    if (!profile || profile?.coinCount < pickInfo.amount) {
      Toast.alert("젬이 부족합니다.");
      return;
    }

    setSelectedPickType(pickInfo.pickType);
  };

  const disabled = setSelectedPickType === null;

  return (
    <BottomSheet {...rest}>
      <div className="flex flex-col p-4 items-center space-y-2">
        <span className="t-h5-b-17 text-gray084">
          {selectedPick?.pickerOrdinal ?? "**"}기{" "}
          {selectedPick?.pickerPlatform ?? ""}{" "}
          {selectedPick?.pickerFullName ?? "***"}님의 어떤 정보를 확인할까요?
        </span>
        <p className="text-gray040">
          내 매시젬{" "}
          <strong className="text-purple100">
            {profile?.coinCount ?? 0}개
          </strong>
        </p>
      </div>
      <div className="space-y-[10px]">
        {PICKUP_INFO_BUTTONS.map((info) => (
          <PickInfoButton
            {...info}
            isSelected={selectedPickType === info.pickType}
            key={info.description}
            onClick={() => {
              handleSelectPick(info);
            }}
          />
        ))}
      </div>
      <div className="pb-6 pt-10">
        <Button buttonType="primary" onClick={console.log} disabled={disabled}>
          {disabled ? "보고 싶은 정보를 선택하세요" : "이 정보 확인"}
        </Button>
      </div>
    </BottomSheet>
  );
};

const PickInfoButton = ({
  title,
  description,
  amount,
  Image,
  isSelected,
  ...rest
}: (typeof PICKUP_INFO_BUTTONS)[number] &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isSelected?: boolean;
  }) => {
  return (
    <button
      className={cn(
        "flex px-4 py-3 rounded-8 bg-offWhite020 text-left w-full",
        {
          "shadow-[0_0_0_1px_#854bff_inset] bg-purple006": isSelected,
        },
      )}
      type="button"
      {...rest}
    >
      <Image />
      <div className="flex flex-col space-y-1 flex-1 ml-3 my-1">
        <span className="t-h6-sb-15 text-gray100">{title}</span>
        <span className="t-c1-r-13 text-gray040">{description}</span>
      </div>
      <div className="flex space-x-1">
        <GEM />
        <span className="t-h6-sb-15">{amount}개</span>
      </div>
    </button>
  );
};

const PICKUP_INFO_BUTTONS: {
  pickType: PickOpenResponsePickOpenItemDto;
  title: string;
  description: string;
  amount: number;
  Image: React.FC;
}[] = [
  {
    pickType: "GENDER",
    title: "성별",
    description: "두근두근 성별 정보 보기",
    amount: 10,
    Image: GIRL_IMAGE,
  },
  {
    pickType: "PLATFORM",
    title: "플랫폼",
    description: "매시업 내 6개 직군 정보 보기",
    amount: 50,
    Image: MAN_IMAGE,
  },
  {
    pickType: "MID_INITIAL_NAME",
    title: "초성 1자",
    description: "그의 이름 중 1자 정보 보기",
    amount: 50,
    Image: ABC_IMAGE,
  },
  {
    pickType: "FULL_NAME",
    title: "이름",
    description: "그의 모든 것, 풀 이름 보기",
    amount: 150,
    Image: FUNNY_IMAGE,
  },
];
