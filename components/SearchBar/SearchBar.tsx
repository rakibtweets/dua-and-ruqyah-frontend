import { Search } from 'lucide-react';
import { Input } from '../ui/input';

const SearchBar = () => {
  return (
    <div className="flex  justify-between items-center ">
      <div className="relative w-[370px]">
        <Input
          placeholder="Search by Dua Name"
          className="rounded-md bg-white h-10   w-full py-6 text-sm"
        />
        <div className="absolute top-1.5 right-2 px-5 py-2 rounded-md bg-[#F3F4F6]">
          <Search size={22} />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
