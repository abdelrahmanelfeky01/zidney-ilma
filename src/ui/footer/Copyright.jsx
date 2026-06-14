import { useTranslation } from "react-i18next";
import youtubeIcon from "../../assets/icons/socialMedia/youtube.png";
import whatsappIcon from "../../assets/icons/socialMedia/whatsapp.png";
import telegramIcon from "../../assets/icons/socialMedia/telegram.png";
import { useSelector } from "react-redux";

const socials = [
  { icon: youtubeIcon, titleEn: "YouTube", titleAr: "يوتيوب" },
  { icon: whatsappIcon, titleEn: "WhatsApp", titleAr: "واتساب" },
  { icon: telegramIcon, titleEn: "Telegram", titleAr: "تيليجرام" },
];

function Copyright() {
  const isDark = useSelector((state) => state.general.isDark);
  const { t, i18n } = useTranslation();
  const curLang = i18n.language;

  const className = {
    
    container: `mx-auto flex max-w-290 flex-wrap items-center justify-between gap-2 text-[12.5px] ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,

    socialLink: `flex h-12 w-12 cursor-pointer items-center justify-center rounded-[10px] border text-[15px] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-yellow-light ${
      isDark ? "border-[#223028] bg-[#172019]" : "border-[#e8e0d0] bg-white"
    } ${isDark ? "text-[#5a7560]" : "text-[#888]"}`,
  };

  return (
    <div className={className.container}>
      <span>{t("homePage.footer.copyrightText")}</span>
      <div className="flex gap-2.5">
        {socials.map((s) => (
          <a
            key={curLang === "en" ? s.titleEn : s.titleAr}
            href="#"
            title={curLang === "en" ? s.titleEn : s.titleAr}
            className={className.socialLink}
          >
            <img
              src={s.icon}
              alt={curLang === "en" ? s.titleEn : s.titleAr}
              className="h-7 w-7 object-contain"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Copyright;
