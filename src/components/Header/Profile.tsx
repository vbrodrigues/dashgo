import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vítor Rodrigues</Text>
          <Text color="gray.300" fontSize="sm">
            vitor@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Vítor Rodrigues"
        src="http://github.com/vbrodrigues.png"
      />
    </Flex>
  );
}
