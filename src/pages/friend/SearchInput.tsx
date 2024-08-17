import SearchIcon from "@/assets/ic_20_search.svg?react";
import { type FC, useEffect, useRef } from "react";

type SearchInputProps = {
  autoFocus?: boolean;
};

export const SearchInput: FC<SearchInputProps> = ({ autoFocus }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className="flex items-center rounded-full p-2.5 bg-offWhite020">
      <SearchIcon className="mr-2" />
      <input
        ref={inputRef}
        className="flex-grow appearance-none bg-offWhite020 placeholder-gray040 focus:outline-none cursor-pointer caret-purple100 t-b2-r-15"
        placeholder="검색"
      />
    </div>
  );
};
