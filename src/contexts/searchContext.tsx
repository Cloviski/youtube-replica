import { createContext, useContext, useState } from "react";

interface ISearchContext {
  search: string;
  setSearch: (inputValue: string) => void;
}

interface SearchContextProps {
  children: React.ReactNode;
}

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearchContext() {
  return useContext(SearchContext);
}


