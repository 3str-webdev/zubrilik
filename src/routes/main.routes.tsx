import QuestionPage from "../pages/QuestionPage/QuestionPage";
import { IRoute } from "./routesTypes";

const PlugComponent = () => {
  return <>Welcome</>;
};

export const mainRoutes: IRoute[] = [
  { id: 1, path: "/", element: <PlugComponent /> },
  { id: 2, path: "/questions", element: <QuestionPage /> },
];
