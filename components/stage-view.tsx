import { Container, Stack, Text } from "@chakra-ui/react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { DataDisplay, TypeData } from "@/redux/state-interface";
import { HeadingView } from "./heading";
import { NoteView } from "./note";
import { ListView } from "./list";
import { AvatarView } from "./avatar";

interface Map {
  array: DataDisplay[],
  render: (data: DataDisplay, index: number) => JSX.Element
}

const Map = ({array, render}: Map) =>
  <>{array.map((data, index) => render(data, index))}</>

export default function StageView() {
  const { section } = useSelector((state: RootState) => state.cv);

  return (
    <Container
      mt='8'
      p='6'
      px='8'
      bg='white'
      rounded='xl'
      maxW='container.lg'
      boxShadow='rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'
    >
      <Stack spacing='4'>
        <AvatarView />
        {
          !section.length &&
          <Text
            textAlign='center'
            fontSize='lg'
            fontWeight='300'
            color='app.gray.1'
          >
            CV sẽ được hiển thị tại đây.
          </Text>
        }
        <Map array={section} render={(data, index) => 
          <Stack key={index}>
            {
              data.type === TypeData.Heading &&
                <HeadingView data={data} />
            }
            {
              data.type === TypeData.Note &&
                <NoteView data={data} />
            }
            {
              data.type === TypeData.List &&
                <ListView data={data} />
            }
          </Stack>
        }/>
      </Stack>
    </Container>
  );
}