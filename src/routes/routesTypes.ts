import { ReactNode } from "react";

export interface IRoute {
  id: number;
  path: string;
  element: ReactNode;
}
