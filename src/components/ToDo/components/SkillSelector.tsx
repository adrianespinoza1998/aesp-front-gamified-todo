import React, { ChangeEvent } from "react";
import { IOption } from "../interfaces/IOption";

interface IProps {
  id: string;
  label: string;
  selectValue: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: IOption[];
}

export const SkillSelector = ({
  id,
  label,
  selectValue,
  onChange,
  options,
}: IProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        value={selectValue}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option
            key={option.key}
            value={option.value}
            selected={option.selected}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
