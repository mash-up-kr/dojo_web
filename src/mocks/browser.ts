import { getAdminMock } from "@/generated/admin/admin.msw";
import { getImageMock } from "@/generated/image/image.msw";
import { getMemberMock } from "@/generated/member/member.msw";
import { getPickMock } from "@/generated/pick/pick.msw";
import { getSheetMock } from "@/generated/sheet/sheet.msw";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  ...getAdminMock(),
  ...getPickMock(),
  ...getImageMock(),
  ...getSheetMock(),
  ...getMemberMock(),
);
