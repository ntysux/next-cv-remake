import { Center, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { IconCirclePlus, IconNote, IconTable, IconLayoutColumns, IconLayoutNavbar, IconList } from "@tabler/icons-react";

export default function AddMore() {
  return (
    <Center>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='change mode'
          variant='unstyled3'
          size='sm'
          icon={<IconCirclePlus />}
        />
        <MenuList>
          <MenuItem
            icon={<IconNote size='18px' />}
            command='Ghi chú'
          />
          <MenuDivider />
          <MenuItem
            icon={<IconTable size='18px' />}
            command='Bảng'
          />
          <MenuItem
            icon={<IconLayoutColumns size='18px' />}
            command='Cột'
          />
          <MenuItem
            icon={<IconLayoutNavbar size='18px' />}
            command='Dòng'
          />
          <MenuItem
            icon={<IconList size='18px' />}
            command='Danh sách'
          />
        </MenuList>
      </Menu>
    </Center>
  );
}