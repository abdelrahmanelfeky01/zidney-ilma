import { Logo } from "../../../ui/Icons";
import ButtonToggleLanguage from "./buttons/ButtonToggleLanguage";
import ButtonToggleTheme from "./buttons/ButtonToggleTheme";

function NavBrand() {
  return (
    <div className="flex items-center justify-between gap-8">
      <div>
        <Logo />
      </div>
      <div className="flex items-center justify-between gap-4">
        <ButtonToggleLanguage position="nav" />
        <ButtonToggleTheme position="nav" />
      </div>
    </div>
  );
}

export default NavBrand;
