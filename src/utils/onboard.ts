const STORAGE_KEY = "onboardComplete";

export const saveOnboardCompleteFlag = () => {
  localStorage.setItem(STORAGE_KEY, "Y");
};

export const checkAlreadyCompleteOnboard = () => {
  return !!localStorage.getItem(STORAGE_KEY);
};
