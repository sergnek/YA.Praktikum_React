import "./styles.css";

import cn from "classnames";

const Card = ({ imgSrc, alt, title, className, ...props }) => {
  return (
    <li className={cn("card", className)} {...props}>
      <div className="card__img-wrapper">
        <img className="card__img" src={imgSrc} alt={alt} />
      </div>
      <p>{title}</p>
    </li>
  );
};

export default Card;
