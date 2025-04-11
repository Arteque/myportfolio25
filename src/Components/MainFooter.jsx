import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLogo from "./Assets/Fragments/MainLogo";
import Wrapper from "./Assets/Fragments/Wrapper";
import Class from "./MainFooter.module.scss";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const MainFooter = () => {
  const date = new Date().toLocaleDateString("de-DE", { year: "numeric" });
  return (
    <footer className={Class.main_footer}>
      <div className="footer_top">
        <Wrapper classname={Class.wrapper}>
          <p>
            <small>
              <samp>
             by:
              </samp>
            </small>
          </p>
          <MainLogo position="footer" />
          <p>
           <small>| <samp> <FontAwesomeIcon icon={faCalendarAlt} /> {date}</samp></small>
          </p>
        </Wrapper>
      </div>
    </footer>
  );
};

export default MainFooter;
