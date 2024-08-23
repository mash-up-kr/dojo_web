import type {
  MemberCreateRequestGender,
  ReceivedPickDetailPickerPlatform,
} from "@/generated/model";

export const getPlatformText = (
  platform?: ReceivedPickDetailPickerPlatform,
) => {
  switch (platform) {
    case "ANDROID":
      return "Android";
    case "IOS":
      return "iOS";
    case "NODE":
      return "Node";
    case "DESIGN":
      return "Product Design";
    case "SPRING":
      return "Spring";
    case "WEB":
      return "Web";
    default:
      return;
  }
};

export const getGenderText = (gender?: MemberCreateRequestGender) => {
  switch (gender) {
    case "MALE":
      return "남자";
    case "FEMALE":
      return "여자";
    default:
      return;
  }
};
