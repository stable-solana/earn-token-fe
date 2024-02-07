import localFont from "@next/font/local";

export const appFont = localFont({
  src: [
    {
      path: "../assets/FONTS/AnonymousPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/FONTS/AnonymousPro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/FONTS/AnonymousPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/FONTS/AnonymousPro-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});
