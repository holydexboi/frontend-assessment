import {
    Box,
    Text,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button
  } from "@chakra-ui/react";

const Personal = () => {
  return (
    <>
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
    </>
  )
}

export default Personal