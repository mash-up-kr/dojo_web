import NavIcon from "@/assets/ic_12_menu.svg?react";
import { Header, HeaderLogo } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { useMe } from "@/generated/member/member";
import { Link } from "@/stackflow/Link";
import { cn } from "@/utils/cn";
import { getGradientBg } from "@/utils/getGradientBg";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import clsx from "clsx";

const bg = getGradientBg();

export function VoteLayout({ children }: { children: React.ReactNode }) {
  const { data: meRes } = useMe();

  if (meRes?.data?.memberId === undefined) {
    return null;
  }

  return (
    <AppScreen>
      <Header
        left={<HeaderLogo />}
        right={
          <div className="relative">
            <Link
              activityName="SpacePage"
              activityParams={{ memberId: meRes?.data?.memberId ?? "" }}
            >
              <Image
                src={meRes?.data?.profileImageUrl}
                className="w-8 h-8 bg-gray084 rounded-full border border-gray064"
              />
              <NavIcon className="absolute -bottom-[1px] -right-[1px]" />
            </Link>
          </div>
        }
        className={cn("transition-colors duration-100 bg-transparent")}
      />
      <div className={clsx("h-full absolute top-0 w-full", bg)}>{children}</div>
    </AppScreen>
  );
}
