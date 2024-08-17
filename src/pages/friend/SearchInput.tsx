import SearchIcon from "@/assets/ic_20_search.svg?react";

export const SearchInput = () => {
  return (
    <div className="px-4 py-1.5">
      <div className="flex items-center rounded-full p-2.5 bg-offWhite020">
        <SearchIcon className="mr-2" />
        <input
          className="flex-grow appearance-none bg-offWhite020 placeholder-gray040 focus:outline-none cursor-pointer caret-purple100 t-b2-r-15"
          placeholder="검색"
        />
      </div>
    </div>
  );
};
