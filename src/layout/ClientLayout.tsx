import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-[#141617]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default ClientLayout;
