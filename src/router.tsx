import { MyPickPage } from "@/pages/my-pick";
import { MyPickDetailPage } from "@/pages/my-pick-detail";
import { VoteDonePage } from "@/pages/vote/VoteDone";
import { VoteLayout } from "@/pages/vote/VoteLayout";
import { VotePage } from "@/pages/vote/VotePage";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { MySpacePage } from "./pages/my-space";
import { OnBoardPage } from "./pages/onboard/OnBoardPage";

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
    path: "/my-space",
    element: <MySpacePage />,
  },
  {
    path: "/my-pick/:pickId",
    element: <MyPickDetailPage />,
  },
  {
    path: "/onboard",
    element: <OnBoardPage />,
  },
]);

export default router;
