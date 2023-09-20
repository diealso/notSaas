import Sidemenu from "../components/Sidemenu";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Frame = () => {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <aside className="md:w-[210px] border-r py-2 hidden  md:inline-block">
          <Sidemenu />
        </aside>
        <main className="w-full md:max-w-[calc(100%-210px)] pt-2 pb-4 px-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Frame;
