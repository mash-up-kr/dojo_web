import { useActions } from "@stackflow/react";
import type { TypeActivities } from ".";

export const useMyFlow = () => {
  return useActions<TypeActivities>();
};
