import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";
import ModalLogin from "../../routes/ModalLogIn";

function AppLayout() {
  const { isDark } = useSelector((state) => state.general);

  return (
    <div className={isDark ? "bg-night" : "bg-light"}>
      <ModalLogin />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
