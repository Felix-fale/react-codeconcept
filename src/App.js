import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import Home from "./pages/Home";
import Menu from "./components/Menu";
import "./css/app.css";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";

function App() {
  const [technos, setTechnos] = useState([]);

  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
    setTechnos([...technos, {...techno, technoid:uuidv4()}]);
  }
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/add"
          element={<TechnoAdd handleAddTechno={handleAddTechno}></TechnoAdd>}
        ></Route>
        <Route
          path="/list"
          element={<TechnoList technos={technos}></TechnoList>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
