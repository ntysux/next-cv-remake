import { Divider, HStack } from "@chakra-ui/react";
import ColorTheme from "./color-theme";
import MainName from "./main-name";
import Mode from "./mode";

export default function Dashboard() {
  return (
    <HStack
      p='1'
      px='2'
      bg='app.black.1'
      rounded='lg'
    >
      <MainName />
      <Divider orientation='vertical' h='10px' rounded='full' borderColor='app.black.2' />
      <Mode />
      <Divider orientation='vertical' h='10px' rounded='full' borderColor='app.black.2' />
      <ColorTheme />
    </HStack>
  );
}