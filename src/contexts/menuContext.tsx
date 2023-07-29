import { createContext, useState } from "react";

interface IMenuContext {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

interface UserStoreProps {
  children: React.ReactNode;
}

export const MenuContext = createContext<IMenuContext>({
  openMenu: false,
  setOpenMenu: () => {},
});

export const MenuProvider = ({ children }: UserStoreProps) => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
