import MainLogo from "./Assets/Fragments/MainLogo"
import Wrapper from "./Assets/Fragments/Wrapper"
import Class from './MainFooter.module.scss'

const MainFooter = () => {
  const date = new Date().toLocaleDateString("de-DE",{year:'numeric'})
  return (
    <footer className={Class.main_footer}>
      <div className="footer_top">
        <Wrapper classname={Class.wrapper}>
          <MainLogo position="footer" />
          
          <p style={{position:'inline',marginInlineStart:'auto'}}>
            <samp>{date} with &#129505; </samp> 
          </p>
        </Wrapper>
      </div>
    </footer>
  )
}

export default MainFooter