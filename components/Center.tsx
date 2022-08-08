import { Box } from "@chakra-ui/react";
import React from "react";
import CenterCard from "./CenterCard";

const Center = () => {
  return (
    <Box>
      {[1, 2, 3, 4, 5].map((item, i) => (
        <CenterCard key={i} />
      ))}
    </Box>
  );
};

export default Center;
