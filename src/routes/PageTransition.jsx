// src/ui/PageTransition.jsx

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, speed: 500 });

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    NProgress.start();

    const hideTimer = setTimeout(() => setVisible(false), 0);

    const showTimer = setTimeout(() => {
      NProgress.done();
      setVisible(true);
    }, 500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
    };
  }, [pathname]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transition: "opacity 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}

export default PageTransition;
