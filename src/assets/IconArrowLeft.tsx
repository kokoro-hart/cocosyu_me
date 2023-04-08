import { SVGProps } from "react";

type IconArrowLeftProps = SVGProps<SVGSVGElement> & {
  color?: string;
};
export function IconArrowLeft({ color = "#666674", ...props }: IconArrowLeftProps) {
  return (
    <svg style={{ stroke: color }} {...props} fill="none" height="10" viewBox="0 0 6 10" width="6">
      <path d="m5 9-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
