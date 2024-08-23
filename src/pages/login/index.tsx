import MashipLogoGif from "@/assets/Maship.gif";
import KAKAOTALK from "@/assets/kakaotalk.svg?react";
import { Header, HeaderLogo } from "@/components/common/Header";
import { getGradientBg } from "@/utils/getGradientBg";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";
import clsx from "clsx";
import { useLoginHandler } from "./useLoginHandler";

const bg = getGradientBg();

export const LogInPage: ActivityComponentType = () => {
  const { onClickLoginButton } = useLoginHandler();

  const cookie = document.cookie;
  const token = cookie.split("token=")[1]?.split(";")[0];

  if (token) {
    window.location.href = "/vote";
    return;
  }

  return (
    <AppScreen>
      <div className={clsx("h-full flex flex-col", bg)}>
        <Header left={<HeaderLogo />} className="bg-transparent" />
        <main className="flex flex-col flex-grow px-4 py-7 items-center">
          <div className="flex-grow flex items-center">
            <img width={"100%"} alt="Maship!" src={MashipLogoGif} />
          </div>
          <button
            type="button"
            onClick={onClickLoginButton}
            className="size-full flex gap-2 justify-center items-center py-3 px-4 rounded-8 h-min"
            style={{ backgroundColor: "#fee500" }}
          >
            <KAKAOTALK width={18} height={18} />
            <span className="t-b2-m-15">
              카카오 로그인은 아니지만 로그인하기
            </span>
          </button>
        </main>
      </div>
    </AppScreen>
  );
};
