import { useGetReceivedPickList } from "@/generated/pick/pick";
import { useState } from "react";

export const usePickCount = () => {
  const { data: receivedPickListRes } = useGetReceivedPickList();
  const [latestCheckedCount, setLatestCheckedCount] = useState<number>();
  const pickCount = receivedPickListRes?.data?.totalElements;

  const checkNewPickCount = () => {
    setLatestCheckedCount(pickCount);
  };

  const hasNewPick = pickCount !== latestCheckedCount;

  return { pickCount, checkNewPickCount, hasNewPick };
};
