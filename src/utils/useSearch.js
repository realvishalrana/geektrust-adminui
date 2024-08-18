import { useRef, useCallback } from "react";

const useSearch = ({ setSearchValue, setValue }) => {
  const timeoutRef = useRef(null);

  const onSearch = useCallback(
    (input) => {
      setValue(input);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setSearchValue(input);
      }, 350);
    },
    [setSearchValue, setValue]
  );

  return { onSearch };
};

export default useSearch;
