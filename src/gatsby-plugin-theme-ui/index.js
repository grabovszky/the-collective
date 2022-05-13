import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme, {
  initialColorModeName: `light`,
  config: {
    useCustomProperties: true,
  },
  colors: {
    primary: `#E2007A`,
    primaryLight: `#53284F`,
    //secondary: tailwind.colors.indigo[6],
    //heading: tailwind.colors.black,
    //background: tailwind.colors.white,
    //text: tailwind.colors.gray[9],
    textMuted: `#46505f`,
    textMutedLight: `#a0aab8`,
  },
  sidebar: {
    normal: `320px`,
    wide: `375px`,
  },
  fonts: {
    body: `"Work Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
    },
    a: {
      transition: `all 0.3s ease-in-out`,
      color: `black`,
      textDecoration: `none`,
      "&:hover, &:focus": {
        color: `primary`,
        textDecoration: `none`,
      },
    },
    p: {
      fontSize: 1,
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      img: {
        maxWidth: `100%`,
      },
      a: {
        color: `primary`,
        "&:hover, &:focus": {
          textDecoration: `underline`,
        },
      },
    },
    h1: {
      variant: `text.heading`,
      fontSize: [5, 5, 5, 5, 6],
      mt: 2,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [4, 4, 4, 4, 5],
      mt: 2,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [3, 3, 3, 3, 4],
      mt: 3,
    },
    h4: {
      variant: `text.heading`,
      fontSize: [2, 2, 2, 2, 3],
    },
    h5: {
      variant: `text.heading`,
      fontSize: [1, 1, 1, 1, 2],
    },
    h6: {
      variant: `text.heading`,
      fontSize: 1,
      mb: 2,
    },
  },
});

export default theme
