import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function ToasterComponent() {
  const { isDark } = useSelector((state) => state.general);

  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: isDark ? "#0d1410" : "#fdfcf8",
          color: isDark ? "#e8ede8" : "#333",
          border: isDark ? "1px solid #388e3c" : "1px solid #4caf4f6",
          borderRadius: "12px",

          fontSize: "14px",
        },
        success: {
          iconTheme: {
            primary: "#4caf50",
            secondary: isDark ? "#0d1410" : "#fdfcf8",
          },
        },
        error: {
          iconTheme: {
            primary: "#f44336",
            secondary: isDark ? "#0d1410" : "#fdfcf8",
          },
        },
      }}
    />
  );
}

export default ToasterComponent;
