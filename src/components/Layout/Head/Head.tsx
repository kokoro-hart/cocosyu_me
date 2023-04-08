import { default as NextHead } from "next/head";

type HeadProps = {
  url: string;
  title: string;
  description: string;
  ogImage: string;
};
export function Head({ url, title, description, ogImage }: HeadProps) {
  const defaultImage = "https://placehold.jp/1200x630.png";
  return (
    <NextHead>
      <title key="title">{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="description" content={description} key="description" />
      <meta name="og:url" property="og:url" content={url} key="og:url" />
      <meta name="og:title" property="og:title" content={title} key="og:title" />
      <meta
        name="og:description"
        property="og:description"
        content={description}
        key="og:description"
      />
      {/* TODO: defaultImageはダミー画像なので差し替える */}
      <meta name="og:image" property="og:image" content={ogImage || defaultImage} key="og:image" />
      <link rel="canonical" href={url} />
      <meta name="twitter:description" content={description} />
    </NextHead>
  );
}
