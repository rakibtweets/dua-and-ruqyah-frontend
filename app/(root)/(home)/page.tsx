/* eslint-disable @typescript-eslint/no-explicit-any */
import DuaCard from '@/components/DuaCard/DuaCard';
import { getDuas } from '@/lib/actions/dua.action';

export default async function Home() {
  const duas = await getDuas();
  return (
    <div className="flex flex-col gap-4">
      {duas.map((dua: any) => (
        <DuaCard key={dua.id} dua={dua} />
      ))}
    </div>
  );
}
