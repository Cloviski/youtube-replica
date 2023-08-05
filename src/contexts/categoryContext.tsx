import { createContext, useContext, useState } from "react";

interface ICategoryContext {
  categoryId: string;
  setCategoryId: (id: string) => void;
}

interface CategoryContextProps {
  children: React.ReactNode;
}

const CategoryContext = createContext<ICategoryContext>({} as ICategoryContext);

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider: React.FC<CategoryContextProps> = ({
  children,
}) => {
  const [categoryId, setCategoryId] = useState("0");

  return (
    <CategoryContext.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </CategoryContext.Provider>
  );
};
