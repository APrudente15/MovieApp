import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { Header } from "./components";
import { ShowProvider } from "./contexts";

function App() {
  return (
    <>
     <ShowProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Pages.HomePage />} />
            <Route path="/Search" element={<Pages.SearchPage />} />
            <Route path="/Shows">
              <Route index element={<Pages.ShowsPage />} />
              <Route path=":id" element={<Pages.ShowPage />} />
            </Route>
            <Route path="*" element={<Pages.NotFound />} />
          </Route>
        </Routes>
      </ShowProvider>
    </>
  );
}

export default App;


//<ShowContext.Provider></ShowContext.Provider> is final part of "providing the context" step in useContext steps