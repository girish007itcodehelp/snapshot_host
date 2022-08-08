import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { communityKeys } from "data/communities";

type Props = {};

const RightBottomCard = (props: Props) => {
  return (
    <Box
      bg={useColorModeValue("white", "#1f2a33")}
      boxShadow="md"
      borderRadius="md"
      overflow="hidden"
      my={3}
    >
      <Box>
        <Accordion allowToggle>
          {communityKeys &&
            communityKeys.map((item, i) => (
              <AccordionItem key={i}>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "#766fe4", color: "white" }}
                  >
                    <Box flex="1" textAlign="left">
                      {item?.communityName}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Wrap>
                    {item?.keys &&
                      item.keys.map((key, ind) => (
                        <Button
                          variant="solid"
                          key={ind}
                          borderRadius="3xl"
                          size="sm"
                        >
                          {key.name}
                        </Button>
                      ))}
                  </Wrap>
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default RightBottomCard;
