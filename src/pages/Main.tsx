import {
  CardBody,
  Container,
  Box,
  Card,
  Text,
  Circle,
  Flex,
} from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <Container maxW={"container.lg"} mt="10">
        <Card height={"container.sm"} padding={"-2"}>
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
                  <Circle size="35px" bg="#C0E5FA" color="#032552">
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
                  <Circle size="35px" bg="#C0E5FA" color="#032552">
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
                  <Circle size="35px" bg="#C0E5FA" color="#032552">
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
                  <Circle size="35px" bg="#C0E5FA" color="#032552">
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
              <Flex direction={'column'} paddingTop={8}>
                <Text
                  as="span"
                  fontWeight="bold"
                  color={"#032552"}
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

                
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Main;
