import { ChevronDown, Search, Settings } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  return (
    <div className="hidden md:w-auto md:flex">
      <div className="flex justify-between w-full items-center px-3">
        <div className="flex  items-center gap-2">
          <Image src="/icons/logo.png" alt="logo" width={50} height={50} />
          <p className="text-lg">Dua Page</p>
        </div>
        <div className="flex  justify-between items-center gap-6">
          <div className="relative w-[370px]">
            <Input
              placeholder="Search by Dua Name"
              className="rounded-md bg-white h-10   w-full py-6 text-sm"
            />
            <div className="absolute top-1.5 right-2 px-5 py-2 rounded-md bg-[#F3F4F6]">
              <Search size={22} />
            </div>
          </div>
          <Settings
            className="cursor-pointer lg:hidden text-primary"
            size={24}
          />
          <div className="flex items-center justify-center">
            <Avatar className="cursor-pointer">
              <AvatarImage src="/icons/profile.png" sizes="45" alt="@avatar" />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronDown size={12} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
