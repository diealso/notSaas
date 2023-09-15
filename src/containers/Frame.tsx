import Sidemenu from "../components/Sidemenu";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Frame = () => {
  return (
    <>
      <Header />
      <Sidemenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Frame;
