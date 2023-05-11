import {
  CardBody,
  Card,
  Image,
  Text,
  Flex,
  Spacer,
  Button,
  Switch,
} from "@chakra-ui/react";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advanceImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";
import { useState } from "react";

const Plan = () => {
  const [planType, setPlanType] = useState("monthly");

  const handleChangePlan = () => {
    const copy = planType;

    setPlanType(copy === "monthly" ? "yearly" : "monthly");
  };
  return (
    <>
      <Flex direction={"column"} paddingTop={8} gap={2}>
        <Text as="span" fontWeight="bold" color={"#03295A"} fontSize="xx-large">
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
        {planType === "monthly" && (
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

                <Flex direction={"column"} marginTop={"12"}>
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
                <Flex direction={"column"} marginTop={"12"}>
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
                <Flex direction={"column"} marginTop={"12"}>
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
        )}{" "}
        {planType === "yearly" && (
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

                <Flex direction={"column"} marginTop={"8"}>
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
                    $90/yr
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    2 months free
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
                <Flex direction={"column"} marginTop={"8"}>
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
                    $120/yr
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    2 months free
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
                <Flex direction={"column"} marginTop={"8"}>
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
                    $150/yr
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    2 months free
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </Flex>
        )}
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
          <Text as="span" fontWeight="bold" color={"#03295A"} fontSize="large">
            Monthly
          </Text>
          <Switch
            colorScheme="facebook"
            value={planType}
            size="md"
            onChange={handleChangePlan}
          />
          <Text as="span" fontWeight="bold" color={"#C0C1C8"} fontSize="large">
            Yearly
          </Text>
        </Flex>
        <Flex direction={"row"} justify={"space-between"} marginTop={"14"}>
          <Button bgColor={"white"} color={"#C0C1C8"}>
            Go Back
          </Button>
          <Button bgColor={"#03295A"} color={"white"} size="lg">
            Next Step
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Plan;
