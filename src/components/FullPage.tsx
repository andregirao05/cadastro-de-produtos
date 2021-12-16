import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export function FullPage({ children }: { children: ReactNode }) {
  return (
    <Flex justify="center" p="20" w="100%" minH="100vh">
      {children}
    </Flex>
  );
}
