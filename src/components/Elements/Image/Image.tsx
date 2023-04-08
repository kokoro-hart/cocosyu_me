import { default as NextImage, ImageProps as NextImageProps } from "next/image";

type ImageProps = NextImageProps & {
  width: number;
  height: number;
};

export function Image(props: ImageProps) {
  return <NextImage {...props} />;
}
