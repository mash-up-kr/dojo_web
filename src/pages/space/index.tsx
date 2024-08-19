import { useMe } from "@/generated/member/member";
import type { ActivityComponentType } from "@stackflow/react";
import { MySpace } from "./MySpace";
import { OtherSpace } from "./OtherSpace";

type SpcaePageProps = {
  memberId: string;
};

export const SpacePage: ActivityComponentType<SpcaePageProps> = ({
  params,
}) => {
  const { memberId } = params;
  const { data, isPending } = useMe({
    query: {
      select: ({ data }) => {
        return data;
      },
    },
  });

  const isMySpace = data?.memberId === memberId;
  if (isPending) {
    // TODO: Loading Component
    return <div>loading...</div>;
  }

  return isMySpace ? <MySpace /> : <OtherSpace />;
};
