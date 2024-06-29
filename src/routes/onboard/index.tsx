import { apiClient } from "@/apis/api-client";
import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createFileRoute("/onboard/")({
  component: OnBoardPage,
});

function OnBoardPage() {
  const [imageSrc, setImageSrc] = useState();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const response = await apiClient.request({
        path: "/image",
        method: "POST",
        body: { file },
      });
      setImageSrc(response.data.url);
    }
  };

  return (
    <div>
      <Header
        right={
          <Link to="/vote" className="text-purple100 t-h5-sb-17">
            다음
          </Link>
        }
      />
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center w-[280px] mt-[140px]">
          <Image src={imageSrc} alt="Profile Image" w={80} h={80} />
          <div className="mt-3 flex flex-col items-center space-y-1">
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
