'use server';

interface IgetCategoriesProps {
  cat: string | undefined;
}

export const getDuas = async ({ cat }: IgetCategoriesProps) => {
  let url: string;
  if (cat) {
    url = `http://localhost:5000/categories/${cat}/duas`;
  } else {
    url = `http://localhost:5000/duas`;
  }
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
