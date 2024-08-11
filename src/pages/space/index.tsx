import { useMe } from "@/generated/member/member";
import { useActivityParams } from "@stackflow/react";
import { MySpace } from "./MySpace";
import { OtherSpace } from "./OtherSpace";

export const SpacePage = () => {
  const { data, isPending } = useMe({
    query: {
      select: ({ data }) => {
        return data;
      },
    },
  });
  const { memberId } = useActivityParams<{
    memberId: string;
  }>();

  const isMySpace = data?.memberId === memberId;

  if (isPending) {
    // TODO: Loading Component
    return <div>loading...</div>;
  }

  return isMySpace ? <MySpace /> : <OtherSpace />;
};
