import GHOST from "@/assets/ic24_ghost.svg?react";
import THUMB from "@/assets/ic24_thumb.svg?react";
import BRONZE from "@/assets/ic32_bronze.svg?react";
import GOLD from "@/assets/ic32_gold.svg?react";
import SILVER from "@/assets/ic32_silver.svg?react";
import Back from "@/assets/ic_24_back.svg?react";
import { FriendItem } from "@/components/FriendItem";
import { Header } from "@/components/common/Header";
import { useGetFriends } from "@/generated/member-relation/member-relation";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { Link } from "@/stackflow/Link";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { cn } from "@/utils/cn";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ListContainer } from "./ListContainer";
import { MyProfile } from "./MyProfile";
import { PickRankCard } from "./PickRankCard";

export const MySpace = () => {
  const { push } = useMyFlow();
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.9,
    initialIsIntersecting: true,
  });
  const { data: friendsRes } = useGetFriends();

  return (
    <AppScreen>
      <Header
        title="마이 스페이스"
        left={
          <Link activityName="VotePage" activityParams={{}}>
            <Back />
          </Link>
        }
        className={cn("fixed transition-colors duration-100", {
          "bg-offWhite010": !isIntersecting,
        })}
      />
      <div className="flex flex-col pb-20">
        <MyProfile profileRef={ref} />
        <ListContainer
          titleIcon={<THUMB />}
          title="내가 받은 픽"
          onClickMoreButton={() => push("MyPickPage", {})}
          containerClassName="pt-6"
        >
          <div className="space-y-2.5">
            {/* TODO: 내가 받은 픽 정책 반영하기 */}
            <PickRankCard
              icon={<GOLD />}
              content="대충 작업해도 퀄리티를 등등등 대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등"
              pickCount={14}
            />
            <PickRankCard
              icon={<SILVER />}
              content="대충 작업해도 퀄리티를 등등등 대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등"
              pickCount={14}
            />
            <PickRankCard icon={<BRONZE />} content="zz" pickCount={14} />
          </div>
        </ListContainer>
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
              isMyFriend
              className="px-0"
            />
          ))}
        </ListContainer>
      </div>
    </AppScreen>
  );
};
