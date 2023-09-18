import Sidemenu from "../components/Sidemenu";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Frame = () => {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <aside className="w-[210px] border-r py-1">
          <Sidemenu />
        </aside>
        <main className="w-[calc(100%-210px)] py-2 px-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Frame;
