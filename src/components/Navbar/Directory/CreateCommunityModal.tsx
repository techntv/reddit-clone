import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Divider,
  Text,
  Input,
  Checkbox,
  Stack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [communityName, setCommunityName] = React.useState<string>("");
  const [charsRemaining, setCharsRemaining] = React.useState<number>(21);
  const [communityType, setCommunityType] = React.useState<string>("");

  const handleCommunityNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event?.target?.value?.length > 21) return;

    setCommunityName(e.target.value);
    setCharsRemaining(21 - e.target.value.length);
  };

  const onCommuityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommunityType(e.target.name);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose} size="lg">
        <ModalOverlay />
        <>
          <ModalContent>
            <ModalHeader
              display="flex"
              flexDirection="column"
              fontSize={15}
              padding={3}
            >
              Create a community
            </ModalHeader>
            <Box pl={3} pr={3}>
              <Divider />
              <ModalCloseButton />
              <ModalBody display="flex" flexDirection="column" padding="10px 0">
                <Text fontWeight={600} fontSize={15}>
                  Name
                </Text>
                <Text fontSize={11} color="gray.500">
                  Community names including capitalization cannot be changed.
                </Text>
                <Text
                  position="relative"
                  top="27px"
                  left="10px"
                  width="20px"
                  color="gray.400"
                >
                  /r
                </Text>
                <Input
                  position="relative"
                  value={communityName}
                  size="sm"
                  pl="25px"
                  onChange={handleCommunityNameChange}
                />
                <Text
                  fontSize="9pt"
                  color={charsRemaining === 0 ? "red" : "gray.500"}
                >
                  {charsRemaining} Characters remaining
                </Text>
                <Box mt={4} mb={4}>
                  <Text fontWeight={600} fontSize={15}>
                    Community Type
                  </Text>
                  <Stack spacing={4} mt={2}>
                    <Checkbox
                      name="public"
                      isChecked={communityType === "public"}
                      onChange={(e) => onCommuityTypeChange(e)}
                    >
                      <Flex align="center">
                        <Icon as={BsFillPersonFill} color="gray.500" mr={2} />
                        <Text fontSize="10pt" mr={1}>
                          Public
                        </Text>
                        <Text fontSize="8pt" color="gray.500" pt={1}>
                          Anyone can view, post, and comment to this community
                        </Text>
                      </Flex>
                    </Checkbox>
                    <Checkbox
                      name="restricted"
                      isChecked={communityType === "restricted"}
                      onChange={(e) => onCommuityTypeChange(e)}
                    >
                      <Flex align="center">
                        <Icon as={BsFillEyeFill} color="gray.500" mr={2} />
                        <Text fontSize="10pt" mr={1}>
                          Restricted
                        </Text>
                        <Text fontSize="8pt" color="gray.500" pt={1}>
                          Anyone can view this community, but only approved
                          users
                        </Text>
                      </Flex>
                    </Checkbox>
                    <Checkbox
                      name="private"
                      isChecked={communityType === "private"}
                      onChange={(e) => onCommuityTypeChange(e)}
                    >
                      <Flex align="center">
                        <Icon as={HiLockClosed} color="gray.500" mr={2} />
                        <Text fontSize="10pt" mr={1}>
                          Private
                        </Text>
                        <Text fontSize="8pt" color="gray.500" pt={1}>
                          Only approved users can view and submit to this
                        </Text>
                      </Flex>
                    </Checkbox>
                  </Stack>
                </Box>
              </ModalBody>
            </Box>

            <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
              <Button
                variant="outline"
                height="30px"
                mr={3}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button height="30px" variant="solid" onClick={() => {}}>
                Create Community
              </Button>
            </ModalFooter>
          </ModalContent>
        </>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
