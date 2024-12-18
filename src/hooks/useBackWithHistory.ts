import { useEffect } from "react";

export default function useBackWithHistory(onBack: () => void) {
  useEffect(() => {
    const handlePopState = () => {
      history.pushState(null, "", document.URL);
      onBack();
    };

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onBack]);
}
