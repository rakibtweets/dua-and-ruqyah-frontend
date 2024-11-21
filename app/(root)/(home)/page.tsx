/* eslint-disable @typescript-eslint/no-explicit-any */
import DuaCard from '@/components/DuaCard/DuaCard';
import { getDuas } from '@/lib/actions/dua.action';
import { SearchParamsProps } from '@/types';

export default async function Home({ searchParams }: SearchParamsProps) {
  console.log('category id', searchParams.cat);
  const duas = await getDuas({ cat: searchParams?.cat || '' });
  return (
    <div className="flex flex-col gap-4">
      {duas.map((dua: any) => (
        <DuaCard key={dua.dua_id} dua={dua} />
      ))}
    </div>
  );
}
