import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { generateNonce } from "../../../utils/helpers";
import { useSigninWithGoogle } from "./useSigninWithGoogle";

const GSI_SCRIPT_ID = "google-identity-services-script";

export function useGoogleSignInButton() {
  const isDark = useSelector((state) => state.general.isDark);
  const { i18n } = useTranslation();
  const curLang = i18n.language;
  const { signInWithGoogleIdTokenFn, isLoading } = useSigninWithGoogle();
  const buttonRef = useRef(null);
  const nonceRef = useRef(null);
  const signInRef = useRef(signInWithGoogleIdTokenFn);

  useEffect(() => {
    signInRef.current = signInWithGoogleIdTokenFn;
  }, [signInWithGoogleIdTokenFn]);

  useEffect(() => {
    let isCancelled = false;

    async function setupGoogle() {
      const [rawNonce, hashedNonce] = await generateNonce();
      nonceRef.current = rawNonce;

      function initializeGoogle() {
        if (isCancelled || !buttonRef.current) return;

        /* global google */
        google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          nonce: hashedNonce,
          callback: (response) => {
            signInRef.current({
              token: response.credential,
              nonce: nonceRef.current,
            });
          },
        });

        // إفراغ الحاوية قبل إعادة الرسم لتفادي تكرار الزر عند تغيير اللغة أو الوضع الليلي
        buttonRef.current.innerHTML = "";

        google.accounts.id.renderButton(buttonRef.current, {
          theme: isDark ? "filled_black" : "outline",
          size: "large",
          shape: "rectangular",
          text: "continue_with",
          width: 340,
          locale: curLang,
        });
      }

      const existingScript = document.getElementById(GSI_SCRIPT_ID);
      const alreadyLoadedWithCorrectLocale =
        existingScript && existingScript.dataset.hl === curLang;

      if (alreadyLoadedWithCorrectLocale) {
        if (window.google?.accounts?.id) {
          initializeGoogle();
        } else {
          existingScript.addEventListener("load", initializeGoogle);
        }
      } else {
        // إزالة السكريبت القديم (المحمَّل بلغة مختلفة) وإعادة تحميله باللغة الصحيحة
        if (existingScript) existingScript.remove();

        const script = document.createElement("script");
        script.id = GSI_SCRIPT_ID;
        script.src = `https://accounts.google.com/gsi/client?hl=${curLang}`;
        script.dataset.hl = curLang;
        script.async = true;
        script.onload = initializeGoogle;
        document.body.appendChild(script);
      }
    }

    setupGoogle();

    return () => {
      isCancelled = true;
    };
  }, [isDark, curLang]);

  return { buttonRef, isLoading };
}
