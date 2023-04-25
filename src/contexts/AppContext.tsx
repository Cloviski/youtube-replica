import { createContext } from 'react';

interface IAppContext {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}

export const AppContext = createContext<IAppContext>({
  openMenu: false,
  setOpenMenu: () => {},
});

