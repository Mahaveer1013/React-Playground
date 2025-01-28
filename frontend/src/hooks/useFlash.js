import { useContext } from "react";
import { FlashMessageContext } from "../config/FlashMessageContext";

export const useFlash = () => {
  const context = useContext(FlashMessageContext);
  if (!context) {
    throw new Error('useFlashMessage must be used within a FlashMessageProvider');
  }
  return context.showMessage;
};
