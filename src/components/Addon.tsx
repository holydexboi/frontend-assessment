import { Text, Flex, Button, Checkbox, Spacer } from "@chakra-ui/react";
import { useState } from "react";

const Addon = () => {
  const [planType, ] = useState("yearly");

  return (
    <>
      <Flex direction={"column"} paddingTop={8} gap={3}>
        <Text as="span" fontWeight="bold" color={"#03295A"} fontSize="xx-large">
          Pick add-ons
        </Text>
        <Text
          as="span"
          marginTop={"-4"}
          fontWeight="semibold"
          color={"#C0C1C8"}
          fontSize="medium"
        >
          Add-ons help enhance your gaming experience.
        </Text>

        {planType === "monthly" && (
          <>
            <Flex
              height={20}
              width={"md"}
              p={5}
              marginTop={4}
              border="1px"
              borderColor="purple.400"
              rounded={"md"}
              direction={["column", "row"]}
            >
              <Checkbox size="sm" colorScheme="purple">
                <Flex padding={5} direction={"column"}>
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    Online service
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#C0C1C8"}
                    fontSize="small"
                  >
                    Access to multiplayer games
                  </Text>
                </Flex>
              </Checkbox>
              <Spacer />
              <Text
                as="span"
                fontWeight="semibold"
                color={"purple.400"}
                fontSize="small"
              >
                +$1/mo
              </Text>
            </Flex>
            <Flex
              height={20}
              width={"md"}
              p={5}
              border="1px"
              borderColor="purple.400"
              rounded={"md"}
              direction={["column", "row"]}
            >
              <Checkbox size="sm" colorScheme="purple">
                <Flex padding={5} direction={"column"}>
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    Larger storage
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#C0C1C8"}
                    fontSize="small"
                  >
                    Extra 1TB of cloud save
                  </Text>
                </Flex>
              </Checkbox>
              <Spacer />
              <Text
                as="span"
                fontWeight="semibold"
                color={"purple.400"}
                fontSize="small"
              >
                +$2/mo
              </Text>
            </Flex>
            <Flex
              height={20}
              width={"md"}
              p={5}
              border="1px"
              borderColor="purple.400"
              rounded={"md"}
              direction={["column", "row"]}
            >
              <Checkbox size="sm" colorScheme="purple">
                <Flex padding={5} direction={"column"}>
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    Customizable profile
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#C0C1C8"}
                    fontSize="small"
                  >
                    Custom theme on your profile
                  </Text>
                </Flex>
              </Checkbox>
              <Spacer />
              <Text
                as="span"
                fontWeight="semibold"
                color={"purple.400"}
                fontSize="small"
              >
                +$2/mo
              </Text>
            </Flex>
          </>
        )}

        {planType === "yearly" && (
          <>
            <Flex
              height={20}
              width={"md"}
              p={5}
              marginTop={4}
              border="1px"
              borderColor="purple.400"
              rounded={"md"}
              direction={["column", "row"]}
            >
              <Checkbox size="sm" colorScheme="purple">
                <Flex padding={5} direction={"column"}>
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    Online service
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#C0C1C8"}
                    fontSize="small"
                  >
                    Access to multiplayer games
                  </Text>
                </Flex>
              </Checkbox>
              <Spacer />
              <Text
                as="span"
                fontWeight="semibold"
                color={"purple.400"}
                fontSize="small"
              >
                +$10/yr
              </Text>
            </Flex>
            <Flex
              height={20}
              width={"md"}
              p={5}
              border="1px"
              borderColor="purple.400"
              rounded={"md"}
              direction={["column", "row"]}
            >
              <Checkbox size="sm" colorScheme="purple">
                <Flex padding={5} direction={"column"}>
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    Larger storage
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#C0C1C8"}
                    fontSize="small"
                  >
                    Extra 1TB of cloud save
                  </Text>
                </Flex>
              </Checkbox>
              <Spacer />
              <Text
                as="span"
                fontWeight="semibold"
                color={"purple.400"}
                fontSize="small"
              >
                +$20/yr
              </Text>
            </Flex>
            <Flex
              height={20}
              width={"md"}
              p={5}
              border="1px"
              borderColor="purple.400"
              rounded={"md"}
              direction={["column", "row"]}
            >
              <Checkbox size="sm" colorScheme="purple">
                <Flex padding={5} direction={"column"}>
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={"#03295A"}
                    fontSize="medium"
                  >
                    Customizable profile
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#C0C1C8"}
                    fontSize="small"
                  >
                    Custom theme on your profile
                  </Text>
                </Flex>
              </Checkbox>
              <Spacer />
              <Text
                as="span"
                fontWeight="semibold"
                color={"purple.400"}
                fontSize="small"
              >
                +$20/yr
              </Text>
            </Flex>
          </>
        )}

        <Flex direction={"row"} justify={"space-between"} marginTop={"24"}>
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

export default Addon;
