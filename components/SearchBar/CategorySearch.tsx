import { Search } from 'lucide-react';
import { Input } from '../ui/input';

const CategorySearch = () => {
  return (
    <div className="relative mx-2 mt-3">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="text-s" size={22} />
      </div>
      {/* Input Field */}
      <Input
        placeholder="Search by Dua Name"
        className="pl-10 pr-4 py-6 w-full rounded-md"
      />
    </div>
  );
};
export default CategorySearch;
