"use client";

import { CustomButton, CustomInput } from "@/components";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { setName } from "@/libs/redux/slices/nameSlice";
import { useRouter } from "next/navigation";
import React from "react";

export const NameForm = () => {
  const { name } = useAppSelector((state) => state.name);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/home");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <CustomInput
        id="character_name"
        label="Character Name"
        placeholder="Enter character name"
        value={name}
        onChange={handleChange}
      />
      <CustomButton type="submit" label="Submit" />
    </form>
  );
};
