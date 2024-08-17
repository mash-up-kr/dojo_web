import THUMB from "@/assets/ic24_thumb.svg?react";
import BRONZE from "@/assets/ic32_bronze.svg?react";
import GOLD from "@/assets/ic32_gold.svg?react";
import SILVER from "@/assets/ic32_silver.svg?react";
import Back from "@/assets/ic_24_back.svg?react";
import { Header } from "@/components/common/Header";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { Link } from "@/stackflow/Link";
import { cn } from "@/utils/cn";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ListContainer } from "./ListContainer";
import { OtherProfile } from "./OtherProfile";
import { PickRankCard } from "./PickRankCard";

export const OtherSpace = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.9,
    initialIsIntersecting: true,
  });

  return (
    <AppScreen>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Header
          title="친구 스페이스"
          left={
            <Link activityName="VotePage" activityParams={{}}>
              <Back />
            </Link>
          }
          className={cn("fixed transition-colors duration-100", {
            "bg-offWhite010": !isIntersecting,
          })}
        />
        <div className="flex flex-col pb-20">
          {/* TODO: 스켈레톤 적용 */}
          <Suspense fallback={<div>loading...</div>}>
            <OtherProfile
              profileRef={ref}
              containerClassName="bg-gradient-blue"
            />
          </Suspense>
          <ListContainer
            isMore={false}
            titleIcon={<THUMB />}
            title="친구가 받은 픽"
            containerClassName="pt-6"
          >
            <div className="space-y-2.5">
              {/* TODO: 내가 받은 픽 정책 반영하기 */}
              <PickRankCard
                disabled
                icon={<GOLD />}
                content="대충 작업해도 퀄리티를 등등등 대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등"
                pickCount={14}
              />
              <PickRankCard
                disabled
                icon={<SILVER />}
                content="대충 작업해도 퀄리티를 등등등 대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등"
                pickCount={14}
              />
              <PickRankCard
                disabled
                icon={<BRONZE />}
                content="zz"
                pickCount={14}
              />
            </div>
          </ListContainer>
        </div>
      </ErrorBoundary>
    </AppScreen>
  );
};
