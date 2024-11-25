/* eslint-disable @typescript-eslint/no-explicit-any */
import Category from '@/components/Category/Category';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { ChevronDown, Settings as SettingIcon, Menu } from 'lucide-react';
import Settings from '../../Settings/Settings';

const MobileNav = ({ categories }: any) => {
  return (
    <div className="lg:hidden">
      <div className="flex  flex-col">
        <div className="flex justify-between items-center py-5 px-3">
          <p className="text-lg">Duas Page</p>
          <div className="flex items-center justify-center gap-3">
            <Sheet>
              <SheetTrigger>
                <SettingIcon
                  className="cursor-pointer text-primary"
                  size={24}
                />
              </SheetTrigger>
              <SheetContent>
                <SheetClose asChild>
                  <Settings />
                </SheetClose>
              </SheetContent>
            </Sheet>

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
          <Sheet>
            <SheetTrigger>
              <div className="flex gap-4 items-center">
                <Menu size={24} />
                <p>Dua Categories</p>
              </div>
            </SheetTrigger>
            <SheetContent side="left">
              <Category categories={categories} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
