import Home from "./pages/Home";
import Menu from "./components/Menu";
import "./css/app.css";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";

function App() {
  return (
    <>
      <Menu></Menu>
      <Home></Home>
      <TechnoAdd></TechnoAdd>
      <TechnoList></TechnoList>
    </>
  );
}

export default App;
