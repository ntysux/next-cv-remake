import { Flex } from "@chakra-ui/react";
import ControlBar from "@/components/control-bar";
import Stage from "@/components/stage";

export default function CvPage() {
  return (
    <Flex
      flexDirection='column'
      minH='100vh'
      bgSize='17px 17px'
      bgGradient='radial(#88898C 8%, transparent 10%)'
    >
      <ControlBar />
      <Stage />
    </Flex>
  );
}