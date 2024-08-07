import { Header, HeaderLogo } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { Link } from "@/stackflow/Link";
import { getGradientBg } from "@/utils/getGradientBg";
import clsx from "clsx";

const bg = getGradientBg();

export function VoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={clsx("min-h-screen", bg)}>
      <Header
        left={<HeaderLogo />}
        title="테스트입니다"
        right={
          <Link activityName="MyPickPage" activityParams={{}}>
            <Image className="w-8 h-8 bg-gray084 rounded-full" />
          </Link>
        }
      />
      {children}
    </div>
  );
}
