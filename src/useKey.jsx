import { useEffect } from "react";

export function useKey(keyCode, action) {
  useEffect(
    function () {
      function cb(e) {
        if (e.code === keyCode) {
          action();
        }
      }

      document.addEventListener("keydown", cb);

      return () => document.removeEventListener("keydown", cb);
    },
    [action, keyCode]
  );
}
