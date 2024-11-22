'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-comment-textnodes */
import { getCategories, getSubCategories } from '@/lib/actions/category.action';
import CategorySearch from '../SearchBar/CategorySearch';
import { Card } from '../ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion';
import CategoryCard from '../CategoryCard/CategoryCard';
import { useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery } from '@/lib/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import CategoryCardSkeleton from '../Skeletons/CategoryCardSkeletion';
import SubCategorySkeleton from '../Skeletons/SubCategorySkeleton';
import Image from 'next/image';
import { getDuasBySubCategory } from '@/lib/actions/dua.action';

const Category = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubCategoryClick = async (item: number) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'subcat',
      value: item.toString()
    });

    router.push(newUrl, { scroll: false });
  };

  const handleDuaClick = async (item: number) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'dua',
      value: item.toString()
    });

    router.push(newUrl, { scroll: false });
  };

  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });

  const {
    mutate: fetchSubCategories,
    data: subCategories,
    isPending: isSubCategoryLoading
  } = useMutation({
    mutationFn: getSubCategories
  });

  const { mutate: fetchDuasBySubCategories, data: subCategoriesDuas } =
    useMutation({
      mutationFn: getDuasBySubCategory
    });

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
          {isLoading
            ? ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7'].map(
                (i) => <CategoryCardSkeleton key={i} />
              )
            : categories?.map((item: any) => {
                return (
                  <Accordion
                    type="single"
                    collapsible
                    key={item?.id}
                    className="mx-2 p-0"
                  >
                    <AccordionItem className="border-none" value={item?.id}>
                      <AccordionTrigger className="hover:no-underline p-0">
                        <CategoryCard
                          catNameEn={item?.cat_name_en}
                          noOfSubcat={item?.no_of_subcat}
                          categoryId={item?.id}
                          noOfDua={item?.no_of_dua}
                          fetchSubCategories={fetchSubCategories}
                        />
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-4 pt-2">
                          {isSubCategoryLoading
                            ? [
                                'subcat1',
                                'subcat2',
                                'subcat3',
                                'subcat4',
                                'subcat5'
                              ].map((i) => <SubCategorySkeleton key={i} />)
                            : subCategories?.map((item: any) => (
                                <li
                                  key={item.id}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSubCategoryClick(item.id);
                                  }}
                                  className="flex items-center py-3 relative cursor-pointer"
                                >
                                  <div className="absolute left-0.5 top-0 bottom-0 border-l-2 border-dotted border-green-300"></div>
                                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mr-4 relative z-10"></div>
                                  <span className="text-gray-700 text-sm">
                                    <Accordion
                                      type="single"
                                      collapsible
                                      className="w-full"
                                    >
                                      <AccordionItem
                                        className="border-none"
                                        value="item-1"
                                      >
                                        <AccordionTrigger
                                          onClick={() =>
                                            fetchDuasBySubCategories(item.id)
                                          }
                                          className="hover:no-underline p-0"
                                        >
                                          {item?.subcat_name_en}
                                        </AccordionTrigger>
                                        <AccordionContent className="py-2">
                                          {subCategoriesDuas?.map(
                                            (dua: any) => {
                                              return (
                                                <div
                                                  key={dua.id}
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleDuaClick(dua.id);
                                                  }}
                                                  className="flex items-center  gap-3"
                                                >
                                                  <div>
                                                    <Image
                                                      src="/icons/duaarrow.svg"
                                                      alt="dua"
                                                      width={16}
                                                      height={16}
                                                    />
                                                  </div>
                                                  <p className="py-2">
                                                    {dua?.dua_name_en}
                                                  </p>
                                                </div>
                                              );
                                            }
                                          )}
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  </span>
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
