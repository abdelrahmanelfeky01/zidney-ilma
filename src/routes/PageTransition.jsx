// src/routes/PageTransition.jsx

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, speed: 400 });

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    NProgress.start();
    setVisible(false);

    const frame = requestAnimationFrame(() => {
      setVisible(true);
      NProgress.done();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
    >
      {children}
    </div>
  );
}

export default PageTransition;
