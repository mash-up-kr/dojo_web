import Back from "@/assets/ic_24_back.svg?react";

export const BackButton = () => {
  const onClick = () => {
    window.history.back();
  };

  return (
    <button type="button" onClick={onClick}>
      <Back />
    </button>
  );
};
