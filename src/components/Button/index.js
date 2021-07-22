import "./styles.css";
import cn from "classnames";

const Button = ({ className, ...props }) => {
  return <button className={cn(className, "button")} {...props} />;
};

export default Button;
