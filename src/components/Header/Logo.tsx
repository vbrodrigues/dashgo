import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/dashboard">
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        cursor="pointer"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
    </Link>
  );
}
