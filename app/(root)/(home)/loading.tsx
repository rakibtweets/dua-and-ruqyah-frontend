import DuaCardSkeleton from '@/components/Skeletons/DuaCardSkeleton';

const loading = () => {
  return (
    <div className="flex flex-col gap-5">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <DuaCardSkeleton key={i} />
      ))}
    </div>
  );
};
export default loading;
