import React from "react";

const InputField = ({
  id,
  label,
  inputName,
  className = "",
  inputValue,
  type = "text",
  objKey = false,
  isError = false,
  disabled = false,
  labelClass = "!text-base font-normal text-black",
  isRequired = false,
  placeholder,
  ...other
}) => {

  return (
    <div className="w-full text-left">
      <label htmlFor={id} className={`${labelClass}`}>
        {label} {isRequired && "*"}
      </label>

      <div className="relative group">
        <input
          id={id}
          type={type}
          name={inputName}
          value={inputValue}
          disabled={disabled}
          placeholder={placeholder ?? `Enter ${label}`}
          className={`form-input px-3 py-3 rounded-lg w-full border-darkgray border focus:border-primary focus:outline-none transition flex text-sm !truncate ${className}`}
          {...other}
        />
      </div>
     
    </div>
  );
};

export default InputField;
