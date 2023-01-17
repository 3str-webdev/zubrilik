import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import { mainRoutes } from "./routes/main.routes";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Routes>
            {mainRoutes.map(({ id, path, element }) => {
              return <Route key={id} path={path} element={element} />;
            })}
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
