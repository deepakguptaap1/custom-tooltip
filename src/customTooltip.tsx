import { useState } from "react";
import styles from "./customTooltip.module.scss";
import { toolTipProps } from "./types";
const CustomTooltip: React.FC<toolTipProps> = ({
  children,
  className,
  placement,
  message,
  strictPosition,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleTooltip = () => {
    setIsActive((prev) => !prev);
  };

  const [spaceAround, setSpaceAround] = useState({
    top: null,
    right: null,
    bottom: null,
    left: null,
  });

  let position = null;
  if (strictPosition && placement) {
    position = styles[placement];
  } else {
    position = styles["top"];
    //calculate right position
    const { top, right, bottom, left } = spaceAround;
    // .topLeft {
    // }
    // .top {
    // }
    // .topRight {
    // }
    // .rightTop {
    // }
    // .right {
    // }
    // .rightBottom {
    // }
    // .bottomLeft {
    // }
    // .bottom {
    // }
    // .bottomRight {
    // }
    // .leftTop {
    // }
    // .left {
    // }
    // .leftBottom {
    // }
  }

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => toggleTooltip()}
      onMouseLeave={() => toggleTooltip()}
    >
      {children}
      {isActive && (
        <div
          className={`${className ? className : ""} ${
            styles.message
          } ${position}`}
        >
          {message}
        </div>
      )}
    </div>
  );
};
export default CustomTooltip;
