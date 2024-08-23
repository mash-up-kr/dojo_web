import ANDROID from "@/assets/ic_Android.svg?react";
import NODE from "@/assets/ic_Node.svg?react";
import DESIGN from "@/assets/ic_Product_Design.svg?react";
import SPRING from "@/assets/ic_Spring.svg?react";
import WEB from "@/assets/ic_Web.svg?react";
import BOY from "@/assets/ic_boy.svg?react";
import GIRL from "@/assets/ic_girl.svg?react";
import IOS from "@/assets/ic_iOS.svg?react";
import type {
  ReceivedPickDetailPickerGender,
  ReceivedPickDetailPickerPlatform,
} from "@/generated/model";
import type { FC } from "react";

export const PLATFORM_ICON: Record<ReceivedPickDetailPickerPlatform, FC> = {
  ANDROID: ANDROID,
  DESIGN: DESIGN,
  IOS: IOS,
  NODE: NODE,
  SPRING: SPRING,
  WEB: WEB,
  UNKNOWN: WEB,
};

export const GENDER_ICON: Record<ReceivedPickDetailPickerGender, FC> = {
  FEMALE: GIRL,
  MALE: BOY,
  UNKNOWN: BOY,
};
