import Image from 'next/image';
import { Card } from '../ui/card';
import { settingsCards } from '@/constant';
import { Switch } from '../ui/switch';

const Settings = () => {
  return (
    <Card className="lg:h-[86vh] hidden lg:block bg-white rounded-2xl ">
      <div className="text-center w-full mt-9">
        <h2 className="font-semibold text=[#393939]">Settings</h2>
      </div>
      <div className="flex flex-col gap-4 mx-4 mt-6 ">
        {settingsCards.map((card) => (
          <Card
            key={card.id}
            className="flex  border-l-4 border-transparent hover:border-primary-foreground transition group items-center cursor-pointer gap-4 rounded-md bg-[#F7F8FA] py-3 px-4  shadow-none"
          >
            <div className="cursor-pointer bg-[#E8F0F5] rounded-full p-2">
              <Image
                src={card.icon}
                alt={`${card.label} icon`}
                width={24}
                height={24}
                className="group-hover:text-primary-foreground transition"
              />
            </div>
            <p className="text-base leading-5 xs:text-sm lg-min:text-sm text-[#868686] group-hover:text-primary-foreground transition">
              {card.label}
            </p>
          </Card>
        ))}
        <Card className="flex shadow-sm justify-between items-center gap-4 rounded-md  py-4 px-4 ">
          <p className="text-base leading-5 xs:text-sm lg-min:text-sm text-[#393939]">
            Night Mode
          </p>
          <Switch id="night-mode" />
        </Card>
      </div>
    </Card>
  );
};
export default Settings;
