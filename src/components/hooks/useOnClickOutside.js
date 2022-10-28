import { useEffect } from "react";

export default function useOnClickOutside(ref, isOpen, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target) || !isOpen) {
          return;
        }
        handler(event);
      };
      document.addEventListener("click", listener);
      return () => {
        document.removeEventListener("click", listener);
      };
    },
    [ref, handler]
  );

}