import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
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

  const handleNextClick = () => {
    console.log("Next button clicked");
  };

  return (
    <div>
      <Header
        right={
          <button
            type="button"
            onClick={handleNextClick}
            className="text-purple100 t-h5-sb-17"
          >
            다음
          </button>
        }
      />
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center w-[280px] mt-[140px]">
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
      </main>
    </div>
  );
}
