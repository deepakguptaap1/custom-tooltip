export type placement =
  | "top-left"
  | "top"
  | "top-right"
  | "right-top"
  | "right"
  | "right-bottom"
  | "bottom-left"
  | "bottom"
  | "bottom-right"
  | "left-top"
  | "left"
  | "left-bottom";

export interface toolTipProps {
  children: React.ReactNode;
  className?: string;
  placement?: placement;
  message: string;
  strictPosition?: boolean;
}
