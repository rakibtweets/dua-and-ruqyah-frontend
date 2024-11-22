const CategoryCardSkeleton = () => {
  return (
    <div className="flex bg-[#E8F0F5] px-3 py-3 rounded-xl w-full justify-between items-center gap-2 animate-pulse">
      <div className="flex justify-center items-center gap-4">
        {/* Icon Placeholder */}
        <div className="p-3 min-h-10 min-w-10 bg-[#CFE0E5] rounded-md">
          <div className="h-10 w-10 bg-gray-300 rounded"></div>
        </div>
        <div className="flex flex-col gap-1">
          {/* Category Name Placeholder */}
          <div className="h-4 bg-gray-300 rounded-md w-32"></div>
          {/* Subcategory Placeholder */}
          <div className="h-3 bg-gray-200 rounded-md w-20"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 p-2 border-l-2 border-l-[#E2E2E2]">
        {/* Number of Duas Placeholder */}
        <div className="h-4 bg-gray-300 rounded-md w-10"></div>
        <div className="h-3 bg-gray-200 rounded-md w-16"></div>
      </div>
    </div>
  );
};

export default CategoryCardSkeleton;
