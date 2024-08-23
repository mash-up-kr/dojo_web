import Back from "@/assets/ic_24_back.svg?react";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { useStack } from "@stackflow/react";

export const BackButton = () => {
  const stack = useStack();
  const { pop, push } = useMyFlow();

  const onClick = () => {
    if (stack.activities.length <= 1) {
      push("VotePage", {}, { animate: false });
    } else {
      pop();
    }
  };

  return (
    <button type="button" onClick={onClick}>
      <Back />
    </button>
  );
};
