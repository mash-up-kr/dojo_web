import { Button } from "@/components/common/Button";
import Image from "@/components/common/Image";
import Modal from "@/components/common/Modal";

export const PickAlert = () => {
  return (
    <Modal isOpen onClose={() => {}} className="p-7 max-w-[300px]">
      <div className="flex flex-col items-center">
        <p className="t-h5-b-17">타이틀</p>
        <div className="space-y-3 text-center mt-6">
          <Image src="https://via.placeholder.com/150" alt="이미지" />
          <span className="t-h3-b-22 inline-block">남성</span>
        </div>
        <Button className="rounded-full mt-10">확인</Button>
      </div>
    </Modal>
  );
};
