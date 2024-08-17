import Back from "@/assets/ic_24_back.svg?react";
import { FriendItem } from "@/components/FriendItem";
import { Header } from "@/components/common/Header";
import { useGetRecommendFriends } from "@/generated/member-relation/member-relation";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { type ActivityComponentType, useActivity } from "@stackflow/react";
import { useEffect } from "react";
import { SearchInput } from "../SearchInput";

export const FriendRecommendPage: ActivityComponentType = () => {
  const { pop } = useMyFlow();
  const { transitionState } = useActivity();
  const { data: recommendFriendRes, refetch } = useGetRecommendFriends();

  useEffect(() => {
    if (transitionState === "enter-active") {
      refetch();
    }
  }, [transitionState, refetch]);

  return (
    <AppScreen>
      <Header
        left={
          <button type="button" onClick={pop}>
            <Back />
          </button>
        }
        title="추천 친구"
      />
      <SearchInput />
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
