import uploadImageToFirebase from "@/firebase/upload";
import { setAvatar } from "@/redux/actions";
import { RootState } from "@/redux/store";
import { Box, Center, Circle, FormControl, FormLabel, Img, Input } from "@chakra-ui/react";
import { IconPhotoPlus } from "@tabler/icons-react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AvatarEdit() {
  const dispatch = useDispatch();
  const { avatar, color } = useSelector((state: RootState) => state.cv);

  async function handleSetImage(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    const file: FileList = input.files!;
    const name: string = file[0].name;
    const filebaseUrl: string = await uploadImageToFirebase(file[0], name);
    dispatch(setAvatar(name, filebaseUrl));
  }

  return (
    <Center>
      <FormControl w='min'>
        <FormLabel m='0'>
          <Circle
            size='90px'
            cursor='pointer'
            overflow='hidden'
            border={avatar?.firebaseUrl ? '4px solid' : '2px dashed'}
            borderColor={color}
          >
            {
              !avatar?.firebaseUrl ?
                <Box color={color}>
                  <IconPhotoPlus />
                </Box>
              :
                <Img src={avatar?.firebaseUrl} />
            }
          </Circle>
        </FormLabel>
        <Input
          type='file'
          display='none'
          onChange={e => handleSetImage(e)}
        />
      </FormControl>
    </Center>
  );
}

export function AvatarView() {
  const { avatar, color } = useSelector((state: RootState) => state.cv);

  return (
    <Center>
      <Circle
        size='90px'
        overflow='hidden'
        border={avatar?.firebaseUrl ? '4px solid' : '2px dashed'}
        borderColor={color}
      >
        {
          !avatar?.firebaseUrl ?
            <Box color={color}>
              <IconPhotoPlus />
            </Box>
          :
            <Img src={avatar?.firebaseUrl} />
        }
      </Circle>
    </Center>
  );
}