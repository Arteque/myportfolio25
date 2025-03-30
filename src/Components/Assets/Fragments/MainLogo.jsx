import Class from './MainLogo.module.scss'

const MainLogo = ({position}) => {
  return (
    <>
        {
            position == 'header' && (
                <div className={`${Class.main_logo} ${Class.main_logo__header}`}>
                    <img src="./logo.svg" alt="Ahmed Lemssiah" />
                    <h1 className="website-title">Ahmed <span className="uppercase">Lemssiah</span></h1>
                </div>
              )
        }
        {
            position == 'footer' && (
                <div className={Class.main_logo}>
                    <img src="./logo.svg" alt="Ahmed Lemssiah" />
                    <h2 className="website-title">Ahmed <span className="uppercase">Lemssiah</span></h2>
                </div>
            )
        }
    </>
 )
}

export default MainLogo
