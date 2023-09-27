import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ToDoPage from "./pages/ToDoPage";
import NavMenu from "./components/Counter/NavMenu";

const App = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<ToDoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
