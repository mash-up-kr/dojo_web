import { FriendMainPage } from "@/pages/friend/Main";
import { FriendRecommendPage } from "@/pages/friend/Recommend";
import { LogInPage } from "@/pages/login";
import { MyPickPage } from "@/pages/my-pick";
import { MyPickDetailPage } from "@/pages/my-pick-detail";
import { OnBoardPage } from "@/pages/onboard/OnBoardPage";
import { SpacePage } from "@/pages/space";
import { VoteDonePage } from "@/pages/vote/VoteDone";
import { VotePage } from "@/pages/vote/VotePage";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";

export const routes = {
  LogInPage: "/login",
  VotePage: "/vote",
  VoteDonePage: "/vote/done",
  MyPickPage: "/my-pick",
  MyPickDetailPage: "/my-pick/:pickId",
  SpacePage: "/space/:memberId",
  OnBoardPage: "/onboard",
  FriendMainPage: "/friend",
  FriendRecommendPage: "/friend/recommend",
  FriendSearchPage: "/friend/search",
};

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes,
      fallbackActivity: () => "VotePage",
    }),
  ],
  activities: {
    LogInPage,
    VotePage,
    VoteDonePage,
    MyPickPage,
    MyPickDetailPage,
    SpacePage,
    OnBoardPage,
    FriendMainPage,
    FriendRecommendPage,
  },
  initialActivity: () => "LogInPage",
});

export type TypeActivities = typeof activities;
