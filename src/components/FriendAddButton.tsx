import { useGetFriends } from "@/generated/member-relation/member-relation";
import { useCreateFriend, useMe } from "@/generated/member/member";
import { type FC, useEffect } from "react";
import { Button } from "./common/Button";
import { Toast } from "./common/Toast";

type FriendAddButtonProps = {
  memberId: string;
};

export const FriendAddButton: FC<FriendAddButtonProps> = ({ memberId }) => {
  const { data: meRes } = useMe();
  const { mutate, isSuccess, isError } = useCreateFriend();
  const { data: friendRes, refetch: refetchFriends } = useGetFriends();
  const isFriend = friendRes?.data?.some(
    (friend) => friend.memberId === memberId,
  );

  const onClick = () => {
    if (!meRes?.data?.memberId) {
      return;
    }
    mutate({
      data: {
        fromMemberId: meRes?.data?.memberId,
        toMemberId: memberId,
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      refetchFriends();
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
      disabled={isFriend}
      buttonType={isFriend ? "disable" : "primary"}
      size="xs"
      onClick={onClick}
      className="w-[69px]"
    >
      {isFriend ? "추가됨" : "친구 추가"}
    </Button>
  );
};
