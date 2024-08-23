import { cn } from "@/utils/cn";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { type FC, type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  useConfetti?: boolean;
  className?: string;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  useConfetti,
  children,
  className,
}) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray100 bg-opacity-50 flex items-center justify-center z-[99999999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {useConfetti && (
            <ConfettiCanvas
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
              }}
            />
          )}
          <motion.div
            className={cn(
              "bg-offWhite010 p-4 rounded-20 w-full mx-[38px]",
              className,
            )}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const ConfettiCanvas = ({ style }: { style?: React.CSSProperties }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });

    const fireConfetti = () => {
      myConfetti({
        particleCount: 350,
        spread: 360, // 수평으로 넓게 퍼지도록 설정
        angle: 90, // 90도 방향으로 confetti를 발사
        origin: {
          x: 0.5,
          y: 0.5,
        },
        colors: ["#f9f6ff", "#f3edff", "#d0caff", "#854bff"],
        ticks: 1000,
        startVelocity: 40,
        gravity: 1, // 중력 설정으로 아래로 떨어지도록 함
        scalar: 1,
      });
    };

    fireConfetti();

    return () => {
      myConfetti.reset();
    };
  }, []);

  return <canvas ref={canvasRef} className="confetti-canvas" style={style} />;
};

export default Modal;
