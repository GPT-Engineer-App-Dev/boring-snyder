import { Container, Text, VStack, Heading, Box, Image, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Image src="https://assets-global.website-files.com/642675a568b9c7d89024cb22/642675a568b9c746ba24cb2d_Logo.svg" alt="Hummingbird Logo" />
        </Box>
        <Heading as="h1" size="2xl" textAlign="center">
          Backing Founders on a Mission to Prove Others Wrong
        </Heading>
        <Text fontSize="lg" textAlign="center">
          We are global seed investors, looking for outlier founders. We believe groundbreaking companies are built by a rare breed of entrepreneur.
        </Text>
        <Flex justify="center" wrap="wrap" spacing={4}>
          <Link as={RouterLink} to="/portfolio" mx={2} my={2} p={4} bg="blue.500" color="white" borderRadius="md" _hover={{ bg: "blue.600" }}>
            Portfolio
          </Link>
          <Link as={RouterLink} to="/team" mx={2} my={2} p={4} bg="blue.500" color="white" borderRadius="md" _hover={{ bg: "blue.600" }}>
            Team
          </Link>
          <Link as={RouterLink} to="/philosophy" mx={2} my={2} p={4} bg="blue.500" color="white" borderRadius="md" _hover={{ bg: "blue.600" }}>
            Philosophy
          </Link>
          <Link href="https://hummingbirdvc.substack.com/" isExternal mx={2} my={2} p={4} bg="blue.500" color="white" borderRadius="md" _hover={{ bg: "blue.600" }}>
            Stories
          </Link>
          <Link href="https://jobs.hummingbird.vc/jobs" isExternal mx={2} my={2} p={4} bg="blue.500" color="white" borderRadius="md" _hover={{ bg: "blue.600" }}>
            Jobs
          </Link>
          <Link href="https://www.nomads.vc" isExternal mx={2} my={2} p={4} bg="blue.500" color="white" borderRadius="md" _hover={{ bg: "blue.600" }}>
            Nomads
          </Link>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;