import GHOST from "@/assets/ic24_ghost.svg?react";
import THUMB from "@/assets/ic24_thumb.svg?react";
import BRONZE from "@/assets/ic32_bronze.png";
import GOLD from "@/assets/ic32_gold.png";
import SILVER from "@/assets/ic32_silver.png";
import { FriendItem } from "@/components/FriendItem";
import { BackButton } from "@/components/common/BackButton";
import { Header } from "@/components/common/Header";
import { useGetFriends } from "@/generated/member-relation/member-relation";
import { getMySpaceQueryOptions } from "@/generated/member/member";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { cn } from "@/utils/cn";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ListContainer } from "./ListContainer";
import { MyProfile } from "./MyProfile";
import { PickRankCard } from "./PickRankCard";

export const RANK_ICON: Record<number, string> = {
  1: GOLD,
  2: SILVER,
  3: BRONZE,
};

export const MySpace = () => {
  const { push } = useMyFlow();

  const { data: spacePickDetail } = useSuspenseQuery(
    getMySpaceQueryOptions({
      query: {
        select: ({ data }) => data?.mySpaceResponses ?? [],
      },
    }),
  );

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.9,
    initialIsIntersecting: true,
  });
  const { data: friendsRes } = useGetFriends();

  return (
    <AppScreen>
      <Header
        title="마이 스페이스"
        left={<BackButton />}
        className={cn("transition-colors duration-100 bg-transparent", {
          "bg-offWhite010": !isIntersecting,
        })}
      />
      <div className="flex flex-col pb-20 absolute top-0 w-full">
        <MyProfile profileRef={ref} />
        {spacePickDetail.length > 0 && (
          <ListContainer
            titleIcon={<THUMB />}
            title="내가 받은 픽"
            onClickMoreButton={() => push("MyPickPage", {})}
            containerClassName="pt-6"
          >
            <div className="space-y-2.5">
              {spacePickDetail.map((pick) => (
                <PickRankCard
                  key={pick.pickId}
                  content={pick.pickContent}
                  pickCount={pick.pickCount}
                  icon={RANK_ICON[pick.rank]}
                  onClick={() =>
                    push("MyPickDetailPage", { questionId: pick.questionId })
                  }
                />
              ))}
            </div>
          </ListContainer>
        )}
        <ListContainer
          containerClassName="pt-10"
          titleIcon={<GHOST />}
          title="내 친구들"
          onClickMoreButton={() => push("FriendMainPage", {})}
        >
          {friendsRes?.data?.map((friend) => (
            <FriendItem
              key={friend.memberId}
              friendInfo={friend}
              className="px-0"
            />
          ))}
        </ListContainer>
      </div>
    </AppScreen>
  );
};
