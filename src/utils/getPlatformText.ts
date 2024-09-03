export const getPlatformText = (platform?: string) => {
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
