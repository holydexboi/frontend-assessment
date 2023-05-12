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

interface SummaryProps {
  billType: String;
  planType: String;
  price: number;
  addon: { name: String; price: number; description: String }[];
  setSteps: (value: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}
const Summary = ({
  billType,
  planType,
  price,
  addon,
  setSteps,
  onNext,
  onPrevious,
}: SummaryProps) => {
  const total = addon.reduce((acc, item) => {
    return acc + item.price;
  }, price);
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
                    {`${
                      billType.charAt(0).toUpperCase() + billType.slice(1)
                    } (${planType === "monthly" ? "Monthly" : "Yearly"})`}
                  </Text>
                  <Text
                    as="span"
                    fontWeight="medium"
                    color={"#C0C1C8"}
                    decoration={"underline"}
                    fontSize="small"
                    cursor={"pointer"}
                    _hover={{ color: "#03295A" }}
                    onClick={() => setSteps(2)}
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
                  {`$${price}/${planType === "monthly" ? "mo" : "yr"}`}
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"5"}>
                {addon.map((add, index) => (
                  <Flex justify={"space-between"} key={index}>
                    <Text
                      as="span"
                      fontWeight="medium"
                      color={"#C0C1C8"}
                      fontSize="small"
                      cursor={"pointer"}
                    >
                      {add.description}
                    </Text>
                    <Text
                      as="span"
                      fontWeight="semibold"
                      color={"#03295A"}
                      fontSize="small"
                    >
                      {`+$${add.price}/${planType === "monthly" ? "mo" : "yr"}`}
                    </Text>
                  </Flex>
                ))}
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
            {`Total (per ${planType === "monthly" ? "month" : "year"})`}
          </Text>
          <Spacer />
          <Text
            as="span"
            fontWeight="bold"
            color={"#4E47C4"}
            paddingRight={7}
            fontSize="medium"
          >
            {`+$${total}/${planType === "monthly" ? "mo" : "yr"}`}
          </Text>
        </Flex>
        <Flex direction={"row"} justify={"space-between"} marginTop={"24"}>
          <Button bgColor={"white"} onClick={onPrevious} color={"#C0C1C8"}>
            Go Back
          </Button>
          <Button
            bgColor={"#473EFF"}
            color={"white"}
            onClick={onNext}
            size="lg"
          >
            Confirm
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Summary;
