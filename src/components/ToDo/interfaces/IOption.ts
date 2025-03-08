import { TSkill } from "../types/TSkill";

export interface IOption {
  key: string;
  value: string;
  label: TSkill;
  selected?: boolean;
}
