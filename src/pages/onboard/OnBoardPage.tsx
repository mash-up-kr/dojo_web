import { Header } from "@/components/common/Header";

import { useMyFlow } from "@/stackflow/useMyFlow";

import onboardVideo1 from "@/assets/onboard_video_1.mp4";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import type { ActivityComponentType } from "@stackflow/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { Button } from "@/components/common/Button";
import { saveOnboardCompleteFlag } from "@/utils/onboard";
import { useState } from "react";

export const OnBoardPage: ActivityComponentType = () => {
  const { push } = useMyFlow();
  const [slideIndex, setSlideIndex] = useState<number>();
  const goToVotePage = () => {
    push("VotePage", {});
  };

  const onClickCompleteButton = () => {
    saveOnboardCompleteFlag();
    goToVotePage();
  };

  return (
    <AppScreen>
      <div>
        <Header
          right={
            <button
              type="button"
              className="t-h5-sb-17 text-gray054"
              onClick={goToVotePage}
            >
              skip
            </button>
          }
        />
        <main className="flex flex-col items-center gap-10 mt-5 px-4 w-full">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            className="w-full"
            pagination={
              slideContentList.length - 1 === slideIndex
                ? false
                : {
                    clickable: true,
                  }
            }
            onInit={(swiper) => setSlideIndex(swiper.realIndex)}
            onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
          >
            {Array.from({ length: slideContentList.length }).map((_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <SwiperSlide key={index}>
                <Slide index={index} />
                {index === slideContentList.length - 1 && (
                  <Button className="mt-11" onClick={onClickCompleteButton}>
                    지금 바로 투표하기!
                  </Button>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </div>
    </AppScreen>
  );
};

const slideContentList = [
  {
    videoSrc: onboardVideo1,
    description: (
      <>
        질문을 보고
        <br />
        가장 잘 어울리는 사람에게
        <br />
        <span className="text-purple100">Pick하고 Gem을 받아요!</span>💎
      </>
    ),
  },
  {
    videoSrc: onboardVideo1,
    description: (
      <>
        후보자 중 Pick할 사람이 없나요?🥲
        <br />각 질문마다 1회 <span className="text-purple100">셔플</span>{" "}
        그리고
        <br />
        <span className="text-purple100">스킵</span>을 할 수 있어요!
      </>
    ),
  },
  {
    videoSrc: onboardVideo1,
    description: (
      <>
        다양한 사람들을 Pick하고 싶나요?🙋‍♀️
        <br />
        <span className="text-purple100">친구 추가</span>를 하면 후보지에서
        <br />더 자주 볼 수 있어요!
      </>
    ),
  },
  {
    videoSrc: onboardVideo1,
    description: (
      <>
        나의 Gem으로
        <br />
        나를 Pick한 사람의 정보를 확인해요!👻
      </>
    ),
  },
];

const Slide = ({ index }: { index: number }) => {
  const { videoSrc, description } = slideContentList[index];
  return (
    <div>
      <video autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
        <track src="subtitles.vtt" kind="subtitles" default />
        당신의 브라우저는 비디오 태그를 지원하지 않습니다.
      </video>
      <p className="mt-10 t-h5-sb-17 text-center">{description}</p>
    </div>
  );
};
