import Image from "@/components/common/Image";
import { getPassedTimeText } from "@/utils/getPassedTimeText";
import { Link } from "react-router-dom";

export const PickCardList = () => {
  return (
    <ul className="pb-[60px]">
      {[...Array(10)].map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <PickCard key={index} />
      ))}
    </ul>
  );
};

const PickCard = () => {
  return (
    <li className="h-[116px] px-4 items-center">
      <Link
        to="/pick/1"
        className="h-[116px] flex items-center border-b-gray005 border-solid border-b-[1px] &:first-of-type:border-t-gray005 &:first-child:border-t-[1px]"
      >
        <div className="flex flex-col space-y-1.5 flex-1">
          <p className="text-gray084">
            매시업에서 술 제일 잘 마실 것 같은 사람은?
          </p>
          <div className="flex space-x-1.5 items-center">
            <span className="t-c1-m-13 text-purple100">Pick 1</span>
            <span className="w-[2px] h-[2px] rounded-4 bg-gray022" />
            <span className="t-c1-r-13 text-gray054">
              {getPassedTimeText(new Date().toDateString())}
            </span>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0 w-[76px] h-[76px] rounded-8 bg-offWhite020 flex items-center justify-center">
          <Image
            src="https://picsum.photos/seed/picsum/200/300"
            alt="pick"
            className="w-[60px] h-[60px] rounded-0"
          />
        </div>
      </Link>
    </li>
  );
};
