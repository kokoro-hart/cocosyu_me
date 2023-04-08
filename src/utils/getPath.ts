const getPath = {
  home: "/",
  about: "/about",
  notFound: "/404",
  contact: "/contact",
  tagArticles(tagSlug: string) {
    return `/tag/${tagSlug}`;
  },
};
export default getPath;
