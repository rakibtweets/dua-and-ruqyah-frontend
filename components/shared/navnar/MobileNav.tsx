import { Settings } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center py-5 px-3">
        <p className="text-lg">Duas Page</p>
        <Settings className="cursor-pointer text-primary" size={24} />
      </div>
    </div>
  );
};
export default MobileNav;
