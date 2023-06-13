import NavBar from "./component/NavBar/NavBar";
import "./App.css";
import BackDrop from "./component/BackDrop/BackDrop";
import { useState } from "react";
import SideBar from "./component/SideBar/SideBar";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";

function App() {
  const [sidebar, setSideBar] = useState(false);

  const openSideBar = () => {
    setSideBar(true);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeSideBar = () => {
    setSideBar(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  return (
    <div className="App">
      <NavBar opensidebar={openSideBar} />
      <BackDrop showsidebar={sidebar} closesidebar={closeSideBar} />
      <SideBar showsidebar={sidebar} closesidebar={closeSideBar} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
