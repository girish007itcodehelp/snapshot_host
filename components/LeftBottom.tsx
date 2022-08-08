import { Button, useColorModeValue, Wrap } from "@chakra-ui/react";
import React from "react";

const LeftBottom = () => {
  return (
    <Wrap
      my={3}
      bg={useColorModeValue("white", "#1f2a33")}
      borderRadius="md"
      p="15px"
      boxShadow="md"
    >
      <Button size="sm" variant="solid" borderRadius="3xl" minW="min-content">
        Top
      </Button>
      <Button size="sm" variant="solid" borderRadius="3xl" minW="min-content">
        Near you
      </Button>
      <Button size="sm" variant="solid" borderRadius="3xl" minW="min-content">
        Hot
      </Button>
      <Button size="sm" variant="solid" borderRadius="3xl" minW="min-content">
        Recommended
      </Button>
    </Wrap>
  );
};

export default LeftBottom;
