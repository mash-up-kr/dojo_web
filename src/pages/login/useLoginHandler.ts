import { Toast } from "@/components/common/Toast";
import { me, useLogin } from "@/generated/member/member";
import { useMyFlow } from "@/stackflow/useMyFlow";
import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";

export const useLoginHandler = () => {
  const { push } = useMyFlow();
  const { mutate: login, isSuccess, isError, data } = useLogin();

  const onSuccessLogin = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const returnUrl = urlParams.get("returnUrl");
    if (returnUrl) {
      window.location.href = returnUrl;
    }
    const meData = await me();

    // 원래는 프로필 이미지가 없는 경우 서버에서 Null을 응답으로 주고, 프론트에서 기본 이미지를 처리해야하는데.. 지금 바꾸기엔.. 그냥 하드코딩으로 간다
    const hasProfile = meData.data?.profileImageUrl.includes(
      "profile-default-image.png",
    );

    if (hasProfile) {
      push("ProfilePage", { afterLogin: true });
      return;
    }
  }, [push]);

  const onFailLogin = useCallback(() => {
    Toast.alert(
      "로그인에 실패했습니다. 문제가 계속되면 도-죠 팀에 문의해주세요.",
      () => {},
    );
  }, []);

  const onClickLoginButton = useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get("memberId");
    login({ data: { id: memberId ?? "" } });
  }, [login]);

  useEffect(() => {
    if (isSuccess) {
      const token = data?.data?.authToken;
      if (token) {
        Cookies.set("token", token);
        onSuccessLogin();
      } else {
        onFailLogin();
      }
    }
  }, [isSuccess, data, onSuccessLogin, onFailLogin]);

  useEffect(() => {
    if (isError) {
      onFailLogin();
    }
  }, [isError, onFailLogin]);

  return { onClickLoginButton };
};
