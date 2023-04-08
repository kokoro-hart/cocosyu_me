import "ress";

import "../src/styles/style.scss";
import Image from 'next/image';
import { RouterContext } from "next/dist/shared/lib/router-context";

Image.propTypes = {
  unoptimized: null,
};

Image.defaultProps = {
  unoptimized: true,
};
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};