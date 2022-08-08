import React from "react";
import NextImage from "next/image";
import { Box, chakra, ImageProps } from "@chakra-ui/react";

const Img = (props: ImageProps | any) => {
  const Image = chakra(NextImage, {
    shouldForwardProp: (prop) =>
      [
        "width",
        "height",
        "src",
        "alt",
        "quality",
        "placeholder",
        "blurDataURL",
        "loader ",
      ].includes(prop),
  });
  return (
    <Box width="100%" height="100%" position="relative">
      <Image
        {...props}
        layout="fill"
        placeholder="blur"
        height="100%"
        width="100%"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(100, 320))}`}
      />
    </Box>
  );
};

export default React.memo(Img);

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
