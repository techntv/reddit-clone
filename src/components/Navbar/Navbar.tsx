import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div>
      <Flex bg="white" height="44px" padding="6px 12px">
        <Flex>
          <Image src="/images/redditFace.svg" height="30px" alt="reddit-face" />
          <Image
            src="/images/redditText.svg"
            alt="reddit-text"
            height="40px"
            display={{
              base: "none",
              md: "unset",
            }}
          />
        </Flex>
        {/* <Directory />
        <SearchInput />
        <RightContent /> */}
      </Flex>
    </div>
  );
};
export default Navbar;
