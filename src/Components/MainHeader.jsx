

import MainLogo from "./Assets/Fragments/MainLogo";
import Wrapper from "./Assets/Fragments/Wrapper";
import Socials from "./Assets/Socials/Socials";
import ColorMode from "./Assets/ColorMode/ColorMode";

const MainHeader = () => {


  return (
    <>
      <header className="main-header">
        <Wrapper>
          <MainLogo position="header" />

          <Socials />

          <ColorMode />
        </Wrapper>
      </header>
    </>
  );
};

export default MainHeader;
