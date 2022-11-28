import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import "./css/app.css";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // nos hooks
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    console.log("useEffect with []");
    setTechnos(storedTechnos);
  }, []);

  useEffect(() => {
    console.log("useEffect with [technos]");
    setStoredTechnos(technos);
  }, [technos]);

  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id));
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
          element={
            <TechnoList
              technos={technos}
              handleDeleteTechno={handleDeleteTechno}
            ></TechnoList>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
