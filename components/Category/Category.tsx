/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-comment-textnodes */
import { getCategories } from '@/lib/actions/category.action';
import CategorySearch from '../SearchBar/CategorySearch';
import { Card } from '../ui/card';
import Image from 'next/image';

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
              <div
                key={item?.id}
                className="px-4 py-2 bg-[#E8F0F5] mx-2 rounded-xl"
              >
                <div className="flex justify-between items-center gap-4">
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
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
};
export default Category;
