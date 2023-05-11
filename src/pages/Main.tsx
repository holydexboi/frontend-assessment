import {
  CardBody,
  Container,
  Box,
  Card,
  Image,
  Text,
  Circle,
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Input,
  Button,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advanceImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";

const Main = () => {
  const [steps, setSteps] = useState(2);
  return (
    <>
      <Container maxW={"container.lg"} mt="10">
        <Card borderTopRadius="xl" boxShadow="lg" height={"container.sm"}>
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
                  <Circle
                    {...(steps === 1
                      ? { size: "35px", bg: "#C0E5FA", color: "#03295A" }
                      : {
                          size: "35px",
                          border: "1px",
                          borderColor: "#C0E5FA",
                          color: "white",
                        })}
                  >
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
                  <Circle
                    {...(steps === 2
                      ? { size: "35px", bg: "#C0E5FA", color: "#03295A" }
                      : {
                          size: "35px",
                          border: "1px",
                          borderColor: "#C0E5FA",
                          color: "white",
                        })}
                  >
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
                  <Circle
                    {...(steps === 3
                      ? { size: "35px", bg: "#C0E5FA", color: "#03295A" }
                      : {
                          size: "35px",
                          border: "1px",
                          borderColor: "#C0E5FA",
                          color: "white",
                        })}
                  >
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
                  <Circle
                    {...(steps === 4
                      ? { size: "35px", bg: "#C0E5FA", color: "#03295A" }
                      : {
                          size: "35px",
                          border: "1px",
                          borderColor: "#C0E5FA",
                          color: "white",
                        })}
                  >
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
              {steps === 1 && (
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
                  <FormControl marginTop={"5"}>
                    <FormLabel color={"#03295A"}>Email Address</FormLabel>
                    <Input
                      color={"#C0C1C8"}
                      type="email"
                      placeholder="e.g stephenking@lorem.com"
                    />
                  </FormControl>
                  <FormControl marginTop={"5"}>
                    <FormLabel color={"#03295A"}>Phone Number</FormLabel>
                    <Input
                      color={"#C0C1C8"}
                      type="text"
                      placeholder="e.g +1 234 567 890"
                    />
                  </FormControl>
                  <Box alignSelf={"end"} marginTop={"24"}>
                    <Button bgColor={"#03295A"} color={"white"} size="lg">
                      Next Step
                    </Button>
                  </Box>
                </Flex>
              )}
              {steps === 2 && (
                <Flex direction={"column"} paddingTop={8} gap={2}>
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={"#03295A"}
                    fontSize="xx-large"
                  >
                    Select your plan
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#C0C1C8"}
                    fontSize="medium"
                  >
                    You have the option of monthly or yearly billing.
                  </Text>
                  <Flex justify={"space-between"} mt={8} gap={5}>
                    <Card
                      border={"1px"}
                      borderColor={"#6B46C1"}
                      boxShadow={"md"}
                      rounded={"md"}
                      bgColor={"#F8F9FE"}
                      height={"48"}
                      width={"44"}
                    >
                      <CardBody>
                        <Image src={arcadeImg} h={"50px"} alt="Arcade image" />

                        <Flex direction={"column"} marginTop={"16"}>
                          <Text
                            as="span"
                            fontWeight="bold"
                            color={"#03295A"}
                            fontSize="large"
                          >
                            Arcade
                          </Text>
                          <Text
                            as="span"
                            fontWeight="semibold"
                            color={"#C0C1C8"}
                            fontSize="medium"
                          >
                            $9/mo
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>
                    <Card
                      border={"1px"}
                      borderColor={"#6B46C1"}
                      boxShadow={"md"}
                      rounded={"md"}
                      height={"48"}
                      width={"44"}
                    >
                      <CardBody>
                        <Image src={advanceImg} h={"50px"} alt="Arcade image" />
                        <Spacer />
                        <Flex direction={"column"} marginTop={"16"}>
                          <Text
                            as="span"
                            fontWeight="bold"
                            color={"#03295A"}
                            fontSize="large"
                          >
                            Advanced
                          </Text>
                          <Text
                            as="span"
                            fontWeight="semibold"
                            color={"#C0C1C8"}
                            fontSize="medium"
                          >
                            $12/mo
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>
                    <Card
                      border={"1px"}
                      borderColor={"#6B46C1"}
                      boxShadow={"md"}
                      rounded={"md"}
                      height={"48"}
                      width={"44"}
                    >
                      <CardBody>
                        <Image src={proImg} h={"50px"} alt="Arcade image" />
                        <Spacer />
                        <Flex direction={"column"} marginTop={"16"}>
                          <Text
                            as="span"
                            fontWeight="bold"
                            color={"#03295A"}
                            fontSize="large"
                          >
                            Pro
                          </Text>
                          <Text
                            as="span"
                            fontWeight="semibold"
                            color={"#C0C1C8"}
                            fontSize="medium"
                          >
                            $15/mo
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>
                  </Flex>
                  <Flex
                    height={"14"}
                    width={"full"}
                    bgColor={"#F8F9FE"}
                    rounded={"lg"}
                    marginTop={"10"}
                    gap={7}
                    align={"center"}
                    justify={"center"}
                  >
                    <Text
                      as="span"
                      fontWeight="bold"
                      color={"#03295A"}
                      fontSize="large"
                    >
                      Monthly
                    </Text>
                    <Switch colorScheme="facebook" size="md" />
                    <Text
                      as="span"
                      fontWeight="bold"
                      color={"#C0C1C8"}
                      fontSize="large"
                    >
                      Yearly
                    </Text>
                  </Flex>
                  <Flex
                    direction={"row"}
                    justify={"space-between"}
                    marginTop={"14"}
                  >
                    <Button bgColor={"white"} color={"#C0C1C8"}>
                      Go Back
                    </Button>
                    <Button bgColor={"#03295A"} color={"white"} size="lg">
                      Next Step
                    </Button>
                  </Flex>
                </Flex>
              )}
            </Flex>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Main;
