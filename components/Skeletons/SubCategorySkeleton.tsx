const SubCategorySkeleton = () => {
  return (
    <li className="flex items-center w-full  py-3 relative cursor-pointer animate-pulse">
      {/* Left border dotted line */}
      <div className="absolute left-0.5 top-0 bottom-0 border-l-2 border-dotted border-gray-300"></div>
      {/* Small circle indicator */}
      <div className="flex-shrink-0 w-2 h-2 bg-gray-300 rounded-full mr-4 relative z-10"></div>
      {/* Text placeholder */}
      <div className="h-4 bg-gray-300 rounded-md w-24"></div>
    </li>
  );
};

export default SubCategorySkeleton;
