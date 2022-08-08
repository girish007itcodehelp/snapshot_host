import {
  Avatar,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { setLogout } from "redux/slices/authSlice";
import { useDispatch } from "react-redux";

interface Props {
  user: any;
}

const ProfileMenu = (props: Props) => {
  const dispatch = useDispatch();
  const { user } = props;
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="pink"
        // _hover={{ bg: useColorModeValue("gray.100", "#223544") }}
        // py="15px"
      >
        <WrapItem
          transition="all 300ms cubic-bezier(0.175, 0.745, 0.425, 1.11),transform 300ms cubic-bezier(0.175, 0.745, 0.425, 1.11),visibility 300ms cubic-bezier(0.175, 0.745, 0.425, 1.11)"
          _hover={{ bg: useColorModeValue("gray.100", "#223544") }}
          borderRadius="md"
          p="0 15px"
          alignItems="center"
          gap="15px"
        >
          <Avatar name={user?.displayName || "John Doe"} src={user?.photoURL} />{" "}
          <Text
            // fontWeight="bold"
            color="gray.500"
            display="flex"
            alignItems="center"
            gap="15px"
          >
            {user?.displayName || "John Doe"} <Icon as={FiChevronDown} />
          </Text>
        </WrapItem>
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            signOut(auth);
            dispatch(
              setLogout({
                isAuthenticated: false,
                loading: false,
                user: {},
              })
            );
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
