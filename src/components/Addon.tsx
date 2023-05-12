import { Text, Flex, Button, Checkbox, Spacer } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface AddonProps {
  planType: String;
  onNext: () => void;
  onPrevious: () => void;
  addon: { name: String; price: Number; description: String }[];
  setAddon: (value: any) => void;
}

const Addon = ({
  planType,
  onNext,
  onPrevious,
  addon,
  setAddon,
}: AddonProps) => {
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    const copy = addon;
    if (event.target.checked) {
      if (event.target.name === "service") {
        setAddon([
          ...copy,
          {
            name: event.target.name,
            description: "Online service",
            price: planType === "monthly" ? 1 : 10,
          },
        ]);
      } else if (event.target.name === "storage") {
        setAddon([
          ...copy,
          {
            name: event.target.name,
            description: "Larger storage",
            price: planType === "monthly" ? 2 : 20,
          },
        ]);
      } else if (event.target.name === "profile") {
        setAddon([
          ...copy,
          {
            name: event.target.name,
            description: "Customizable profile",
            price: planType === "monthly" ? 2 : 20,
          },
        ]);
      }
    } else {
      const newCopy = copy.filter((item) => item.name !== event.target.name);
      setAddon([...newCopy]);
    }
  };
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
            <Checkbox
              size="sm"
              colorScheme="purple"
              name="service"
              onChange={handleClick}
            >
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
              {planType === "monthly" ? "+$1/mo" : "+$10/yr"}
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
            <Checkbox
              size="sm"
              colorScheme="purple"
              name="storage"
              onChange={handleClick}
            >
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
              {planType === "monthly" ? "+$2/mo" : "+$20/yr"}
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
            <Checkbox
              size="sm"
              colorScheme="purple"
              name="profile"
              onChange={handleClick}
            >
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
              {planType === "monthly" ? "+$2/mo" : "+$20/yr"}
            </Text>
          </Flex>
        </>

        <Flex direction={"row"} justify={"space-between"} marginTop={"24"}>
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

export default Addon;
