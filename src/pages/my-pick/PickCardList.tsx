import Image from "@/components/common/Image";
import type { GetReceivedPickListSort, PickResponse } from "@/generated/model";
import { getGetReceivedPickListQueryOptions } from "@/generated/pick/pick";
import { Link } from "@/stackflow/Link";
import { getPassedTimeText } from "@/utils/getPassedTimeText";
import { useSuspenseQuery } from "@tanstack/react-query";

export const PickCardList = ({
  sort,
}: {
  sort: GetReceivedPickListSort;
}) => {
  const { data } = useSuspenseQuery(
    getGetReceivedPickListQueryOptions({
      sort,
    }),
  );

  const cardList = data.data?.pickList ?? [];

  if (cardList.length === 0) {
    return (
      <div className="flex-1 flex flex-col space-y-1.5 items-center justify-center">
        <p className="text-gray084 t-h5-sb-17">아직 날 선택한 사람이 없어요</p>
        <p className="text-gray054 t-b3-r-14">조금만 더 기다려볼까요?</p>
      </div>
    );
  }

  return (
    <ul className="pb-[60px]">
      {cardList.map((card) => (
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
  questionId,
}: PickResponse) => {
  return (
    <li className="h-[116px] px-4 items-center">
      <Link
        activityName="MyPickDetailPage"
        // TODO: questionId를 받아서 MyPickDetailPage로 이동
        activityParams={{ questionId }}
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
