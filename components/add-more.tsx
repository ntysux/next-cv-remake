import { Center, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { IconCirclePlus, IconNote, IconList, IconHeading } from "@tabler/icons-react";

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
            icon={<IconHeading size='18px' />}
            command='Tiêu đề'
          />
          <MenuItem
            icon={<IconNote size='18px' />}
            command='Ghi chú'
          />
          <MenuDivider />
          <MenuItem
            icon={<IconList size='18px' />}
            command='Danh sách'
          />
        </MenuList>
      </Menu>
    </Center>
  );
}