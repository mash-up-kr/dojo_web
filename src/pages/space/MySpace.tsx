import GHOST from "@/assets/ic24_ghost.svg?react";
import THUMB from "@/assets/ic24_thumb.svg?react";
import BRONZE from "@/assets/ic32_bronze.svg?react";
import GOLD from "@/assets/ic32_gold.svg?react";
import SILVER from "@/assets/ic32_silver.svg?react";
import Back from "@/assets/ic_24_back.svg?react";
import { Header } from "@/components/common/Header";
import { useIntersectionObserver } from "@/hooks/useIntersection";
import { cn } from "@/utils/cn";
import { Link } from "react-router-dom";
import { ListContainer } from "./ListContainer";
import { MyProfile } from "./MyProfile";
import { PickRankCard } from "./PickRankCard";

export const MySpace = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.9,
    initialIsIntersecting: true,
  });

  return (
    <>
      <Header
        title="마이 스페이스"
        left={
          <Link to="/vote">
            <Back />
          </Link>
        }
        className={cn("fixed transition-colors duration-100", {
          "bg-offWhite010": !isIntersecting,
        })}
      />
      <div className="flex flex-col pb-20">
        <MyProfile profileRef={ref} />
        <ListContainer
          titleIcon={<THUMB />}
          title="내가 받은 픽"
          redirectUrl="/"
          containerClassName="pt-6"
        >
          <div className="space-y-2.5">
            {/* TODO: 내가 받은 픽 정책 반영하기 */}
            <PickRankCard
              icon={<GOLD />}
              content="대충 작업해도 퀄리티를 등등등 대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등"
              pickCount={14}
            />
            <PickRankCard
              icon={<SILVER />}
              content="대충 작업해도 퀄리티를 등등등 대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등대충 작업해도 퀄리티를 등등등"
              pickCount={14}
            />
            <PickRankCard icon={<BRONZE />} content="zz" pickCount={14} />
          </div>
        </ListContainer>
        <ListContainer
          containerClassName="pt-10"
          titleIcon={<GHOST />}
          title="내 친구들"
          redirectUrl="/"
        >
          <div className="h-[76px] flex items-center justify-center bg-gray040">
            태규형 마무리 부탁~!
          </div>
          <div className="h-[76px] flex items-center justify-center bg-gray040">
            태규형 마무리 부탁~!
          </div>
          <div className="h-[76px] flex items-center justify-center bg-gray040">
            태규형 마무리 부탁~!
          </div>
        </ListContainer>
      </div>
    </>
  );
};
