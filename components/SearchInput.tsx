"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchInput = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        // router.push(`/currentRoute?topic=${searchQuery}`);
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });
        router.push(`${newUrl}`, { scroll: false });
      } else {
        if (pathName === "/companions") {
          // If the search query is empty and we are on the companions page, reset the search params
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["topic"],
          });
          router.push(`${newUrl}`, { scroll: false });
        }
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, pathName, searchParams]);

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 pax-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search icon" width={15} height={15} />

      <input
        type="text"
        placeholder="Search companions ..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
