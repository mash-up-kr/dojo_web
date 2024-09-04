import THUMB from "@/assets/ic24_thumb.svg?react";
import EYES from "@/assets/ic_eyes.gif";
import { BackButton } from "@/components/common/BackButton";
import { Header } from "@/components/common/Header";
import Image from "@/components/common/Image";
import { useFriendSpace } from "@/generated/member/member";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { cn } from "@/utils/cn";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ListContainer } from "./ListContainer";
import { OtherProfile } from "./OtherProfile";
import { PickRankCard } from "./PickRankCard";
import { RANK_ICON } from "./MySpace";

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
          {otherPickDetail && otherPickDetail.length > 0 ? (
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
              </div>
            </ListContainer>
          ) : (
            <div className="pt-10 flex flex-col gap-3 items-center w-full">
              <Image src={EYES} alt="아직 받은 픽이 없음" w={80} h={80} />
              <span className="t-h5-sb-17">아직 받은 픽이 없어요!</span>
            </div>
          )}
        </div>
      </ErrorBoundary>
    </AppScreen>
  );
};
