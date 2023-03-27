import { Container, Stack } from "@chakra-ui/react";
import AddMore from "./add-more";

export default function Stage() {
  return (
    <Container
      mt='8'
      p='4'
      px='8'
      bg='white'
      rounded='xl'
      maxW='container.lg'
      boxShadow='rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'
    >
      <Stack spacing='4'>
        <AddMore />
      </Stack>
    </Container>
  );
}