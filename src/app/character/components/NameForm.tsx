"use client";

import { CustomInput } from "@/components";
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
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};
