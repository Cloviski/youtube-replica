import { createContext, useState } from 'react';

interface IAppContext {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

interface UserStoreProps {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({
  openMenu: false,
  setOpenMenu: () => {},
});

export const AppStore = ({ children }: UserStoreProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </AppContext.Provider>
  );
};




