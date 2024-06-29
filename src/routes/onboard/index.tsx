import { Button } from "@/components/common/Button";
import Image from "@/components/common/Image";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";

export const Route = createFileRoute("/onboard/")({
  component: OnBoardPage,
});

function OnBoardPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-[140px]">
      <div className="flex flex-col items-center w-[280px]">
        <Image alt="Profile Image" w={80} h={80} />
        <div className="mt-3 flex flex-col items-center gap-1">
          <h1 className="t-h4-b-20">낭은영</h1>
          <p className="t-b3-r-14 bg-grey054">14기 Product Design</p>
        </div>
        <Button
          size="md"
          buttonType="line"
          className="mt-8"
          onClick={handleButtonClick}
        >
          프로필 사진 변경하기
        </Button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
