import { sidebarLinks } from '@/constant';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="flex  flex-col justify-between items-center mt-7 ">
      <div className=" mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24">
        <Image src="/icons/brand-logo.svg" alt="logo" width={73} height={73} />
      </div>
      <div className="flex items-center flex-col gap-8">
        {sidebarLinks.map((link) => (
          <div
            key={link.label}
            className="flex p-2 rounded-full bg-[#E8F0F5]  w-10 h-10 items-center justify-center gap-4"
          >
            <Image
              className="cursor-pointer"
              src={link.imgURL}
              alt={link.label}
              width={35}
              height={35}
            />
          </div>
        ))}
      </div>

      <div className=" mt-10 xl:mt-16 2xl:mt-16 3xl:mt-24">
        <Image
          src="/icons/support.svg"
          alt="support us"
          width={73}
          height={73}
        />
      </div>
    </div>
  );
};
export default Sidebar;
