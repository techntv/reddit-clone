import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="tel"
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{ borderColor: "blue.500", bg: "white", border: "1px solid" }}
          _focus={{
            borderColor: "blue.500",
            outline: "none",
            border: "1px solid",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
