import { Button } from "@/components/common/Button";
import Image from "@/components/common/Image";
import Modal from "@/components/common/Modal";
import type {
  MemberCreateRequestGender,
  PickOpenResponse,
  ReceivedPickDetail,
  ReceivedPickDetailPickerPlatform,
} from "@/generated/model";
import { getGenderText, getPlatformText } from "./utils";

const PICK_OPEN_TEXT: Record<PickOpenResponse["pickOpenItem"], string> = {
  FULL_NAME: "이름",
  GENDER: "성별",
  MID_INITIAL_NAME: "초성은",
  PLATFORM: "플랫폼",
};

export type PickAlertProps = {
  pickOpen: Omit<PickOpenResponse, "pickId">;
  selectedPick: ReceivedPickDetail;
  onClose: VoidFunction;
};

export const PickAlert = ({
  pickOpen,
  selectedPick,
  onClose,
}: PickAlertProps) => {
  const getPickOpenValueText = (
    openItem: PickOpenResponse["pickOpenItem"],
    openValue: PickOpenResponse["pickOpenValue"],
  ) => {
    switch (openItem) {
      case "GENDER":
        return getGenderText(openValue as MemberCreateRequestGender);
      case "PLATFORM":
        return getPlatformText(openValue as ReceivedPickDetailPickerPlatform);
      default:
        return openValue;
    }
  };

  return (
    <Modal isOpen onClose={onClose} className="p-7 max-w-[300px]">
      <div className="flex flex-col items-center">
        <p className="t-h5-b-17">
          {selectedPick.pickerOrdinal ?? "**"}기{" "}
          {selectedPick.pickerPlatform ?? ""}{" "}
          {selectedPick.pickerFullName ?? "***"}님의{" "}
          {PICK_OPEN_TEXT[pickOpen.pickOpenItem]}은?
        </p>
        <div className="space-y-3 text-center mt-6">
          {pickOpen.pickOpenImageUrl && (
            <Image src={pickOpen.pickOpenImageUrl} alt="이미지" />
          )}
          <span className="t-h3-b-22 inline-block">
            {getPickOpenValueText(
              pickOpen.pickOpenItem,
              pickOpen.pickOpenValue,
            )}
          </span>
        </div>
        <Button className="rounded-full mt-10" onClick={onClose}>
          확인
        </Button>
      </div>
    </Modal>
  );
};
