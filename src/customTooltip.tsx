import { useEffect, useRef, useState } from "react";
import styles from "./customTooltip.module.scss";
import { SpaceAroundProps, toolTipProps } from "./types";
const CustomTooltip: React.FC<toolTipProps> = ({
  children,
  className,
  placement = "",
  message,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("");
  const baseRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const toggleTooltip = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (baseRef?.current && tooltipRef?.current && isActive) {
      const tooltip = tooltipRef?.current?.getBoundingClientRect();
      const base = baseRef?.current?.getBoundingClientRect();
      setBestPosition(base, tooltip);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const setBestPosition = (base: DOMRect, tooltip: DOMRect) => {
    const spaceAround: SpaceAroundProps = {
      top: base.top,
      right: window.innerWidth - base.right,
      bottom: window.innerHeight - base.bottom,
      left: base.left,
      baseWidth: base.width,
      baseHeight: base.height,
      tooltipWidth: tooltip.width,
      tooltipHeight: tooltip.height,
    };
    const bestPostion = findTheBestPosition(spaceAround);
    setPosition(styles[bestPostion || placement]);
  };

  const findTheBestPosition = (spaceAround: SpaceAroundProps) => {
    const {
      top,
      right,
      bottom,
      left,
      baseWidth,
      baseHeight,
      tooltipWidth,
      tooltipHeight,
    } = spaceAround;
    const arrow = 10;
    let bestPosition = "";
    let isTop = tooltipHeight + arrow < top;
    let isBaseGtTooltip = baseWidth - tooltipWidth > 0;
    let diff = tooltipWidth - baseWidth;
    const isLeftRight = diff / 2 < left && diff / 2 < right;
    let isRight = diff < right;
    let isLeft = diff < left;
    let isBottom = tooltipHeight + arrow < bottom;
    //top Center
    if (isTop && (isBaseGtTooltip || isLeftRight)) {
      if (placement === "top-center") return placement;
      bestPosition = "top-center";
    }
    //top Left
    if (isTop && (isBaseGtTooltip || isRight)) {
      if (placement === "top-left") return placement;
      bestPosition = "top-left";
    }
    //top Right
    if (isTop && (isBaseGtTooltip || isLeft)) {
      if (placement === "top-right") return placement;
      bestPosition = "top-right";
    }

    //bottom Center
    if (isBottom && (isBaseGtTooltip || isLeftRight)) {
      if (placement === "bottom-center") return placement;
      bestPosition = "bottom-center";
    }
    //bottom Left
    if (isBottom && (isBaseGtTooltip || isRight)) {
      if (placement === "bottom-left") return placement;
      bestPosition = "bottom-left";
    }
    //bottom Right
    if (isBottom && (isBaseGtTooltip || isLeft)) {
      if (placement === "bottom-right") return placement;
      bestPosition = "bottom-right";
    }

    isLeft = tooltipWidth < left;
    isBaseGtTooltip = baseWidth > tooltipWidth;
    diff = tooltipHeight - baseHeight;
    const isTopBottom = diff / 2 < top && diff / 2 < bottom;
    isBottom = diff < bottom;
    isTop = diff < top;
    isRight = tooltipWidth < right;
    //left Center
    if (isLeft && (isBaseGtTooltip || isTopBottom)) {
      if (placement === "left-center") return placement;
      bestPosition = "left-center";
    }
    //left Top
    if (isLeft && (isBaseGtTooltip || isBottom)) {
      if (placement === "left-top") return placement;
      bestPosition = "left-top";
    }
    //left Bottom
    if (isLeft && (isBaseGtTooltip || isTop)) {
      if (placement === "left-bottom") return placement;
      bestPosition = "left-bottom";
    }

    //right Center
    if (isRight && (isBaseGtTooltip || isTopBottom)) {
      if (placement === "right-center") return placement;
      bestPosition = "right-center";
    }
    //right Top
    if (isRight && (isBaseGtTooltip || isBottom)) {
      if (placement === "right-top") return placement;
      bestPosition = "right-top";
    }
    //right Bottom
    if (isRight && (isBaseGtTooltip || isTop)) {
      if (placement === "right-bottom") return placement;
      bestPosition = "right-bottom";
    }
    return bestPosition;
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => toggleTooltip()}
      onMouseLeave={() => toggleTooltip()}
    >
      <div ref={baseRef}>{children}</div>
      {isActive && (
        <div
          className={`${className ? className : ""} ${
            styles.message
          } ${position}`}
          ref={tooltipRef}
        >
          {message}
        </div>
      )}
    </div>
  );
};
export default CustomTooltip;
