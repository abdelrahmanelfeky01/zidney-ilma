import ButtonToggleLanguage from "./buttons/ButtonToggleLanguage";
import ButtonToggleTheme from "./buttons/ButtonToggleTheme";
import ButtonSignUp from "./buttons/ButtonSignUp";
import ButtonLogin from "./buttons/ButtonLogin";
import Hamburger from "./Hamburger";

function NavActions() {
  return (
    <div className="flex items-center gap-4">
      <>
        <ButtonLogin />
        <ButtonSignUp />
      </>
    </div>
  );
}

export default NavActions;
