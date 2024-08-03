// import { customInstance } from "@/apis/custom-client";
import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { FlowLink } from "@/stackflow/FlowLink";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useRef, useState } from "react";

export function OnBoardPage() {
  // const [imageSrc, setImageSrc] = useState();
  const [imageSrc] = useState();

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
      // const response = await customInstance({
      //   path: "/image",
      //   method: "POST",
      //   body: { file },
      // });
      // setImageSrc(response.data.url);
    }
  };

  return (
    <AppScreen>
      <div>
        <Header
          right={
            <FlowLink
              page="VotePage"
              params={{}}
              className="text-purple100 t-h5-sb-17"
            >
              다음
            </FlowLink>
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
    </AppScreen>
  );
}
