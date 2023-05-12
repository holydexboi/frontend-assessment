import {
  CardBody,
  Container,
  Card,
  Text,
  Circle,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import Personal from "../components/Personal";
import Plan from "../components/Plan";
import Addon from "../components/Addon";
import Summary from "../components/Summary";
import Thank from "../components/Thank";

const Main = () => {
  const [steps, setSteps] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [addon, setAddon] = useState([]);
  const [billType, setBillType] = useState("arcade");
  const [planType, setPlanType] = useState("monthly");
  const [price, setPrice] = useState(9);

  const handleNext = () => {
    setSteps((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setSteps((prev) => prev - 1);
  };

  const handlePlanChange = () => {
    const copy = planType;

    setPlanType(copy === "monthly" ? "yearly" : "monthly");

    if (billType === "arcade") {
      if (copy === "yearly") {
        setPrice(9);
      } else {
        setPrice(90);
      }
    } else if (billType === "advance") {
      if (copy === "yearly") {
        setPrice(12);
      } else {
        setPrice(120);
      }
    } else if (billType === "pro") {
      if (copy === "yearly") {
        setPrice(15);
      } else {
        setPrice(150);
      }
    }
  };

  return (
    <>
      <Container maxW={"container.lg"} mt="10">
        <Card borderTopRadius="xl" boxShadow="lg" height={"container.sm"}>
          <CardBody>
            <Flex
              height={"full"}
              width={"full"}
              backgroundImage="url('bg-sidebar-desktop.svg')"
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
                    {...(steps === 4 || steps === 5
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
                <Personal
                  personalInfo={personalInfo}
                  setPersonalInfo={setPersonalInfo}
                  onSubmit={handleNext}
                />
              )}
              {steps === 2 && (
                <Plan
                  planType={planType}
                  billType={billType}
                  onPlanChange={handlePlanChange}
                  setBillType={setBillType}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              )}
              {steps === 3 && (
                <Addon
                  planType={planType}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  addon={addon}
                  setAddon={setAddon}
                />
              )}
              {steps === 4 && (
                <Summary
                  billType={billType}
                  planType={planType}
                  price={price}
                  addon={addon}
                  setSteps={setSteps}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              )}
              {steps === 5 && <Thank />}
            </Flex>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Main;
