'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery } from '@/lib/utils';
import React from 'react';

interface CategoryCardProps {
  catNameEn: string;
  noOfSubcat: number;
  categoryId: number;
  noOfDua: number;
  fetchSubCategories: (catId: number) => void;
}

const CategoryCard = ({
  catNameEn,
  noOfSubcat,
  categoryId,
  noOfDua,
  fetchSubCategories
}: CategoryCardProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategoryClick = async (item: number) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'cat',
      value: item.toString()
    });

    fetchSubCategories(item);

    router.push(newUrl, { scroll: false });
  };

  return (
    <div
      onClick={() => handleCategoryClick(categoryId)}
      className="flex bg-[#E8F0F5] px-3 py-3 rounded-xl w-full justify-between items-center gap-2"
    >
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
            {catNameEn}
          </h4>
          <p className="text-xs text-[#7E7E7E]  dark:text-dark-text xs:text-[11px]">
            Subcategoy: {noOfSubcat}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 p-2 border-l-2 border-l-[#E2E2E2]">
        <h4 className="text-[#393939] font-inter font-bold text-base sm:text-sm">
          {noOfDua}
        </h4>
        <p className="text-xs text-[#7E7E7E]  dark:text-dark-text xs:text-[11px]">
          Duas
        </p>
      </div>
    </div>
  );
};
export default CategoryCard;
