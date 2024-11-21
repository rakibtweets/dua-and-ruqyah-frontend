/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-comment-textnodes */
import { getCategories } from '@/lib/actions/category.action';
import CategorySearch from '../SearchBar/CategorySearch';
import { Card } from '../ui/card';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion';

const duaItems = [
  'What is Dua',
  'Conditions for Dua to be successful',
  'The Methode Of Dua',
  'Before Dua',
  'During Dua',
  "Prerequisites of writing Dua and drinking it's water",
  'The correct way to perform Dua for a small child'
];

const Category = async () => {
  const categories = await getCategories();
  return (
    <>
      <h1 className="h-[6vh] hidden lg:flex font-poppins text-[22px] text-[#393939]">
        Dua Page
      </h1>
      <Card className=" hidden max-w-[430px] lg:flex flex-col gap-4 bg-white rounded-lg lg:rounded-xl lg:h-[83vh] xl:h-[84vh] 2xl:h-[85vh] 3xl:h-[86vh]">
        <div className="bg-[#1FA45B] w-full rounded-tr-xl rounded-tl-xl h-14 py-8 flex justify-center items-center">
          <p className="text-white text-base">Categories</p>
        </div>
        <CategorySearch />
        {/* Dua Category */}

        <div className=" flex flex-col w-full gap-4  overflow-y-auto custom-scrollbar ">
          {categories?.map((item: any) => {
            return (
              <Accordion
                type="single"
                collapsible
                key={item?.id}
                className="mx-2 p-0"
              >
                <AccordionItem className="border-none" value={item?.id}>
                  <AccordionTrigger className="hover:no-underline p-0">
                    <div className="flex bg-[#E8F0F5] px-3 py-3 rounded-xl w-full justify-between items-center gap-2">
                      <div className="flex justify-center items-center gap-4">
                        <div className="p-3 min-h-10 min-w-10 bg-[#CFE0E5] rounded-md">
                          <Image
                            src="./icons/category-icon.svg"
                            width={40}
                            height={40}
                            alt="category"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-[#393939] font-inter font-bold text-base sm:text-sm">
                            {item?.cat_name_en}
                          </h4>
                          <p className="text-xs text-[#7E7E7E]  dark:text-dark-text xs:text-[11px]">
                            Subcategoy: {item?.no_of_subcat}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1 p-2 border-l-2 border-l-[#E2E2E2]">
                        <h4 className="text-[#393939] font-inter font-bold text-base sm:text-sm">
                          21
                        </h4>
                        <p className="text-xs text-[#7E7E7E]  dark:text-dark-text xs:text-[11px]">
                          Duas
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-4 pt-2">
                      {duaItems.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center py-3 relative cursor-pointer"
                        >
                          <div className="absolute left-0.5 top-0 bottom-0 border-l-2 border-dotted border-green-300"></div>
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mr-4 relative z-10"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </Card>
    </>
  );
};
export default Category;
