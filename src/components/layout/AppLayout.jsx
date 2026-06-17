import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";

function AppLayout() {
  const { isDark } = useSelector((state) => state.general);

  return (
    <div className={isDark ? "bg-night" : "bg-light"}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
