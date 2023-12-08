import React, { FC } from 'react';
import { useCategories } from '../../pages/Categories.context';
import CategoryType from '../../types/CategoryType';

interface CategoryProps {
  id: number;
  style?: React.CSSProperties;
}

const Category: FC<CategoryProps> = ({ id, style }) => {
  const { categories } = useCategories();
  const category = categories.find((item: CategoryType) => item.id === id);

  return (
    <div id={id.toString()} style={style ? style : { color: 'blue' }}>
      <div>{category ? category.name : 'Loading...'}</div>
    </div>
  );
};

export default Category;