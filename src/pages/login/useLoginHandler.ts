import { Toast } from "@/components/common/Toast";
import { useLogin } from "@/generated/member/member";
import { useMyFlow } from "@/stackflow/useMyFlow";
import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";

export const useLoginHandler = () => {
  const { push } = useMyFlow();
  const { mutate: login, isSuccess, isError, data } = useLogin();

  const onSuccessLogin = useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const returnUrl = urlParams.get("returnUrl");
    if (returnUrl) {
      window.location.href = returnUrl;
    } else {
      push("VotePage", {});
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
