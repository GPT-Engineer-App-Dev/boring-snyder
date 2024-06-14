import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const Portfolio = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">
        Our Portfolio
      </Heading>
      <Text fontSize="lg" textAlign="center">
        We partner very early and support companies throughout their lifecycle. We invest from $500K at seed to $50M+ when doubling and tripling down.
      </Text>
      <Image src="https://assets-global.website-files.com/642675a568b9c7e33324cb29/6447ab90dbde2be15dbf3b58_642c12ea5764a3ad35efc625_billion%2520to%2520one.png" alt="BillionToOne" />
      <Text fontSize="md">
        BillionToOne is a precision diagnostics company that uses proprietary molecular counting technology for disease detection, offering non-invasive prenatal testing and liquid biopsies.
      </Text>
    </VStack>
  </Box>
);

export default Portfolio;