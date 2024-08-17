import Back from "@/assets/ic_24_back.svg?react";
import { FriendItem } from "@/components/FriendItem";
import { Header } from "@/components/common/Header";
import { useGetRecommendFriends } from "@/generated/member-relation/member-relation";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";
import { SearchInput } from "../SearchInput";

export const FriendMainPage: ActivityComponentType = () => {
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
        title="내 친구들"
      />
      <SearchInput />
      <section className="mb-2">
        <header className="flex justify-between items-center px-4 pt-3 pb-1">
          <h2 className="t-b3-sb-14">추천 친구</h2>
          <button type="button" className="t-c1-r-13 text-gray054">
            더보기
          </button>
        </header>
        <ul>
          {recommendFriendRes?.data?.map((recommendFriend) => {
            return (
              <FriendItem
                key={recommendFriend.memberId}
                friendInfo={recommendFriend}
              />
            );
          })}
        </ul>
      </section>
    </AppScreen>
  );
};
