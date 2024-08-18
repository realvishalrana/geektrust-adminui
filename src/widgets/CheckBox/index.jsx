import React from "react";

const CheckBox = ({
  id,
  label,
  checked = false,
  onChange = () => false,
  partialChecked = undefined,
  type = "checkbox",
  ...others
}) => {
  return (
    <div className="flex items-start gap-2">
      <div className="relative flex items-center">
        <input
          id={id}
          type={type}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 border-gray-300 cursor-pointer rounded-none text-primary focus:ring-primary mt-0.5 bg-primary"
          {...others}
        />
        <span
          className={
            partialChecked !== undefined
              ? !checked && partialChecked
                ? "indeterminate-checkbox"
                : "custom-checkbox"
              : "custom-checkbox"
          }
        />
      </div>
      {label && (
        <label className="ml-1 text-sm cursor-pointer text-black" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
