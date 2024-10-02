import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { Toast } from "@/components/common/Toast";
import { uploadInfo } from "@/generated/image/image";
import { useMe, useUpdate } from "@/generated/member/member";
import { useMyFlow } from "@/stackflow/useMyFlow";
import { getPlatformText } from "@/utils/getPlatformText";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";
import axios from "axios";
import { type FC, useRef } from "react";

type ProfilePageProps = {
  afterLogin?: boolean;
};

export const ProfilePage: ActivityComponentType<ProfilePageProps> = ({
  params,
}) => {
  const { afterLogin } = params;
  const { data: meRes, refetch: refectchMe } = useMe();
  const { mutate: updateProfile } = useUpdate({
    mutation: { onSuccess: () => refectchMe() },
  });

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
      try {
        const { data } = await uploadInfo({ contentType: "JPEG" });
        if (!data) throw new Error("알수 없는 오류 발생");
        const { uuid, uploadUrl } = data;
        await axios.put(uploadUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
        updateProfile({
          id: meRes?.data?.memberId ?? "",
          data: { profileImageId: uuid },
        });
      } catch (e) {
        if (e instanceof Error) {
          Toast.alert(e.message, () => {});
        } else {
          console.log(e);
        }
      }
    }
  };

  return (
    <AppScreen>
      <div>
        <Header right={<ConfirmButton afterLogin={afterLogin} />} />
        <main className="flex flex-col items-center">
          <div className="flex flex-col items-center w-[280px] mt-[140px]">
            <Image
              src={meRes?.data?.profileImageUrl}
              alt="Profile Image"
              className="w-[88px] h-[88px] border border-gray005"
            />
            <div className="mt-3 flex flex-col items-center space-y-1">
              <h1 className="t-h4-b-20">{meRes?.data?.memberName}</h1>
              <p className="t-b3-r-14 text-gray054">
                {meRes?.data?.ordinal}기{" "}
                {getPlatformText(meRes?.data?.platform ?? "UNKNOWN")}
              </p>
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
              accept=".png, .jpeg, .jpg"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </main>
      </div>
    </AppScreen>
  );
};

const ConfirmButton: FC<ProfilePageProps> = ({ afterLogin }) => {
  const { push } = useMyFlow();

  const onClick = () => {
    if (afterLogin) {
      push("VotePage", {});
    } else {
      window.history.back();
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="t-h5-sb-17 text-purple100"
    >
      {afterLogin ? "다음" : "확인"}
    </button>
  );
};
