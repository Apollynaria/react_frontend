import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import http from "../../http-common";
import CategoryType from '../types/CategoryType';

interface CategoryContextValue {
  categories: CategoryType[];
  updateCategories: () => void;
}

export const CategoryContext = createContext<{
  categories: CategoryType[];
  updateCategories: () => void;
}>({
  categories: [],
  updateCategories: () => {},
});

interface CategoryProviderProps {
  children: ReactNode;
}

export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
};

export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    updateCategories();
  }, []);

  const updateCategories = () => {
    http
      .get("/categories")
      .then(response => {
        setCategories(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const contextValue: CategoryContextValue = {
    categories,
    updateCategories,
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};