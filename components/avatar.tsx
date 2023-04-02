import { setAvatar } from "@/redux/actions";
import { RootState } from "@/redux/store";
import { Box, Center, Circle, FormControl, FormLabel, Img, Input } from "@chakra-ui/react";
import { IconPhotoPlus } from "@tabler/icons-react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AvatarEdit() {
  const dispatch = useDispatch();
  const { avatar, color } = useSelector((state: RootState) => state.cv);

  function handleSetImage(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    const file: FileList = input.files!;
    const name: string = file[0].name;
    const blodUrl: string = URL.createObjectURL(file[0]);
    dispatch(setAvatar(name, blodUrl));
  }

  return (
    <Center bg='gray'>
      <FormControl w='min'>
        <FormLabel m='0'>
          <Circle
            size='90px'
            cursor='pointer'
            overflow='hidden'
            border={avatar?.blodUrl ? '4px solid' : '2px dashed'}
            borderColor={color}
          >
            {
              !avatar?.blodUrl ?
                <Box color={color}>
                  <IconPhotoPlus />
                </Box>
              :
                <Img src={avatar?.blodUrl} />
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