import { Container, Stack } from "@chakra-ui/react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import AddMore from "./add-more";
import { NoteEdit } from "./note";
import { DataDisplay, TypeData } from "@/redux/state-interface";
import DataDisplayFrame from "./data-display-frame";
import HeadingEdit from "./heading";
import ListEdit from "./list";
import AvatarEdit from "./avatar";

interface Map {
  array: DataDisplay[],
  render: (data: DataDisplay, index: number) => JSX.Element
}

const Map = ({array, render}: Map) =>
  <>{array.map((data, index) => render(data, index))}</>

export default function Stage() {
  const { section } = useSelector((state: RootState) => state.cv);

  return (
    <Container
      my='8'
      p='4'
      px='8'
      bg='white'
      rounded='xl'
      maxW='container.lg'
      boxShadow='rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'
    >
      <Stack spacing='4'>
        <AvatarEdit />
        <Map array={section} render={(data, index) => 
          <Stack key={index}>
            {
              data.type === TypeData.Heading &&
                <DataDisplayFrame name='Tiêu đề' index={index}>
                  <HeadingEdit index={index} data={data} />
                </DataDisplayFrame>
            }
            {
              data.type === TypeData.Note &&
                <DataDisplayFrame name='Ghi chú' index={index}>
                  <NoteEdit index={index} data={data} />
                </DataDisplayFrame>
            }
            {
              data.type === TypeData.List &&
                <DataDisplayFrame name='Danh sách' index={index}>
                  <ListEdit index={index} data={data} />
                </DataDisplayFrame>
            }
          </Stack>
        }/>
        <AddMore />
      </Stack>
    </Container>
  );
}