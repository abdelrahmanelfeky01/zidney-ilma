import { useDispatch, useSelector } from "react-redux";
import ButtonLogin from "../components/layout/header/buttons/ButtonLogin";
import ButtonSignUp from "../components/layout/header/buttons/ButtonSignUp";
import { toggleShowLoginModal } from "../store/generalSlice";
import { useTranslation } from "react-i18next";
function ModalLogin() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.general);
  
  const { t } = useTranslation();

  
  const { showLoginModal } = useSelector((state) => state.general);

  function handleCloseModal() {
    dispatch(toggleShowLoginModal());
  }

  return (
    showLoginModal && (
      <div className="fixed z-99999 h-dvh w-full">
        {/* Overlay */}
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        />
        {/* Modal */}
        <div
          data-aos="fade-in"
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-[0_0_20px_5px_rgb(0,0,0,0.1)] ${isDark ? "bg-night" : "bg-light"} 600:p-10 300:w-[80%] 770:w-fit p-7`}
        >
          <h2 className="text-title 900:text-3xl mb-3 text-center text-2xl font-semibold">
            {t("modalLogin.title")}
          </h2>
          <span className="bg-primary-green-heavy mx-auto mb-10 block h-1 w-[20%]" />
          <p className="text-description mb-10 text-center font-medium">
            {t("modalLogin.description")}
          </p>

          <div className="500:gap-10 500:flex-row mb-8 flex flex-col items-center justify-center gap-4">
            <ButtonLogin
              position="modal"
              className="max-500:w-[80%]"
              onClick={() => {
                dispatch(toggleShowLoginModal());
              }}
            />
            <ButtonSignUp
              position="modal"
              className="max-500:w-[80%]"
              onClick={() => {
                dispatch(toggleShowLoginModal());
              }}
            />
          </div>
          <span
            onClick={handleCloseModal}
            className="text-description mx-auto block w-[25%] cursor-pointer text-center text-sm font-medium"
          >
            {t("modalLogin.dismiss")}
          </span>
        </div>
      </div>
    )
  );
}

export default ModalLogin;
