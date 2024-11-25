'use server';

export const getCategories = async () => {
  const res = await fetch(`${process.env.BACKEND_SERVER_URL}/categories`);
  console.log('url', `${process.env.BACKEND_SERVER_URL}/categories`);
  const data = await res.json();
  return data;
};

export const getSubCategories = async (catId: number) => {
  const res = await fetch(
    `${process.env.BACKEND_SERVER_URL}/categories/${catId}/subcategories`
  );
  const data = await res.json();

  return data;
};
