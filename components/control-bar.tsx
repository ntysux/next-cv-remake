import { HStack, Spacer } from "@chakra-ui/react";
import CopyUrlToClipboard from "./copy-url-to-clipboard";
import Dashboard from "./dashboard";
import Settings from "./settings";

export default function ControlBar() {
  return (
    <HStack p='1' position='sticky' top='0' zIndex='11111'>
      <Settings />
      <Spacer />
      <Dashboard />
      <Spacer />
      <CopyUrlToClipboard />
    </HStack>
  );
}