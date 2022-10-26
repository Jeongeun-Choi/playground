import { ReactNode } from "react";

export type TabStyle = "none" | "outlined";
export type Type = "primary" | "secondary" | "luna";

export type Item = {
  tabName: string;
  key: string;
  children: ReactNode;
};
