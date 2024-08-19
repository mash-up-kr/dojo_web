import NavIcon from "@/assets/ic_12_menu.svg?react";
import { Header, HeaderLogo } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { useMe } from "@/generated/member/member";
import { Link } from "@/stackflow/Link";
import { getGradientBg } from "@/utils/getGradientBg";
import clsx from "clsx";

const bg = getGradientBg();

export function VoteLayout({ children }: { children: React.ReactNode }) {
  const { data: meRes } = useMe();

  return (
    <div className={clsx("min-h-screen", bg)}>
      <Header
        left={<HeaderLogo />}
        right={
          <Link
            activityName="SpacePage"
            activityParams={{ memberId: meRes?.data?.memberId ?? "" }}
            className="relative"
          >
            <Image
              src={meRes?.data?.profileImageUrl}
              className="w-8 h-8 bg-gray084 rounded-full border border-gray064"
            />
            <NavIcon className="absolute -bottom-[1px] -right-[1px]" />
          </Link>
        }
      />
      {children}
    </div>
  );
}
