import LeftArrow from "@/assets/LeftArrow.svg?react";
import UpFinger from "@/assets/UpFinger.svg?react";
import { toast } from "sonner";

function ToastUI({
  message,
  onAction,
}: { message: string; onAction: () => void }) {
  return (
    <button
      onClick={onAction}
      type="button"
      className="text-offWhite010 flex items-center justify-between p-3 rounded-8 bg-gray084 active:bg-gray064 transition-colors duration-300 w-full"
    >
      <div className="flex space-x-2 items-center">
        <div>
          <UpFinger width={32} height={32} />
        </div>
        <span className="t-c1-sb-13 line-clamp-2 text-ellipsis text-left">
          {message}
        </span>
      </div>
      <div className="t-c1-sb-13 ml-4 flex items-center whitespace-nowrap">
        확인하기 <LeftArrow />
      </div>
    </button>
  );
}

export const Toast = {
  alert: (message: string, onAction: () => void) => {
    toast.custom((t) => (
      <ToastUI
        message={message}
        onAction={() => {
          onAction();
          toast.dismiss(t);
        }}
      />
    ));
  },
};
