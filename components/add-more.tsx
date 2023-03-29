import { Center, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { IconCirclePlus, IconNote, IconList, IconHeading } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { addHeading, addNote } from "@/redux/actions";

export default function AddMore() {
  const dispatch = useDispatch();

  function handleAddNote() {
    dispatch(addNote());
  }

  function handleAddHeading() {
    dispatch(addHeading());
  }

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
            onClick={handleAddHeading}
          />
          <MenuItem
            icon={<IconNote size='18px' />}
            command='Ghi chú'
            onClick={handleAddNote}
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