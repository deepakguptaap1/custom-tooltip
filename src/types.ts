export type placement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "right-top"
  | "right-center"
  | "right-bottom"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "left-top"
  | "left-cente"
  | "left-bottom";

export interface toolTipProps {
  children: React.ReactNode;
  className?: string;
  placement?: placement;
  message: string;
}

export interface SpaceAroundProps {
  top: number;
  right: number;
  bottom: number;
  left: number;
  baseWidth: number;
  baseHeight: number;
  tooltipWidth: number;
  tooltipHeight: number;
}
