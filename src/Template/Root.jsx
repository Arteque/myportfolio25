import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import { useEffect, useRef } from "react";

import { useTranslation } from "react-i18next";

import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "../Context/CookiesContext";
import { ErrorBoundary } from "react-error-boundary";

import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";

import CookiesBanner from "../Components/Assets/CookiesBanner/CookiesBanner";
import Error from "../Pages/Error";
import HelmetComponent from "../Components/Assets/Helmet/Helmet";

export const Root = () => {
  //Translation
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <HelmetComponent />
      <ErrorBoundary
        FallbackComponent={Error}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <CookiesProvider>
          <CookiesBanner />
          {/* Main Header Start */}
          <MainHeader />
          {/* Main Header End */}

          {/* Main Content Start */}
          <Outlet />
          {/* Main Content End */}

          {/* Main Footer Start */}
          <MainFooter />
          {/* Main Footer End */}

          <ToastContainer />
        </CookiesProvider>
      </ErrorBoundary>
      <Analytics />
    </>
  );
};
