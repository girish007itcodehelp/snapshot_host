import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiPlusSm } from "react-icons/hi";
import { FaUpload } from "react-icons/fa";
import NewPost from "./NewPost";

const TopCard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("white", "#1f2a33")}
      boxShadow="md"
      borderRadius="md"
      width="full"
    >
      <Flex
        p="15px"
        gap="15px"
        // borderBottom={"1px solid "}
        // borderColor={useColorModeValue("gray.300", "gray.700")}
      >
        <Button
          leftIcon={<HiPlusSm />}
          borderRadius="3xl"
          variant="solid"
          onClick={onOpen}
        >
          New
        </Button>
        <Button leftIcon={<FiChevronDown />} borderRadius="3xl" variant="solid">
          Filter
        </Button>
        <Button leftIcon={<FaUpload />} borderRadius="3xl" variant="solid">
          Upload
        </Button>
      </Flex>
      <NewPost isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default TopCard;
