import { Flex } from "@chakra-ui/react";
import ControlBar from "@/components/control-bar";
import Stage from "@/components/stage";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import StageView from "@/components/stage-view";

export default function CvPage() {
  const { mode } = useSelector((state: RootState) => state.cv);

  return (
    <Flex
      flexDirection='column'
      minH='100vh'
      bgSize='17px 17px'
      bgGradient='radial(#88898C 8%, transparent 10%)'
    >
      <ControlBar />
      {
        mode ?
        <Stage />
        :
        <StageView />
      }
    </Flex>
  );
}