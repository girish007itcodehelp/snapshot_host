import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { shimmer, toBase64 } from "./Image";

type Active = boolean;

const CenterCard: React.FC = () => {
  const [show, setShow] = useState<Active>(false);
  const [active, setActive] = useState<Active>(false);

  let srcImg =
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

  return (
    <Box
      my="15px"
      boxShadow="md"
      bg={useColorModeValue("white", "#1f2a33")}
      borderRadius="md"
    >
      <Flex>
        <Box
          borderRight="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.700")}
          p="15px"
        >
          <Box>
            <Icon
              fontSize={40}
              as={AiFillCaretUp}
              color={useColorModeValue("gray.500", "gray.600")}
              // color={
              //   active ? "#766fe4" : useColorModeValue("gray.500", "gray.600")
              // }
              cursor="pointer"
              onClick={() => setActive(!active)}
            />
          </Box>
          <Flex alignItems="center" justifyContent="center">
            1
          </Flex>
          <Box>
            <Icon
              fontSize={40}
              as={AiFillCaretDown}
              color={
                !active ? "#766fe4" : useColorModeValue("gray.500", "gray.600")
              }
              cursor="pointer"
              onClick={() => setActive(!active)}
            />
          </Box>

          <Flex alignItems="center" justifyContent="center">
            <Icon
              as={FaRegCommentDots}
              color={useColorModeValue("gray.500", "gray.600")}
              fontSize={26}
            />
          </Flex>

          {/* <Box></Box> */}
        </Box>
        <Box flexGrow={1}>
          <Flex
            gap="15px"
            alignItems="center"
            borderBottom="1px solid"
            borderColor={useColorModeValue("gray.300", "gray.700")}
            p="15px"
          >
            <Avatar
              size="sm"
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />
            <Box
              flexGrow={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Box>
                  <Flex gap="15px" alignItems="center">
                    John Smith{" "}
                    <Box
                      as="span"
                      fontSize={10}
                      color={useColorModeValue("gray.400", "gray.500")}
                    >
                      3 hr ago
                    </Box>
                  </Flex>
                </Box>
                <Box
                  fontSize={12}
                  color={useColorModeValue("gray.400", "gray.500")}
                >
                  Devloper
                </Box>
              </Box>
              <Button size="sm" rounded="3xl" variant="solid">
                Join
              </Button>
            </Box>
          </Flex>
          <Box p="15px">
            <Box
              noOfLines={2}
              fontWeight={500}
              fontSize="16px"
              letterSpacing="wide"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              adipisci veritatis. A dolorum optio cum iure impedit illum
              delectus sint aut enim totam, molestias non cumque tempora.
              Distinctio, et amet.
            </Box>
          </Box>
          <Box width="100%">
            <Box height="300px" position="relative" width="100%">
              <Image
                src={srcImg}
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(100, 320)
                )}`}
              />
            </Box>
          </Box>
          <Box p="15px">
            <Box fontSize="12px" letterSpacing="wide">
              <Collapse startingHeight={39} in={show}>
                <Box noOfLines={show ? 0 : 2}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Anim pariatur cliche reprehenderit, enim
                  eiusmod high life accusamus terry richardson ad squid. Nihil
                  anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident.
                </Box>
              </Collapse>
              <Box
                position="relative"
                textAlign="center"
                // height="30px"
                py="15px"
              >
                <Button
                  size="sm"
                  onClick={() => setShow(!show)}
                  variant="solid"
                  rounded="3xl"
                >
                  Show More
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* CenterCard */}
    </Box>
  );
};

export default CenterCard;
