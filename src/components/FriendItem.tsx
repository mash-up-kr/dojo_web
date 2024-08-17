import { useCreateFriend, useMe } from "@/generated/member/member";
import type { FriendInfoResponse } from "@/generated/model";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { type FC, useEffect } from "react";
import { Button } from "./common/Button";
import Image from "./common/Image";
import { Toast } from "./common/Toast";

type FriendItemProps = {
  friendInfo: FriendInfoResponse;
  isMyFriend?: boolean;
};

export const FriendItem: FC<FriendItemProps> = ({ friendInfo, isMyFriend }) => {
  const { push } = useMyFlow();
  const onClick = () => {
    if (!isMyFriend) return;
    push("SpacePage", { memberId: friendInfo.memberId });
  };

  return (
    <li className="px-4 py-2.5 flex items-center gap-3 ">
      <button
        type="button"
        onClick={onClick}
        className="flex-grow flex items-center gap-3"
      >
        <Image
          src={
            friendInfo.profileImageUrl ||
            "data:image/jpeg;base64,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"
          }
          alt=""
          className="w-14 h-14"
        />
        <div className="flex-grow text-left">
          <p className="t-h6-sb-15">{friendInfo.memberName}</p>
          <p className="t-b3-r-14 text-gray054">
            {friendInfo.ordinal}기 {friendInfo.platform}
          </p>
        </div>
      </button>
      {!isMyFriend && <FriendAddButton friendId={friendInfo.memberId} />}
    </li>
  );
};

type FriendAddButtonProps = {
  friendId: string;
};

const FriendAddButton: FC<FriendAddButtonProps> = ({ friendId }) => {
  const { data: meRes } = useMe();
  const { mutate, isSuccess, isError } = useCreateFriend();

  const onClick = () => {
    mutate({
      data: {
        // useMe mock인 동안 임시
        fromMemberId:
          "409c9126-7e69-4496-b4eb-90354ae48945" ?? meRes?.data?.memberId,
        toMemberId: friendId,
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Toast.alert(
        "친구가 추가되었습니다! 친구는 어떤 픽을 받았는지 확인해보세요 🙂",
        () => {},
      );
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Toast.alert(
        "친구가 정상적으로 추가되지 않았습니다. 다시 시도해 주세요.",
        () => {},
      );
    }
  }, [isError]);

  return (
    <Button
      type="button"
      disabled={isSuccess}
      buttonType={isSuccess ? "disable" : "primary"}
      size="xs"
      onClick={onClick}
      className="w-[69px]"
    >
      {isSuccess ? "추가됨" : "친구 추가"}
    </Button>
  );
};