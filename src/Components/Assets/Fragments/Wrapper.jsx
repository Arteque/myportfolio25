function Wrapper({children, classname}) {
  return (
    <div className={`wrapper ${classname?classname:null}`}>
      {children}
    </div>
  )
}

export default Wrapper
