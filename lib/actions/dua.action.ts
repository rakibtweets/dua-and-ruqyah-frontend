'use server';

export const getDuas = async () => {
  const res = await fetch('http://localhost:5000/duas');
  const data = await res.json();
  return data;
};
