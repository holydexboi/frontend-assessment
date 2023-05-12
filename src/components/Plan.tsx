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

interface PlanProps {
  billType: String;
  planType: String;
  onPlanChange: () => void;
  setBillType: (value: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Plan = ({
  planType,
  billType,
  setBillType,
  onPlanChange,
  onPrevious,
  onNext,
}: PlanProps) => {
  return (
    <>
      <Flex
        borderRadius={{ base: "xl", lg: "none" }}
        backgroundColor={{ base: "white" }}
        paddingX={{ base: "5", lg: "0" }}
        width={{ base: "", lg: "full" }}
        marginX={{ base: "5", lg: "0" }}
        boxShadow={{ base: "lg", lg: "none" }}
        direction={"column"}
        paddingTop={8}
        gap={2}
      >
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

        <Flex direction={{base:'column', lg:'row'}} justify={"space-between"} mt={8} gap={5}>
          <Card
            {...(billType === "arcade"
              ? { border: "1px", borderColor: "#6B46C1", bgColor: "#F8F9FE" }
              : { border: "0px" })}
            boxShadow={"md"}
            rounded={"md"}
            height={{base:"28", lg:"48"}}
            width={{base:"", lg:"44"}}
            cursor={"pointer"}
            onClick={() => setBillType("arcade")}
          >
            <CardBody display={{base:'flex', lg:'unset'}}>
              <Image src={arcadeImg} h={"50px"} alt="Arcade image" />

              <Flex direction={"column"} marginLeft={{base:'8', lg:'0'}} marginTop={{base:"2", lg:"8"}}>
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
                  {planType === "yearly" ? "$90/yr" : "$9/mo"}
                </Text>
                {planType === "yearly" && (
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    2 months free
                  </Text>
                )}
              </Flex>
            </CardBody>
          </Card>
          <Card
            {...(billType === "advance"
              ? { border: "1px", borderColor: "#6B46C1", bgColor: "#F8F9FE" }
              : { border: "0px" })}
            boxShadow={"md"}
            rounded={"md"}
            height={{base:"28", lg:"48"}}
            width={{base:"", lg:"44"}}
            cursor={"pointer"}
            onClick={() => setBillType("advance")}
          >
            <CardBody display={{base:'flex', lg:'unset'}}>
              <Image src={advanceImg} h={"50px"} alt="Advance image" />
              <Spacer />
              <Flex direction={"column"} marginLeft={{base:'8', lg:'0'}} marginTop={{base:"2", lg:"8"}}>
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
                  {planType === "yearly" ? "$120/yr" : "$12/mo"}
                </Text>
                {planType === "yearly" && (
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    2 months free
                  </Text>
                )}
              </Flex>
            </CardBody>
          </Card>
          <Card
            {...(billType === "pro"
              ? { border: "1px", borderColor: "#6B46C1", bgColor: "#F8F9FE" }
              : { border: "0px" })}
            boxShadow={"md"}
            rounded={"md"}
            height={{base:"28", lg:"48"}}
            width={{base:"", lg:"44"}}
            cursor={"pointer"}
            onClick={() => setBillType("pro")}
          >
            <CardBody display={{base:'flex', lg:'unset'}}>
              <Image src={proImg} h={"50px"} alt="Pro image" />
              <Spacer />
              <Flex direction={"column"} marginLeft={{base:'8', lg:'0'}} marginTop={{base:"2", lg:"8"}}>
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
                  {planType === "yearly" ? "$150/yr" : "$15/mo"}
                </Text>
                {planType === "yearly" && (
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    2 months free
                  </Text>
                )}
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
            {...(planType === "monthly"
              ? { color: "#03295A" }
              : { color: "#C0C1C8" })}
            fontSize="large"
          >
            Monthly
          </Text>
          <Switch
            colorScheme="facebook"
            isChecked={planType === "yearly"}
            size="md"
            onChange={onPlanChange}
          />
          <Text
            as="span"
            fontWeight="bold"
            {...(planType === "yearly"
              ? { color: "#03295A" }
              : { color: "#C0C1C8" })}
            fontSize="large"
          >
            Yearly
          </Text>
        </Flex>
        <Flex direction={"row"} justify={"space-between"} marginTop={"14"}>
          <Button bgColor={"white"} onClick={onPrevious} color={"#C0C1C8"}>
            Go Back
          </Button>
          <Button
            bgColor={"#03295A"}
            onClick={onNext}
            color={"white"}
            size="lg"
          >
            Next Step
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Plan;
