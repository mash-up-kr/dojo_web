import { Header, HeaderLogo } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { getGradientBg } from "@/utils/getGradientBg";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";

const bg = getGradientBg();

export const Route = createFileRoute("/_vote-layout")({
  component: () => (
    <div className={clsx("min-h-screen", bg)}>
      <Header
        left={<HeaderLogo />}
        title="테스트입니다"
        right={
          <Link to="/my-pick">
            <Image className="w-8 h-8 bg-gray084 rounded-full" />
          </Link>
        }
      />
      <Outlet />
    </div>
  ),
});
