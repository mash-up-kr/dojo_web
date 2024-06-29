import { Header, HeaderLogo } from "@/components/common/Header";
import { getGradientBg } from "@/utils/getGradientBg";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";

const bg = getGradientBg();

export const Route = createFileRoute("/_vote-layout")({
  component: () => (
    <div className={clsx("h-screen", bg)}>
      <Header
        left={<HeaderLogo />}
        title="테스트입니다"
        right={<div className="w-8 h-8 bg-gray084 rounded-full" />}
      />
      <Outlet />
    </div>
  ),
});
