import Back from "@/assets/ic_24_back.svg?react";
import { FriendItem } from "@/components/FriendItem";
import { Header } from "@/components/common/Header";
import {
  useGetFriends,
  useGetRecommendFriends,
} from "@/generated/member-relation/member-relation";
import { Link } from "@/stackflow/Link";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { getRandomItems } from "@/utils/getRandomItems";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { type ActivityComponentType, useActivity } from "@stackflow/react";
import { useEffect } from "react";
import { SearchInput } from "../SearchInput";

export const FriendMainPage: ActivityComponentType = () => {
  const { pop } = useMyFlow();
  const { transitionState } = useActivity();
  const { data: recommendFriendRes, refetch: refetchRecommendFriends } =
    useGetRecommendFriends();
  const { data: friendRes, refetch: refectchFriends } = useGetFriends();

  useEffect(() => {
    if (transitionState === "enter-active") {
      refetchRecommendFriends();
      refectchFriends();
    }
  }, [transitionState, refectchFriends, refetchRecommendFriends]);

  return (
    <AppScreen>
      <Header
        left={
          <button type="button" onClick={pop}>
            <Back />
          </button>
        }
        title="내 친구들"
      />
      <Link activityName="FriendSearchPage" activityParams={{}}>
        <div className="px-4 py-1.5">
          <SearchInput />
        </div>
      </Link>
      <section className="mb-2">
        <header className="flex justify-between items-center px-4 pt-3 pb-1">
          <h2 className="t-b3-sb-14">추천 친구</h2>
          <Link
            activityName="FriendRecommendPage"
            activityParams={{}}
            className="t-c1-r-13 text-gray054"
          >
            더보기
          </Link>
        </header>
        <ul>
          {getRandomItems(recommendFriendRes?.data ?? [], 2).map(
            (recommendFriend) => {
              return (
                <FriendItem
                  key={recommendFriend.memberId}
                  friendInfo={recommendFriend}
                />
              );
            },
          )}
        </ul>
      </section>
      <section className="mb-20">
        <h2 className="px-4 pt-3 pb-1 t-b3-sb-14">내 친구</h2>
        <ul>
          {friendRes?.data?.map((friend) => {
            return (
              <FriendItem
                key={friend.memberId}
                friendInfo={friend}
                isMyFriend
              />
            );
          })}
        </ul>
      </section>
    </AppScreen>
  );
};
