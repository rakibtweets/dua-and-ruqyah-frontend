/* eslint-disable @typescript-eslint/no-explicit-any */
import DuaCard from '@/components/DuaCard/DuaCard';
import { getDuas } from '@/lib/actions/dua.action';
import { SearchParamsProps } from '@/types';

export default async function Home({ searchParams }: SearchParamsProps) {
  const { cat, subcat, dua } = searchParams;

  const duas = await getDuas({
    cat: cat || '',
    subcat: subcat || '',
    dua: dua || ''
  });
  return (
    <div className="flex flex-col gap-4">
      {duas?.map((dua: any) => (
        <DuaCard key={dua.id} dua={dua} />
      ))}
    </div>
  );
}
