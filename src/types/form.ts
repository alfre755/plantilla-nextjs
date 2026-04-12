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
  options?: { value: string; label: string }[]; // para selects
  type?: FieldType;
  render?: (field: ControllerRenderProps) => React.ReactNode; // escape hatch para tipos custom
}
