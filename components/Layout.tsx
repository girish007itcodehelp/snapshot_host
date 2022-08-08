import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
