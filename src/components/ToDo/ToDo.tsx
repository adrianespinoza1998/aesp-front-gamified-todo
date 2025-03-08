"use client";

import React, { ChangeEvent, useState } from "react";
import { IOption } from "./interfaces/IOption";
import { ITask } from "../CreateTask/interfaces/ITask";
import { CreateTask } from "../CreateTask/CreateTask";
import { TSkill } from "./types/TSkill";

export const ToDo = () => {
  const options: IOption[] = [
    {
      key: "1",
      value: "Eloquence",
      label: "Eloquence",
    },
    {
      key: "2",
      value: "Strength",
      label: "Strength",
    },
    {
      key: "3",
      value: "Intelligence",
      label: "Intelligence",
    },
    {
      key: "4",
      value: "AAgility",
      label: "Agility",
    },
    {
      key: "5",
      value: "Speed",
      label: "Speed",
    },
    {
      key: "6",
      value: "Engineering",
      label: "Engineering",
    },
  ];

  const [tasks, setTasks] = useState<ITask[]>([
    {
      name: "",
      skill: "Agility",
    },
  ]);

  const handleChangeName = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newTasks = [...tasks];
    newTasks[index].name = e.target.value;
    setTasks(newTasks);
  };

  const handleChangeSkill = (
    e: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newTasks = [...tasks];
    newTasks[index].skill = e.target.value as TSkill;
    setTasks(newTasks);
  };

  const submit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Task submitted");
    console.log(tasks);

    setTasks([
      ...tasks,
      {
        name: "",
        skill: "Agility",
      },
    ]);
  };

  return (
    <div>
      ToDo
      {tasks.map((task, idx) => (
        <CreateTask
          index={idx}
          options={options}
          task={task}
          key={`create_task_${idx}`}
          handleChangeName={handleChangeName}
          handleChangeSkill={handleChangeSkill}
          submitTask={submit}
        />
      ))}
    </div>
  );
};
