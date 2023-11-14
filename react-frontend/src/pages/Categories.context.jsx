import React, { createContext, useContext, useState, useEffect } from 'react';
import http from "../../http-common";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        http
            .get("/categories")
            .then(response => {
                setCategories(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, [categories]);

    return (
        <CategoryContext.Provider value={categories}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => {
    return useContext(CategoryContext);
};