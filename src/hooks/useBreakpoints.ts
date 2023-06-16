import { useEffect, useState } from "react";

const mediumWidth = 1024;

export const useBreakpoints = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < mediumWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < mediumWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isSmallScreen };
};
