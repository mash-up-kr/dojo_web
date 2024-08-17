import Back from "@/assets/ic_24_back.svg?react";
import { FriendItem } from "@/components/FriendItem";
import { Header } from "@/components/common/Header";
import { useGetRecommendFriends } from "@/generated/member-relation/member-relation";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";
import { SearchInput } from "../SearchInput";

export const FriendRecommendPage: ActivityComponentType = () => {
  const { pop } = useMyFlow();
  const { data: recommendFriendRes } = useGetRecommendFriends();

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
