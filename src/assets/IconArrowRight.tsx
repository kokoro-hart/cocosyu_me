import { SVGProps } from "react";

type IconArrowRightProps = SVGProps<SVGSVGElement> & {
  color?: string;
};
export function IconArrowRight({ color = "#666674", ...props }: IconArrowRightProps) {
  return (
    <svg style={{ stroke: color }} {...props} fill="none" height="10" viewBox="0 0 6 10" width="6">
      <path d="m1 9 4-4-4-4" strokeLinecap="round" stroke-linejoin="round" />
    </svg>
  );
}
