import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

interface PersonalProp {
  personalInfo: { name: string; email: string; number: string };
  setPersonalInfo: (value: any) => void;
  onSubmit: () => void;
}

const Personal = ({
  personalInfo,
  setPersonalInfo,
  onSubmit,
}: PersonalProp) => {
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    number: false,
  });

  console.log(isError.name);

  const handleSubmit = () => {
    if (personalInfo.name === "") return setIsError({ ...isError, name: true });
    if (personalInfo.email === "")
      return setIsError({ ...isError, email: true });
    if (personalInfo.number === "")
      return setIsError({ ...isError, number: true });

    onSubmit();
  };

  return (
    <>
      <Flex
        borderRadius={{ base: "xl", lg: "none" }}
        backgroundColor={{ base: "white" }}
        paddingX={{ base: "5", lg: "0" }}
        width={{base:'',lg:'full'}}
        marginX={{ base: "5", lg: "0" }}
        boxShadow={{ base: "lg", lg: "none" }}
        direction={"column"}
        paddingTop={8}
        gap={2}
      >
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

        <FormControl marginTop={8}>
          <Flex>
            <FormLabel color={"#03295A"}>Name</FormLabel>
            <Spacer />
            {isError.name && (
              <FormHelperText color={"red"}>
                This field is required
              </FormHelperText>
            )}
          </Flex>
          <Input
            color={"#03295A"}
            type="text"
            placeholder="e.g Stephen King"
            name="name"
            value={personalInfo.name}
            onChange={(event) => {
              setPersonalInfo({ ...personalInfo, name: event.target.value });
              setIsError({
                ...isError,
                name: event.target.value === "" ? true : false,
              });
            }}
          />
        </FormControl>
        <FormControl marginTop={"5"}>
          <Flex>
            <FormLabel color={"#03295A"}>Email Address</FormLabel>
            <Spacer />
            {isError.email && (
              <FormHelperText color={"red"}>
                This field is required
              </FormHelperText>
            )}
          </Flex>
          <Input
            color={"#03295A"}
            type="email"
            placeholder="e.g stephenking@lorem.com"
            name="email"
            value={personalInfo.email}
            onChange={(event) => {
              setPersonalInfo({ ...personalInfo, email: event.target.value });
              setIsError({
                ...isError,
                email: event.target.value === "" ? true : false,
              });
            }}
          />
        </FormControl>
        <FormControl marginTop={"5"}>
          <Flex>
            <FormLabel color={"#03295A"}>Phone Number</FormLabel>
            <Spacer />
            {isError.number && (
              <FormHelperText color={"red"}>
                This field is required
              </FormHelperText>
            )}
          </Flex>
          <Input
            color={"#03295A"}
            type="text"
            placeholder="e.g +1 234 567 890"
            name="number"
            value={personalInfo.number}
            onChange={(event) => {
              setPersonalInfo({ ...personalInfo, number: event.target.value });
              setIsError({
                ...isError,
                number: event.target.value === "" ? true : false,
              });
            }}
          />
        </FormControl>
        <Box alignSelf={"end"} marginTop={{base:'10', lg:"24"}}>
          <Button
            display={{ base: "none", lg: "block" }}
            bgColor={"#03295A"}
            color={"white"}
            onClick={handleSubmit}
            size="lg"
          >
            Next Step
          </Button>
        </Box>
      </Flex>
      <Box height={20} backgroundColor={'white'} alignItems={'center'} width={'full'} display={{ base: "block", lg: "none" }} marginTop={24}>
          <Button
            marginY={'4'}
            marginLeft={'60'}
            bgColor={"#03295A"}
            color={"white"}
            onClick={handleSubmit}
            size="lg"
          >
            Next Step
          </Button>
        </Box>
    </>
  );
};

export default Personal;
