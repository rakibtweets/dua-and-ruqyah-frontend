'use server';

export const getCategories = async () => {
  const res = await fetch('http://localhost:5000/categories');
  const data = await res.json();
  return data;
};

export const getSubCategories = async (catId: number) => {
  console.log('catId', catId);
  const res = await fetch(
    `http://localhost:5000/categories/${catId}/subcategories`
  );
  const data = await res.json();
  return data;
};
