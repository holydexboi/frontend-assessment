import {
  CardBody,
  Container,
  Box,
  Card,
  Text,
  Circle,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Button,
} from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <Container centerContent maxW={"container.lg"} mt="10">
        <Card>
          <CardBody>
            <Flex
              height={"full"}
              width={"full"}
              backgroundImage="url('src/assets/images/bg-sidebar-desktop.svg')"
              backgroundRepeat="no-repeat"
              gap={40}
            >
              <Flex direction={"column"} pt={"10"} px={"8"} gap={5}>
                <Flex direction={"row"} gap={3}>
                  <Circle size="35px" bg="#C0E5FA" color="#03295A">
                    <Text as="span" fontWeight="bold" fontSize="md">
                      1
                    </Text>
                  </Circle>
                  <Flex direction={"column"} color={"white"}>
                    <Text as="span" fontWeight="normal" fontSize="small">
                      STEP 1
                    </Text>
                    <Text as="span" fontWeight="bold" fontSize="small">
                      YOUR INFO
                    </Text>
                  </Flex>
                </Flex>
                <Flex direction={"row"} gap={3}>
                  <Circle size="35px" border={'1px'} borderColor={'#C0E5FA'} color="white">
                    <Text as="span" fontWeight="bold" fontSize="md">
                      2
                    </Text>
                  </Circle>
                  <Flex direction={"column"} color={"white"}>
                    <Text as="span" fontWeight="normal" fontSize="small">
                      STEP 2
                    </Text>
                    <Text as="span" fontWeight="bold" fontSize="small">
                      SELECT PLAN
                    </Text>
                  </Flex>
                </Flex>
                <Flex direction={"row"} gap={3}>
                  <Circle size="35px" bg="#C0E5FA" color="#03295A">
                    <Text as="span" fontWeight="bold" fontSize="md">
                      3
                    </Text>
                  </Circle>
                  <Flex direction={"column"} color={"white"}>
                    <Text as="span" fontWeight="normal" fontSize="small">
                      STEP 3
                    </Text>
                    <Text as="span" fontWeight="bold" fontSize="small">
                      ADD-ONS
                    </Text>
                  </Flex>
                </Flex>
                <Flex direction={"row"} gap={3}>
                  <Circle size="35px" bg="#C0E5FA" color="#03295A">
                    <Text as="span" fontWeight="bold" fontSize="md">
                      4
                    </Text>
                  </Circle>
                  <Flex direction={"column"} color={"white"}>
                    <Text as="span" fontWeight="normal" fontSize="small">
                      STEP 4
                    </Text>
                    <Text as="span" fontWeight="bold" fontSize="small">
                      SUMMARY
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction={"column"} paddingTop={8} gap={2}>
                <Text
                  as="span"
                  fontWeight="bold"
                  color={"#03295A"}
                  fontSize="xx-large"
                >
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
                  <FormLabel color={"#03295A"}>Name</FormLabel>
                  <Input
                    color={"#C0C1C8"}
                    type="text"
                    placeholder="e.g Stephen King"
                  />
                </FormControl>
                <FormControl marginTop={'5'}>
                  <FormLabel color={"#03295A"}>Email Address</FormLabel>
                  <Input
                    color={"#C0C1C8"}
                    type="email"
                    placeholder="e.g stephenking@lorem.com"
                  />
                </FormControl>
                <FormControl marginTop={'5'}>
                  <FormLabel color={"#03295A"}>Phone Number</FormLabel>
                  <Input
                    color={"#C0C1C8"}
                    type="text"
                    placeholder="e.g +1 234 567 890"
                  />
                </FormControl>
                <Box alignSelf={'end'} marginTop={'24'}>
                  <Button bgColor={"#03295A"} color={"white"} size="lg">
                    Next Step
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Main;
