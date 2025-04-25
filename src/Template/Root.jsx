import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "../Context/CookiesContext";
import CookiesBanner from "../Components/Assets/CookiesBanner/CookiesBanner";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../Pages/Error";

export const Root = () => {
  return (
    <>
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
    </>
  );
};
