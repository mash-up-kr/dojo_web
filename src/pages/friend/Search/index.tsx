import Back from "@/assets/ic_24_back.svg?react";
import { Header } from "@/components/common/Header";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { type ActivityComponentType, useActivity } from "@stackflow/react";
import { SearchInput } from "../SearchInput";

export const FriendSearchPage: ActivityComponentType = () => {
  const { pop } = useMyFlow();
  const { transitionState } = useActivity();

  return (
    <AppScreen>
      <Header
        left={
          <button type="button" onClick={pop}>
            <Back />
          </button>
        }
        right={<SearchInput autoFocus={transitionState === "enter-done"} />}
        rightClassName="ml-3 flex-grow"
      />
    </AppScreen>
  );
};
