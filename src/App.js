import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import "./css/app.css";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";

function App() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<TechnoAdd></TechnoAdd>}></Route>
        <Route path="/list" element={<TechnoList></TechnoList>}></Route>
      </Routes>
    </>
  );
}

export default App;
