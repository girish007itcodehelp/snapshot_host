import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { community } from "data/communities";
import Image from "next/image";
import React from "react";
import { shimmer, toBase64 } from "./Image";

const RightCard: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue("white", "#1f2a33")}
      boxShadow="md"
      borderRadius="md"
      overflow="hidden"
    >
      <Box position="relative" width="100%">
        <Box
          width="100%"
          _before={{
            content: `''`,
            width: "100%",
            height: "75px",
            background:
              "linear-gradient(360deg,#070707 20%,rgba(0,39,51,0) 80%)",
            position: "absolute",
            zIndex: "9",
            bottom: "0",
          }}
        >
          {/* <Img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            objectFit="cover"
            height="100px"
            width="320px"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(100, 320)
            )}`}
          /> */}
          <Box width="100%" height="150px" position="relative">
            <Image
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 320)
              )}`}
            />
          </Box>

          <Box
            position="absolute"
            bottom="0"
            color="white"
            zIndex={11}
            padding="15px"
            width="full"
          >
            Top People
          </Box>
        </Box>
      </Box>

      <Box>
        {community &&
          community.slice(0, 4).map((item, i) => (
            <Box
              key={i}
              _hover={{
                bg: useColorModeValue("blackAlpha.100", "gray.700"),
              }}
            >
              <Flex alignItems="center" justifyContent="space-between" p="15px">
                <>
                  <Box>{item?.name}</Box>
                  <Button variant="solid" borderRadius="3xl" size="sm">
                    Join
                  </Button>
                </>
              </Flex>
            </Box>
          ))}
        <Box my={3} textAlign="center">
          <Button borderRadius="3xl" size="sm" variant="solid">
            Show More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RightCard;
