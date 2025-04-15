import Class from "./Underline.module.scss";

const Underline = ({ props, children, className }) => {
  return (
    <span {...props} className={`${Class.underline} ${className}`}>
      {children}
    </span>
  );
};

export default Underline;
