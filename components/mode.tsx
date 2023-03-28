import { Center, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IconPencil, IconEye } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeMode, changeMode } from "@/redux/actions";
import { RootState } from "@/redux/store";

interface HandleChangeMode {
  view: () => ChangeMode,
  edit: () => ChangeMode
}

export default function Mode() {
  const dispatch = useDispatch();
  const { mode, color } = useSelector((state: RootState) => state.cv);

  const handleChangeMode: HandleChangeMode = {
    view: () => dispatch(changeMode(false)),
    edit: () => dispatch(changeMode(true))
  }

  return (
    <Center>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='change mode'
          variant='unstyled1'
          size='sm'
          icon={mode ? <IconPencil size='20px' /> : <IconEye size='20px' />}
        />
        <MenuList>
          <MenuItem
            icon={<IconEye color={!mode ? color : '#E0E0E0'} size='20px' />}
            onClick={handleChangeMode.view}
            command='Ctrl + V'
          >
            Chế độ xem
          </MenuItem>
          <MenuItem
            icon={<IconPencil color={mode ? color : '#E0E0E0'} size='20px' />}
            onClick={handleChangeMode.edit}
            command='Ctrl + E'
          >
            Chế độ chỉnh sửa
          </MenuItem>
        </MenuList>
      </Menu>
    </Center>
  );
}