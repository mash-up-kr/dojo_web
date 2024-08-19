import Back from "@/assets/ic_24_back.svg?react";
import { useMyFlow } from "@/stackflow/useMyFlow";

export const BackButton = () => {
  const { pop } = useMyFlow();

  return (
    <button type="button" onClick={pop}>
      <Back />
    </button>
  );
};
