import { Flex, Text, Image} from "@chakra-ui/react";
import thankImg from "../assets/images/icon-thank-you.svg";

const Thank = () => {
  return (
    <>
      <Flex direction={"column"} align={'center'} justify={'center'} width={'sm'} gap={3}>
        <Image src={thankImg} h={'70px'} alt="Thank you Icon"/>
        <Text as="span" fontWeight="bold" textAlign={'center'} color={"#03295A"} fontSize="x-large">
          Thank You!
        </Text>
        <Text
          as="span"
          marginTop={"-4"}
          textAlign={'center'}
          fontWeight="semibold"
          color={"#C0C1C8"}
          fontSize="small"
        >
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </Text>
      </Flex>
    </>
  );
};

export default Thank;
