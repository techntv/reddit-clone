import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React from "react";
import CreateCommunityModal from "./CreateCommunityModal";
import { GrAdd } from "react-icons/gr";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100" }}
        onClick={() => setOpen(true)}
      >
        <Flex>
          <Icon as={GrAdd} mr={2} fontSize={20} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
