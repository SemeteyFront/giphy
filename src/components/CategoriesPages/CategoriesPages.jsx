import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function CategoriesPages() {
  const dispatch = useDispatch()
  const subcategories = useSelector(state => state.categories)
  console.log(subcategories)
  return (
    <div>
      {
        subcategories.map(({subcategories}) => <p key={subcategories.name}>{subcategories.name}</p>)
      }
    </div>
  );
}

export default CategoriesPages;
