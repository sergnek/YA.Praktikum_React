import "./styles.css";
import cn from "classnames";

const Input = ({ className, ...props }) => {
  return <input className={cn(className, "input")} {...props} />;
};

export default Input;
