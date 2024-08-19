import { FriendItem } from "@/components/FriendItem";
import { BackButton } from "@/components/common/BackButton";
import { Header } from "@/components/common/Header";
import { useGetRecommendFriends } from "@/generated/member-relation/member-relation";
import { Link } from "@/stackflow/Link";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { type ActivityComponentType, useActivity } from "@stackflow/react";
import { useEffect } from "react";
import { SearchInput } from "../SearchInput";

export const FriendRecommendPage: ActivityComponentType = () => {
  const { transitionState } = useActivity();
  const { data: recommendFriendRes, refetch } = useGetRecommendFriends();

  useEffect(() => {
    if (transitionState === "enter-active") {
      refetch();
    }
  }, [transitionState, refetch]);

  return (
    <AppScreen>
      <Header left={<BackButton />} title="추천 친구" />
      <Link activityName="FriendSearchPage" activityParams={{}}>
        <div className="px-4 py-1.5">
          <SearchInput />
        </div>
      </Link>
      <ul className="mb-2">
        {recommendFriendRes?.data?.map((recommendFriend) => {
          return (
            <FriendItem
              key={recommendFriend.memberId}
              friendInfo={recommendFriend}
            />
          );
        })}
      </ul>
    </AppScreen>
  );
};
