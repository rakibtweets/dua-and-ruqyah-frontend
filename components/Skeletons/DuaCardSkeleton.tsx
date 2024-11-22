import { Card, CardFooter } from '../ui/card';

const DuaCardSkeleton = () => {
  return (
    <Card className="rounded-xl shadow-none py-4 px-7 animate-pulse">
      {/* Title */}
      <div className="flex gap-3 items-center">
        <div className="w-[35px] h-[35px] bg-gray-200 rounded-full" />
        <div className="h-6 bg-gray-200 rounded w-3/4" />
      </div>
      {/* Description */}
      <div className="flex flex-col mt-5 lg:mt-7 gap-5 lg:gap-7">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />

        {/* Arabic */}
        <div className="h-8 bg-gray-200 rounded w-full" />

        {/* Transliteration */}
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />

        {/* Translation */}
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />

        {/* Reference */}
        <div className="flex flex-col gap-1">
          <div className="h-5 bg-gray-200 rounded w-1/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
      {/* Footer */}
      <CardFooter className="mt-7 w-full p-0 flex justify-between items-center">
        <div className="w-[44px] h-[44px] bg-gray-200 rounded-full" />
        <div className="flex gap-10">
          {['one', 'two', 'three', 'four', 'five'].map((i) => (
            <div key={i} className="w-6 h-6 bg-gray-200 rounded-full" />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default DuaCardSkeleton;
