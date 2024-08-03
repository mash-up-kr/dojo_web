import { MyPickPage } from "@/pages/my-pick";
import { MyPickDetailPage } from "@/pages/my-pick-detail";
import { VoteDonePage } from "@/pages/vote/VoteDone";
import { VoteLayout } from "@/pages/vote/VoteLayout";
import { VotePage } from "@/pages/vote/VotePage";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { LogInPage } from "./pages/login";
import { OnBoardPage } from "./pages/onboard/OnBoardPage";
import { SpacePage } from "./pages/space";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/vote" />,
  },
  {
    path: "/vote",
    element: (
      <VoteLayout>
        <Outlet />
      </VoteLayout>
    ),
    children: [
      {
        path: "",
        element: <VotePage />,
      },
      {
        path: "done",
        element: <VoteDonePage />,
      },
    ],
  },
  {
    path: "/my-pick",
    element: <MyPickPage />,
  },
  {
    path: "/space",
    element: <SpacePage />,
  },
  {
    path: "/my-pick/:pickId",
    element: <MyPickDetailPage />,
  },
  {
    path: "/onboard",
    element: <OnBoardPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
]);

export default router;
