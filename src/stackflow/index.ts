import { InspectionPage } from "@/pages/InspectionPage";
import { FriendMainPage } from "@/pages/friend/Main";
import { FriendRecommendPage } from "@/pages/friend/Recommend";
import { FriendSearchPage } from "@/pages/friend/Search";
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

// TODO: 추후 활성화
export const routes = {
  // LogInPage: "/login",
  // VotePage: "/vote",
  // VoteDonePage: "/vote/done", // OK
  // MyPickPage: "/my-pick", // OK
  // MyPickDetailPage: "/my-pick/:questionId", // OK
  // SpacePage: "/space/:memberId", // OK
  // OnBoardPage: "/onboard", // OK
  // FriendMainPage: "/friend", // OK
  // FriendRecommendPage: "/friend/recommend", // OK
  // FriendSearchPage: "/friend/search", // OK
  InspectionPage: "/inspection", // OK
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
      fallbackActivity: () => "InspectionPage",
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
    FriendSearchPage,
    FriendRecommendPage,
    InspectionPage,
  },
  initialActivity: () => "InspectionPage",
});

export type TypeActivities = typeof activities;
