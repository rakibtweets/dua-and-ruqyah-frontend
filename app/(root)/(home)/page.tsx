/* eslint-disable @typescript-eslint/no-explicit-any */
import DuaCard from '@/components/DuaCard/DuaCard';
import { getDuas } from '@/lib/actions/dua.action';
import { SearchParamsProps } from '@/types';
import { Suspense } from 'react';

export default async function Home({ searchParams }: SearchParamsProps) {
  const { cat, subcat } = await searchParams;
  const duas = await getDuas({ cat: cat, subcat: subcat });
  return (
    <Suspense fallback={<div className="text-center w-full">Loading...</div>}>
      <div className="flex flex-col gap-4">
        {duas?.map((dua: any) => (
          <DuaCard key={dua.dua_id} dua={dua} />
        ))}
      </div>
    </Suspense>
  );
}
