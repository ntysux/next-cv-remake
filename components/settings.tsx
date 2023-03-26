import { Drawer, DrawerContent, DrawerOverlay, IconButton, useDisclosure } from "@chakra-ui/react";
import { IconAlignLeft } from "@tabler/icons-react";

export default function Settings() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label='open drawer settings'
        variant='unstyled3'
        icon={<IconAlignLeft size='20px' strokeWidth='2.8' />}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          
        </DrawerContent>
      </Drawer>
    </>
  );
}