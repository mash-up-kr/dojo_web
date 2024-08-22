import { Button } from "@/components/common/Button";
import Image from "@/components/common/Image";
import type { ReceivedPickDetail } from "@/generated/model";
import { getPassedTimeText } from "@/utils/getPassedTimeText";

export const PickNoticeList = ({
  onSelectPick,
  picks,
}: {
  onSelectPick: (pickId: string) => void;
  picks: ReceivedPickDetail[];
}) => {
  return (
    <ul className="pt-6 pb-[60px]">
      {picks.map((pick, index) => (
        <li
          className="h-[106px] px-4 items-center"
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
        >
          <div className="h-[106px] flex items-center border-b-gray005 border-solid border-b-[1px] space-x-3 text-left">
            <Image alt="pick" className="w-[44px] h-[44px]" />
            <div className="flex flex-col space-y-1.5 flex-1">
              <p className="text-gray084">
                <strong>
                  {pick.pickerOrdinal ?? "**"}기 {pick.pickerPlatform ?? ""}{" "}
                  {pick.pickerFullName ?? "***"}님
                </strong>
                에게 선택받았어요.
              </p>
              <span className="t-c1-r-13 text-gray054">
                {getPassedTimeText(new Date().toDateString())}
              </span>
            </div>
            <Button
              buttonType="primary"
              size="sm"
              className="ml-3"
              onClick={(e) => {
                e.stopPropagation();
                onSelectPick(pick.pickId ?? "");
              }}
            >
              확인하기
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
