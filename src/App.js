import NavBar from "./component/NavBar/NavBar";
import "./App.css";
import BackDrop from "./component/BackDrop/BackDrop";
import { useState } from "react";
import SideBar from "./component/SideBar/SideBar";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";

function App() {
  const [sidebar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prev) => !prev);
  };

  return (
    <div className="App">
      <NavBar opensidebar={toggleSideBar} />
      <BackDrop showsidebar={sidebar} closesidebar={toggleSideBar} />
      <SideBar showsidebar={sidebar} closesidebar={toggleSideBar} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
