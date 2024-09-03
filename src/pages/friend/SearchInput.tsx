import SearchIcon from "@/assets/ic_20_search.svg?react";
import { debounce } from "@/utils/debounce";
import { type FC, useCallback, useEffect, useRef } from "react";

type SearchInputProps = {
  autoFocus?: boolean;
  setKeyword?: (keyword: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({
  autoFocus,
  setKeyword,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSetKeyword = useCallback(
    debounce((value: string) => {
      setKeyword?.(value);
    }, 300),
    [],
  );

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
        onChange={(e) => debouncedSetKeyword(e.target.value)}
        className="flex-grow appearance-none bg-offWhite020 placeholder-gray040 focus:outline-none cursor-pointer caret-purple100 t-b2-r-15 text-base h-[20px]"
        placeholder="검색"
      />
    </div>
  );
};
