import THUMB from "@/assets/ic24_thumb.svg?react";
import BRONZE from "@/assets/ic32_bronze.svg?react";
import GOLD from "@/assets/ic32_gold.svg?react";
import SILVER from "@/assets/ic32_silver.svg?react";
import { BackButton } from "@/components/common/BackButton";
import { Header } from "@/components/common/Header";
import { useFriendSpace } from "@/generated/member/member";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { cn } from "@/utils/cn";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ListContainer } from "./ListContainer";
import { RANK_ICON } from "./MySpace";
import { OtherProfile } from "./OtherProfile";
import { PickRankCard } from "./PickRankCard";

export const OtherSpace = ({ memberId }: { memberId: string }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.9,
    initialIsIntersecting: true,
  });

  const { data: otherPickDetail } = useFriendSpace(memberId, {
    query: {
      select: ({ data }) => data?.friendSpaceResponses ?? [],
    },
  });

  return (
    <AppScreen>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Header
          title="친구 스페이스"
          left={<BackButton />}
          className={cn("transition-colors duration-100 bg-transparent", {
            "bg-offWhite010": !isIntersecting,
          })}
        />
        <div className="flex flex-col pb-20 absolute top-0 w-full">
          {/* TODO: 스켈레톤 적용 */}
          <Suspense fallback={<div>loading...</div>}>
            <OtherProfile
              profileRef={ref}
              containerClassName="bg-gradient-blue"
            />
          </Suspense>
          {otherPickDetail && otherPickDetail.length > 0 && (
            <ListContainer
              isMore={false}
              titleIcon={<THUMB />}
              title="친구가 받은 픽"
              containerClassName="pt-6"
            >
              <div className="space-y-2.5">
                {/* TODO: 내가 받은 픽 정책 반영하기 */}
                {otherPickDetail.map((pick) => (
                  <PickRankCard
                    key={pick.pickId}
                    content={pick.pickContent}
                    pickCount={pick.pickCount}
                    icon={RANK_ICON[pick.rank]}
                  />
                ))}
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
          )}
        </div>
      </ErrorBoundary>
    </AppScreen>
  );
};
