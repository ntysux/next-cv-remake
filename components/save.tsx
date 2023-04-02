import { IconButton } from "@chakra-ui/react";
import { IconCloudCheck } from "@tabler/icons-react";

export default function Save() {
  return (
    <IconButton
      aria-label='save'
      variant='unstyled1'
      size='sm'
      icon={<IconCloudCheck strokeWidth='2.5' size='20px' />}
    />
  );
}