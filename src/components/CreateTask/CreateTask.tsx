import React, { ChangeEvent } from "react";
import { CustomInput } from "../CustomInput";
import { SkillSelector } from "../ToDo/components/SkillSelector";
import { IOption } from "../ToDo/interfaces/IOption";
import { CustomButton } from "../CustomButton";
import { ITask } from "./interfaces/ITask";

interface IProps {
  task: ITask;
  handleChangeName: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  handleChangeSkill: (e: ChangeEvent<HTMLSelectElement>, index: number) => void;
  options: IOption[];
  index: number;
  submitTask: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const CreateTask = ({
  task,
  handleChangeName,
  handleChangeSkill,
  options,
  index,
  submitTask,
}: IProps) => {
  return (
    <form onSubmit={submitTask}>
      Create Task
      <CustomInput
        id={`task_name_${index}`}
        label="Task name"
        onChange={(e) => handleChangeName(e, index)}
        placeholder="Clean the bathroom"
        value={task.name}
      />
      <SkillSelector
        id={`skill_selector_${index}`}
        label="Select a skill"
        onChange={(e) => handleChangeSkill(e, index)}
        options={options}
        selectValue={task.skill}
      />
      <CustomButton label="Create task" type="submit" />
    </form>
  );
};
