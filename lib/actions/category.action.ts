'use server';

export const getCategories = async () => {
  const res = await fetch('http://localhost:5000/categories');
  const data = await res.json();
  return data;
};

export const getSubCategories = async (subCatId: number) => {
  const res = await fetch(
    `http://localhost:5000/subcategories/${subCatId}/subcategories`
  );
  const data = await res.json();
  return data;
};
