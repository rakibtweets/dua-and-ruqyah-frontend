'use server';

interface IgetCategoriesProps {
  cat: string | string[] | undefined;
  subcat: string | string[] | undefined;
  dua: string | string[] | undefined;
}

export const getDuas = async ({ cat, subcat, dua }: IgetCategoriesProps) => {
  let url: string;

  if (cat && subcat && dua) {
    url = `${process.env.BACKEND_SERVER_URL}/duas/${dua}`;
  } else if (cat && subcat) {
    url = `${process.env.BACKEND_SERVER_URL}/subcategories/${subcat}/duas`;
  } else if (cat) {
    url = `${process.env.BACKEND_SERVER_URL}/categories/${cat}/duas`;
  } else {
    url = `${process.env.BACKEND_SERVER_URL}/duas`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getDuasBySubCategory = async (subcat: number) => {
  const res = await fetch(
    `${process.env.BACKEND_SERVER_URL}/subcategories/${subcat}/duas`
  );
  const data = await res.json();
  return data;
};
