import { useContext, useEffect } from "react";
import { MenuContext } from "./menuContext";

export const useWindowResize = (): void => {
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  // Close menu when the window is resized if it's currently opened.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1312 && openMenu) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openMenu, setOpenMenu]);
};


