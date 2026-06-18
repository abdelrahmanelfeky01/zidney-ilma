import ButtonToggleLanguage from "./buttons/ButtonToggleLanguage";
import ButtonToggleTheme from "./buttons/ButtonToggleTheme";
import ButtonSignUp from "./buttons/ButtonSignUp";
import ButtonLogin from "./buttons/ButtonLogin";
import Hamburger from "./Hamburger";
import { useUser } from "../../../features/auth/hooks/useUser";
import MiniSpinner from "../../../ui/MiniSpinner";
import UserAvatar from "./UserAvatar";

function NavActions() {
  const { isAuthenticated, isLoading: isLoginIn } = useUser();

  return (
    <div className="flex items-center gap-4">
      {/* if is Loading show this spinner */}
      {isLoginIn && <MiniSpinner />}
      {/* no User Log in ?? show this buttons */}
      {!isAuthenticated && !isLoginIn && (
        <>
          <ButtonLogin />
          <ButtonSignUp />
        </>
      )}
    </div>
  );
}

export default NavActions;
