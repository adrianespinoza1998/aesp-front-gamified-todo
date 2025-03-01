"use client";

import { useAppSelector } from "@/libs/redux/hooks";
import React from "react";

export const Name = () => {
  const { name } = useAppSelector((state) => state.name);
  return (
    <>
      <h1>Name: {name}</h1>
    </>
  );
};
