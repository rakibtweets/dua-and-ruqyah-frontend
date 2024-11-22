'use server';

import console from 'console';

interface IgetCategoriesProps {
  cat: string | undefined;
  subcat: string | undefined;
  dua: string | undefined;
}

export const getDuas = async ({ cat, subcat, dua }: IgetCategoriesProps) => {
  let url: string;

  if (cat && subcat && dua) {
    url = `http://localhost:5000/duas/${dua}`;
  } else if (cat && subcat) {
    url = `http://localhost:5000/subcategories/${subcat}/duas`;
  } else if (cat) {
    url = `http://localhost:5000/categories/${cat}/duas`;
  } else {
    url = `http://localhost:5000/duas`;
  }
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getDuasBySubCategory = async (subcat: number) => {
  const res = await fetch(`http://localhost:5000/subcategories/${subcat}/duas`);
  const data = await res.json();
  return data;
};
