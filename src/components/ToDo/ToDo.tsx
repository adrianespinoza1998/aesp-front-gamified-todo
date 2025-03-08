"use client";

import React, { ChangeEvent, useState } from "react";
import { SkillSelector } from "./components/SkillSelector";
import { IOption } from "./interfaces/IOption";

export const ToDo = () => {
  const [selectedSkill, setSelectedSkill] = useState("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSkill(e.target.value);
  };

  const options: IOption[] = [
    {
      key: "1",
      value: "ELQ",
      label: "Eloquence",
    },
    {
      key: "2",
      value: "STR",
      label: "Strength",
    },
    {
      key: "3",
      value: "INT",
      label: "Intelligence",
    },
    {
      key: "4",
      value: "AGI",
      label: "Agility",
    },
    {
      key: "5",
      value: "SPD",
      label: "Speed",
    },
    {
      key: "6",
      value: "ENG",
      label: "Engineering",
    },
  ];

  return (
    <div>
      ToDo
      <SkillSelector
        id="skill_selector"
        label="Select a skill"
        selectValue={selectedSkill}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};
