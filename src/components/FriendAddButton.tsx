import { useGetFriends } from "@/generated/member-relation/member-relation";
import {
  useCreateFriend,
  useDeleteFriend,
  useMe,
} from "@/generated/member/member";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { type FC, useEffect } from "react";
import { Button } from "./common/Button";
import { Toast } from "./common/Toast";

type FriendAddButtonProps = {
  memberId: string;
};

export const FriendAddButton: FC<FriendAddButtonProps> = ({ memberId }) => {
  const { push } = useMyFlow();
  const { data: meRes } = useMe();
  const {
    mutate: createFriend,
    isSuccess: isCreateFriendSuccess,
    isError: isCreateFriendError,
  } = useCreateFriend();
  const {
    mutate: deleteFriend,
    isSuccess: isDeleteFriendSuccess,
    isError: isDeleteFriendError,
  } = useDeleteFriend();
  const { data: friendRes, refetch: refetchFriends } = useGetFriends();
  const isFriend = friendRes?.data?.some(
    (friend) => friend.memberId === memberId,
  );

  const onClickCreateFriendButton = () => {
    if (!meRes?.data?.memberId) {
      return;
    }
    createFriend({
      data: {
        fromMemberId: meRes?.data?.memberId,
        toMemberId: memberId,
      },
    });
  };

  const onClickDeleteFriendButton = () => {
    deleteFriend({
      data: {
        toMemberId: memberId,
      },
    });
  };

  useEffect(() => {
    if (isCreateFriendSuccess) {
      Toast.alert(
        "친구가 추가되었습니다! 친구는 어떤 픽을 받았는지 확인해보세요 🙂",
        () => push("SpacePage", { memberId }),
      );
    }
  }, [isCreateFriendSuccess, push, memberId]);

  useEffect(() => {
    if (isDeleteFriendSuccess) {
      Toast.alert("친구가 해제되었습니다", () => {});
      refetchFriends();
    }
  }, [isDeleteFriendSuccess, refetchFriends]);

  useEffect(() => {
    if (isCreateFriendError || isDeleteFriendError) {
      Toast.alert(
        "정상적으로 처리되지 않았습니다. 다시 시도해 주세요.",
        () => {},
      );
    }
  }, [isCreateFriendError, isDeleteFriendError]);

  return isFriend ? (
    <Button
      type="button"
      size="xs"
      onClick={onClickDeleteFriendButton}
      className="w-fit"
      buttonType="line"
    >
      친구 해제
    </Button>
  ) : (
    <Button
      type="button"
      disabled={isCreateFriendSuccess}
      buttonType={isCreateFriendSuccess ? "disable" : "primary"}
      size="xs"
      onClick={onClickCreateFriendButton}
      className="w-fit min-w-[69px]"
    >
      {isCreateFriendSuccess ? "추가됨" : "친구 추가"}
    </Button>
  );
};
