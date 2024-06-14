import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const Philosophy = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">
        Our Philosophy
      </Heading>
      <Text fontSize="lg" textAlign="center">
        We don’t believe in a check-the-box approach to investing, nor in pedigrees. We go long on non-linear journeys.
      </Text>
      <Image src="https://assets-global.website-files.com/642675a568b9c7e33324cb29/6447ab949f9eb6476c9a28e3_642c14de80c53c22d503db0a_pristyn%2520caee.png" alt="Pristyn Care" />
      <Text fontSize="md">
        Pristyn Care is building a healthcare delivery marketplace for elective surgeries in India.
      </Text>
    </VStack>
  </Box>
);

export default Philosophy;