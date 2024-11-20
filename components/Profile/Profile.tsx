import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { ChevronDown } from 'lucide-react';

const Profile = () => {
  return (
    <div className="h-[6vh] hidden lg:flex justify-end">
      <Avatar className="cursor-pointer">
        <AvatarImage src="/icons/profile.png" sizes="45" alt="@avatar" />

        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ChevronDown size={12} className="cursor-pointer" />
    </div>
  );
};
export default Profile;
