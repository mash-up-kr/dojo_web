import { FriendItem } from "@/components/FriendItem";
import { BackButton } from "@/components/common/BackButton";
import { Header } from "@/components/common/Header";
import { useSearchMember } from "@/generated/member/member";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { type ActivityComponentType, useActivity } from "@stackflow/react";
import { useState } from "react";
import { SearchInput } from "../SearchInput";

export const FriendSearchPage: ActivityComponentType = () => {
  const { transitionState } = useActivity();
  const [keyword, setKeyword] = useState("");

  const { data: searchMemberRes } = useSearchMember({ keyword });

  return (
    <AppScreen>
      <Header
        left={<BackButton />}
        right={
          <SearchInput
            autoFocus={transitionState === "enter-done"}
            setKeyword={setKeyword}
          />
        }
        rightClassName="ml-3 flex-grow"
      />
      {keyword &&
        (searchMemberRes?.data?.length === 0 ? (
          <p className="t-h5-sb-17 text-gray084 mt-[140px] text-center">
            검색 결과가 없어요.
          </p>
        ) : (
          <ul className="mb-2">
            {searchMemberRes?.data?.map((member) => {
              return <FriendItem key={member.memberId} friendInfo={member} />;
            })}
          </ul>
        ))}
    </AppScreen>
  );
};
