import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" px={4} py={2}>
    <Flex justify="space-between" align="center">
      <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
        Hummingbird VC
      </Link>
      <Flex>
        <Link as={RouterLink} to="/portfolio" mx={2}>
          Portfolio
        </Link>
        <Link as={RouterLink} to="/team" mx={2}>
          Team
        </Link>
        <Link as={RouterLink} to="/philosophy" mx={2}>
          Philosophy
        </Link>
        <Link href="https://hummingbirdvc.substack.com/" isExternal mx={2}>
          Stories
        </Link>
        <Link href="https://jobs.hummingbird.vc/jobs" isExternal mx={2}>
          Jobs
        </Link>
        <Link href="https://www.nomads.vc" isExternal mx={2}>
          Nomads
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;