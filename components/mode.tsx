import { Center, IconButton, Menu, MenuButton, MenuItem, MenuList, useBoolean } from "@chakra-ui/react";
import { IconPencil, IconEye } from "@tabler/icons-react";

export default function Mode() {
  const [mode, setMode] = useBoolean(false);

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
            icon={<IconEye size='20px' />}
            onClick={setMode.off}
            command='Ctrl + V'
          >
            Chế độ xem
          </MenuItem>
          <MenuItem
            icon={<IconPencil size='20px' />}
            onClick={setMode.on}
            command='Ctrl + E'
          >
            Chế độ chỉnh sửa
          </MenuItem>
        </MenuList>
      </Menu>
    </Center>
  );
}