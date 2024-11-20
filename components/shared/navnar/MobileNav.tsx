import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { ChevronDown, Menu, Settings } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="lg:hidden">
      <div className="flex  flex-col">
        <div className="flex justify-between items-center py-5 px-3">
          <p className="text-lg">Duas Page</p>
          <div className="flex items-center justify-center gap-3">
            <Settings className="cursor-pointer text-primary" size={24} />
            <div className="flex items-center justify-center">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="./icons/profile.png"
                  className="h-8 w-8"
                  alt="@avatar"
                />

                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <ChevronDown size={12} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 py-5 px-3 bg-white rounded-md">
          <Menu size={24} />
          <p>Dua Categories</p>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
