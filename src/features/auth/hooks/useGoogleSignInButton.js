import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { generateNonce } from "../../../utils/helpers";
import { useSigninWithGoogle } from "./useSigninWithGoogle";
import { useTranslation } from "react-i18next";

export function useGoogleSignInButton() {
  const isDark = useSelector((state) => state.general.isDark);
  const { signInWithGoogleIdTokenFn, isLoading } = useSigninWithGoogle();
  const buttonRef = useRef(null);
  const nonceRef = useRef(null);
  const signInRef = useRef(signInWithGoogleIdTokenFn);
  const { i18n } = useTranslation();
  const curLang = i18n.language;

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

        google.accounts.id.renderButton(buttonRef.current, {
          theme: isDark ? "filled_black" : "outline",
          size: "large",
          shape: "rectangular",
          text: "continue_with",
          width: 340,
          locale: curLang === "ar" ? "ar" : "en",
        });
      }

      if (window.google?.accounts?.id) {
        initializeGoogle();
      } else {
        const existingScript = document.querySelector(
          'script[src="https://accounts.google.com/gsi/client"]',
        );

        if (existingScript) {
          existingScript.addEventListener("load", initializeGoogle);
        } else {
          const script = document.createElement("script");
          script.src = "https://accounts.google.com/gsi/client";
          script.async = true;
          script.onload = initializeGoogle;
          document.body.appendChild(script);
        }
      }
    }

    setupGoogle();

    return () => {
      isCancelled = true;
    };
  }, [isDark]);

  return { buttonRef, isLoading };
}
