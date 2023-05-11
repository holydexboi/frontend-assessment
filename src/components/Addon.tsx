import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Addon = () => {
  return (
    <>
      <Flex direction={"column"} paddingTop={8} gap={2}>
        <Text as="span" fontWeight="bold" color={"#03295A"} fontSize="xx-large">
          Personal info
        </Text>
        <Text
          as="span"
          fontWeight="semibold"
          color={"#C0C1C8"}
          fontSize="medium"
        >
          Please provide your name, email address, and phone number.
        </Text>
      </Flex>
    </>
  );
};

export default Addon;
