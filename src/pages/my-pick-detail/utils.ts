import type { MemberCreateRequestGender } from "@/generated/model";

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
