import { auth } from " app/firebase/clientApp";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FIREBASE_ERROR_CODES } from " app/firebase/errors";

const OAuthButtons = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/images/googlelogo.png"
          height="20px"
          alt="google logo"
          mr={4}
        />
        Continue with Google
      </Button>
      <Button variant="oauth">Continue with Providers</Button>
      {error && (
        <Text textAlign="center" color="red.500" fontSize="9pt">
          {
            FIREBASE_ERROR_CODES[
              error.message as keyof typeof FIREBASE_ERROR_CODES
            ]
          }
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
