import { ControllerRenderProps } from "react-hook-form";

export type FieldType =
  | "text"
  | "email"
  | "password"
  | "textarea"
  | "number"
  | "select"
  | "checkbox";

export interface AppFormFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: FieldType;
  render?: (field: ControllerRenderProps) => React.ReactNode; // escape hatch para tipos custom
}
