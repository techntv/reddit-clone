import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <div>
      <Flex bg="white" height="44px" padding="6px 12px">
        <Flex align="center">
          <Image src="/images/redditFace.svg" height="30px" alt="reddit-face" />
          <Image
            src="/images/redditText.svg"
            alt="reddit-text"
            height="46px"
            display={{
              base: "none",
              md: "unset",
            }}
          />
        </Flex>
        <SearchInput />

        {/* <Directory /> */}
        <RightContent />
      </Flex>
    </div>
  );
};
export default Navbar;
