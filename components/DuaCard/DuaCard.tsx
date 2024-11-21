import Image from 'next/image';
import { Card, CardFooter } from '../ui/card';
import { duaCardLinks } from '@/constant';

const DuaCard = () => {
  const dua_arabic = true;
  const transliteration_en = true;
  const translation_en = true;
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
          Title: Lorem ipsum dolor sit amet.
        </h4>
      </div>
      {/* Description */}
      <div className="flex flex-col mt-5 lg:mt-7 gap-5 lg:gap-7">
        <p className="font-normal text-lg leading-6 lg:leading-8 font-inter text-justify text-secondary-foreground">
          Prophet (ﷺ) used to say after every compulsory prayer, The servant
          will ask his Lord for all of his religiously and worldly needs,
          because the treasure of all things is in the hands of Allah. Allah
          says (interpretation of the meaning): “And there is not a thing but
          that with Us are its depositories, and We do not send it down except
          according to a known measure.” (Sura Al-Hijr 15:21) No one can
          withhold what Allah gives; And, no one can give what he resists.
        </p>
        {/* Arabic */}
        {dua_arabic && (
          <p className="font-normal text-3xl leading-9 lg:leading-10 font-inter text-right text-secondary-foreground">
            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
            مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا
            يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
          </p>
        )}
        {/* Transliteration */}
        {transliteration_en && (
          <p className="font-normal text-base leading-5 italic lg:leading-6 font-inter text-justify text-secondary-foreground">
            <span className="font-bold text-lg">Transliteration: </span>
            Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
            lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir. Allaahumma
            laa maani&apos;a limaa a&apos;taita wa laa mu&apos;tia limaa
            mana&apos;ta wa laa yanfa&apos;u dhal-jaddi minka al-jaddu
          </p>
        )}
        {/* Transilation */}
        {translation_en && (
          <p className="font-normal text-base leading-5 font-inter text-justify text-secondary-foreground">
            <span className="font-bold text-lg">Translation: </span>There is
            none worthy of worship but Allah alone, Who has no partner, His is
            the dominion and His is the praise, and He is Able to do all things.
            O Allah! None can withhold what You give, and none can give what You
            withhold, and the might of the mighty person cannot benefit him
            against You.
          </p>
        )}

        {/* Reference */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-lg leading-5 font-inter text-justify text-[#1FA45B]">
            Reference
          </p>
          <p className="text-[#393939] font-semibold">Bukhari: 844</p>
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
