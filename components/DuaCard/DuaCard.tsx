/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { Card, CardFooter } from '../ui/card';
import { duaCardLinks } from '@/constant';

const DuaCard = ({ dua }: any) => {
  return (
    <Card className="rounded-xl shadow-none py-4 px-7">
      {/* Title */}
      <div className="flex gap-3 items-center">
        <div>
          <Image
            src="/icons/allah-name-icon.svg"
            width={35}
            height={35}
            alt="Allah's Name"
          />
        </div>
        <h4 className="font-bold h4 font-inter text-primary-foreground ">
          {dua?.id}. {dua?.dua_name_en}
        </h4>
      </div>
      {/* Description */}
      <div className="flex flex-col mt-5 lg:mt-7 gap-5 lg:gap-7">
        <p className="font-normal text-lg leading-6 lg:leading-8 font-inter text-justify text-secondary-foreground">
          {dua.top_en}
        </p>
        {/* Arabic */}
        {dua.dua_arabic && (
          <p className="font-normal text-3xl leading-9 lg:leading-10 font-inter text-right text-secondary-foreground">
            {dua.dua_arabic}
          </p>
        )}
        {/* Transliteration */}
        {dua.transliteration_en && (
          <p className="font-normal text-base leading-5 italic lg:leading-6 font-inter text-justify text-secondary-foreground">
            <span className="font-bold text-lg">Transliteration: </span>
            {dua.transliteration_en}
          </p>
        )}
        {/* Transilation */}
        {dua.translation_en && (
          <p className="font-normal text-base leading-5 font-inter text-justify text-secondary-foreground">
            <span className="font-bold text-lg">Translation: </span>There is
            {dua.translation_en}
          </p>
        )}

        {/* Reference */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-lg leading-5 font-inter text-justify text-[#1FA45B]">
            Reference
          </p>
          <p className="text-[#393939] font-semibold">{dua.refference_en}</p>
        </div>
      </div>
      {/* Footer */}

      <CardFooter className="mt-7 w-full p-0 flex justify-between items-center">
        <div>
          <Image
            src="/icons/play-button.svg"
            width={44}
            height={44}
            alt="Audio play button"
          />
        </div>
        <div className="flex gap-10">
          {duaCardLinks.map((link) => (
            <div key={link.id} className="cursor-pointer">
              <Image src={link.icon} width={24} height={24} alt={link.label} />
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
export default DuaCard;
