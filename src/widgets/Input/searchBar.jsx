import React, { useState, useRef } from "react";
import CloseIcon from "../../icons/CloseX.jsx";
import SearchIcon from "../../icons/SearchIcon";
import useSearch from "../../utils/useSearch";

const SearchBar = ({
  label,
  inputId,
  inputName,
  inputType = "text",
  inputPlaceholder,
  className = "",
  containerClass = "",
  message = "Search Here",
  searchValue,
  setSearchValue,
  onChange,
  ...other
}) => {
  const [value, setValue] = useState(searchValue);
  const inputRef = useRef(null);
  const { onSearch } = useSearch({
    setSearchValue,
    setValue,
  });

  const handleClear = () => {
    setValue("");
    setSearchValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`w-full text-left ${containerClass}`}>
      <label htmlFor={inputId} className="text-base font-normal text-black">
        {label}
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-3">
          <SearchIcon className="text-dark-gray search-icon" />
        </div>
        <input
          type={inputType}
          name={inputName}
          id={inputId}
          placeholder={message}
          className={`truncate-text h-auto rounded-lg w-full border-darkgray border focus:outline-none focus:ring-2 focus:ring-primary transition flex text-sm placeholder-gray pr-2 pl-10 py-2.5 focus-within:text-black ${className}`}
          value={value}
          onChange={(e) => {
            const newValue = e.target.value;
            setValue(newValue);
            onChange ? onChange(e) : onSearch(newValue);
          }}
          ref={inputRef} 
        />
        {value && (
          <div
            className="absolute right-3"
            onClick={handleClear}
          >
            <CloseIcon size="14.314" className="text-gray-400 cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
