import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { type ReactNode, useEffect } from "react";

export type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

// TODO: Header/body 구조로 변경하면서 맥스 height를 제한해야함
export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const dragControls = useDragControls();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-gray100 bg-opacity-50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-offWhite010 rounded-t-[24px] px-4 z-50 max-h-[90%] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragElastic={0}
            dragConstraints={{ top: 0 }}
            dragControls={dragControls}
            onDragEnd={(_, info) => {
              if (info.offset.y > 10) {
                onClose();
              }
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
