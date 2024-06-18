import { createPortal } from "react-dom";

const Modal = ({ open, onClose, children }) => {
  return createPortal(
    <dialog>{children}</dialog>,
    document.getElementById("modal")
  );
};
