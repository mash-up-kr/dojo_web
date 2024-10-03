import NavIcon from "@/assets/ic_12_menu.svg?react";

import PickImage from "@/assets/Pick.png";
import { Header, HeaderLogo } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { useMe } from "@/generated/member/member";
import { usePickCount } from "@/hooks/usePickCount";
import { Link } from "@/stackflow/Link";
import { cn } from "@/utils/cn";
import { getGradientBg } from "@/utils/getGradientBg";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import clsx from "clsx";

const bg = getGradientBg();

export function VoteLayout({ children }: { children: React.ReactNode }) {
  const { data: meRes } = useMe();
  const { hasNewPick, checkNewPickCount } = usePickCount();

  if (meRes?.data?.memberId === undefined) {
    return null;
  }

  return (
    <AppScreen>
      <Header
        left={<HeaderLogo />}
        right={
          <div className="relative flex gap-5 align-middle">
            <Link
              activityName="MyPickPage"
              activityParams={{}}
              className="flex justify-center items-center relative border-[1px] w-[52px] border-solid border-purple100 rounded-[19px]"
              onClick={checkNewPickCount}
            >
              <span className="t-h6-b-15 text-purple100">Pick</span>
              {hasNewPick && (
                <div className="absolute -right-[4px] -top-[4px] rounded-full w-1.5 h-1.5 bg-[red]" />
              )}
            </Link>
            <Link
              activityName="SpacePage"
              activityParams={{ memberId: meRes?.data?.memberId ?? "" }}
            >
              <Image
                src={meRes?.data?.profileImageUrl}
                className="w-8 h-8 bg-gray084 rounded-full border border-gray064"
              />
            </Link>
          </div>
        }
        className={cn("transition-colors duration-100 bg-transparent")}
      />
      <div className={clsx("h-full absolute top-0 w-full", bg)}>{children}</div>
    </AppScreen>
  );
}
