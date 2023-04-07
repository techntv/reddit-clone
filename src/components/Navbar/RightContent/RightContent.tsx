import AuthModal from " app/components/Modal/Auth/AuthModal";
import { auth } from " app/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import ActionIcons from "./ActionIcons";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <ActionIcons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;
