import {
  CardBody,
  Card,
  Text,
  Flex,
  Spacer,
  Button,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
const Summary = () => {
  return (
    <>
      <Flex direction={"column"} paddingTop={8} gap={3}>
        <Text as="span" fontWeight="bold" color={"#03295A"} fontSize="xx-large">
          Finishing up
        </Text>
        <Text
          as="span"
          marginTop={"-4"}
          fontWeight="semibold"
          color={"#C0C1C8"}
          fontSize="medium"
        >
          Double-check everything looks OK before confirming.
        </Text>

        <Card h={48} width={"lg"} boxShadow={"none"} bgColor={"#F8F9FE"}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Flex justify={"space-between"}>
                <Flex direction={"column"}>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#03295A"}
                    fontSize="small"
                  >
                    Arcade (Monthly)
                  </Text>
                  <Text
                    as="span"
                    fontWeight="medium"
                    color={"#C0C1C8"}
                    decoration={"underline"}
                    fontSize="small"
                    cursor={"pointer"}
                  >
                    Change
                  </Text>
                </Flex>
                <Text
                  as="span"
                  fontWeight="semibold"
                  color={"#03295A"}
                  fontSize="small"
                >
                  $9/mo
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"5"}>
                <Flex justify={"space-between"}>
                  <Text
                    as="span"
                    fontWeight="medium"
                    color={"#C0C1C8"}
                    fontSize="small"
                    cursor={"pointer"}
                  >
                    Online service
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#03295A"}
                    fontSize="small"
                  >
                    +$1/mo
                  </Text>
                </Flex>
                <Flex justify={"space-between"}>
                  <Text
                    as="span"
                    fontWeight="medium"
                    color={"#C0C1C8"}
                    fontSize="small"
                    cursor={"pointer"}
                  >
                    Larger storage
                  </Text>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    color={"#03295A"}
                    fontSize="small"
                  >
                    +$2/mo
                  </Text>
                </Flex>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
        <Flex>
          <Text
            as="span"
            fontWeight="medium"
            color={"#C0C1C8"}
            fontSize="small"
            cursor={"pointer"}
          >
            Total (per month)
          </Text>
          <Spacer/>
          <Text
            as="span"
            fontWeight="bold"
            color={"#4E47C4"}
            paddingRight={7}
            fontSize="medium"
          >
            +$12/mo
          </Text>
        </Flex>
        <Flex direction={"row"} justify={"space-between"} marginTop={"24"}>
          <Button bgColor={"white"} color={"#C0C1C8"}>
            Go Back
          </Button>
          <Button bgColor={'#473EFF'} color={"white"} size="lg">
            Confirm
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Summary;
