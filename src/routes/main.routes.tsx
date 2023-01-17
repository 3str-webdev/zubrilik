import IndexPage from "../pages/IndexPage/IndexPage";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import { IRoute } from "./routesTypes";

export const mainRoutes: IRoute[] = [
  { id: 1, path: "/", element: <IndexPage /> },
  { id: 2, path: "/questions", element: <QuestionPage /> },
];
