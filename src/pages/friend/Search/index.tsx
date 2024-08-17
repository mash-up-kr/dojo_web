import Back from "@/assets/ic_24_back.svg?react";
import { FriendItem } from "@/components/FriendItem";
import { Header } from "@/components/common/Header";
import { useSearchMember } from "@/generated/member/member";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { type ActivityComponentType, useActivity } from "@stackflow/react";
import { useState } from "react";
import { SearchInput } from "../SearchInput";

export const FriendSearchPage: ActivityComponentType = () => {
  const { pop } = useMyFlow();
  const { transitionState } = useActivity();
  const [keyword, setKeyword] = useState("");

  const { data: searchMemberRes } = useSearchMember({ keyword });

  return (
    <AppScreen>
      <Header
        left={
          <button type="button" onClick={pop}>
            <Back />
          </button>
        }
        right={
          <SearchInput
            autoFocus={transitionState === "enter-done"}
            setKeyword={setKeyword}
          />
        }
        rightClassName="ml-3 flex-grow"
      />
      {
        <ul className="mb-2">
          {keyword &&
            searchMemberRes?.data?.map((member) => {
              return (
                <FriendItem
                  key={member.memberId}
                  friendInfo={member}
                  isMyFriend={member.isFriend}
                />
              );
            })}
        </ul>
      }
    </AppScreen>
  );
};
