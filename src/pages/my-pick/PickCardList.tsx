import Image from "@/components/common/Image";
import { PickResponse } from "@/generated/model";
import { useGetReceivedPickList } from "@/generated/pick/pick";
import { getPassedTimeText } from "@/utils/getPassedTimeText";
import { Link } from "react-router-dom";

export const PickCardList = () => {
  const { data: cardList, isPending } = useGetReceivedPickList(
    { sort: "LATEST" },
    {
      query: {
        select: ({ data }) => {
          if (!data) {
            return [];
          }
          return data.pickList || [];
        },
      },
    },
  );

  if (isPending) {
    return <div>loading...</div>;
  }

  return (
    <ul className="pb-[60px]">
      {cardList?.map((card) => (
        <PickCard key={card.questionId} {...card} />
      ))}
    </ul>
  );
};

const PickCard = ({
  latestPickedAt,
  questionContent,
  questionEmojiImageUrl,
  totalReceivedPickCount,
}: PickResponse) => {
  return (
    <li className="h-[116px] px-4 items-center">
      <Link
        to="/pick/1"
        className="h-[116px] flex items-center border-b-gray005 border-solid border-b &:first-of-type:border-t-gray005 &:first-child:border-t"
      >
        <div className="flex flex-col space-y-1.5 flex-1">
          <p className="text-gray084">{questionContent}</p>
          <div className="flex space-x-1.5 items-center">
            <span className="t-c1-m-13 text-purple100">
              Pick {totalReceivedPickCount}
            </span>
            <span className="w-[2px] h-[2px] rounded-4 bg-gray022" />
            <span className="t-c1-r-13 text-gray054">
              {getPassedTimeText(latestPickedAt)}
            </span>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0 w-[76px] h-[76px] rounded-8 bg-offWhite020 flex items-center justify-center">
          <Image
            src={questionEmojiImageUrl}
            alt="pick"
            className="w-[60px] h-[60px] rounded-0"
          />
        </div>
      </Link>
    </li>
  );
};
