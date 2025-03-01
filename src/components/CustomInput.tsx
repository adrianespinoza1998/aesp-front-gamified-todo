import React from "react";

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput = ({ value, onChange }: IProps) => {
  return <input type="text" value={value} onChange={onChange} />;
};
