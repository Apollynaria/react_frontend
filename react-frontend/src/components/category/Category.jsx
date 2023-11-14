import React from 'react';
import { useCategories } from '../../pages/Categories.context';

function Category({ id, style }) {
  const categories = useCategories();
  const category = categories.find(item => item.id === id);

  return (
      <div id={id} style={style ? style : { color: "blue" }}>
          <div>{category ? category.name : "Loading..."}</div>
      </div>
  );
}

export default Category;