import { Toaster } from "sonner";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <SSEAlert /> */}
      {children}
      <Toaster
        position="top-center"
        expand={false}
        offset={8}
        visibleToasts={1}
        duration={2000}
      />
    </>
  );
}

// TODO: 추후 사용할 예정
// function SSEAlert() {
//   const { push } = useMyFlow();
//   const { data } = useMe();

//   useEffect(() => {
//     const token = Cookies.get("token");
//     if (!token) {
//       return;
//     }

//     const src = new EventSourcePolyfill(
//       "https://docker-ecs.net/notification-stream",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         heartbeatTimeout: 180000,
//       },
//     );

//     src.addEventListener("picked", (v) => {
//       const pick = JSON.parse((v as MessageEvent).data);
//       const myname = data?.data?.memberName
//         ? `${data?.data?.memberName}님을`
//         : "나를";
//       Toast.alert(`방금 누군가가 ${myname} Pick 했어요!`, () => {
//         push("MyPickDetailPage", { questionId: pick?.questionId ?? "" });
//       });
//     });

//     src.onopen = () => {
//       console.log("open");
//     };

//     return () => {
//       src.close();
//     };
//   }, [data?.data?.memberName, push]);

//   return <></>;
// }
