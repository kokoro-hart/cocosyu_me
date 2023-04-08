import { SVGProps } from "react";

type IconSeparateWindowProps = SVGProps<SVGSVGElement> & {
  color?: string;
};
export function IconSeparateWindow({ color = "#666674", ...props }: IconSeparateWindowProps) {
  return (
    <svg
      style={{ stroke: color }}
      {...props}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
    >
      <clipPath id="a">
        <path d="m0 .5h16v16h-16z" />
      </clipPath>
      <g clipPath="url(#a)" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.33341 5.1665h-3.33333c-.35362 0-.69276.14048-.94281.39053s-.39052.58919-.39052.94281v5.99996c0 .3537.14047.6928.39052.9428.25005.2501.58919.3906.94281.3906h6.00002c.3536 0 .6927-.1405.9428-.3906.25-.25.3905-.5891.3905-.9428v-3.3333" />
        <path d="m6.66675 9.83317 6.66665-6.66667" />
        <path d="m10 3.1665h3.3333v3.33334" />
      </g>
    </svg>
  );
}
