import React, { ReactNode, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: number;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  width = 400,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white p-10 rounded-lg shadow-lg transition-transform transform duration-500 ease-out"
        style={{
          width: `${width}px`,
          transform: open
            ? "translateY(0) scale(1)"
            : "translateY(20%) scale(0.95)",
          opacity: open ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          role="button"
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};
