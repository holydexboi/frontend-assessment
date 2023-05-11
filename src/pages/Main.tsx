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

const Main = () => {
  const [steps, setSteps] = useState(3);
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
                <Flex direction={"row"} gap={3} onClick={() => setSteps(1)} cursor={'pointer'}>
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
                <Flex direction={"row"} gap={3} onClick={() => setSteps(2)} cursor={'pointer'}>
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
                <Flex direction={"row"} gap={3} onClick={() => setSteps(3)} cursor={'pointer'}>
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
                <Flex direction={"row"} gap={3} onClick={() => setSteps(4)} cursor={'pointer'}>
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
              {steps === 1 && <Personal />}
              {steps === 2 && <Plan />}
              {steps === 3 && <Addon />}
            </Flex>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Main;
