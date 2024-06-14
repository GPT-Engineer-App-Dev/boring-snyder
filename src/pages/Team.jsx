import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const Team = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">
        Meet the Team
      </Heading>
      <Text fontSize="lg" textAlign="center">
        Our team is composed of experienced professionals dedicated to supporting our portfolio companies.
      </Text>
      <Image src="https://assets-global.website-files.com/642675a568b9c7e33324cb29/6447ab9338d5f05316e080a1_642c1321418b01546c922ad9_kraken.png" alt="Kraken" />
      <Text fontSize="md">
        Kraken is one of the largest and most trusted cryptocurrency exchanges globally, offering spot and futures trading and staking services for over 40 digital assets.
      </Text>
    </VStack>
  </Box>
);

export default Team;