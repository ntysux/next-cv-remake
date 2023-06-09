import { removeSection } from "@/redux/actions";
import { Box, Center, Divider, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";
import { useDispatch } from "react-redux";

interface Props {
  children: JSX.Element,
  name: string,
  index: number
}

export default function DataDisplayFrame({ children, name, index }: Props) {
  const dispatch = useDispatch();

  function handleRemoveSection() {
    dispatch(removeSection(index));
  }

  return (
    <Box>
      <Flex justify='right'>
        <HStack
          p='1'
          px='2'
          bg='app.black.1'
          rounded='sm'
          roundedTop='md'
        >
          <Text
            color='app.gray.3'
            fontSize='sm'
            fontWeight='600'
          >
            {name}
          </Text>
          <Divider orientation='vertical' h='10px' rounded='full' borderColor='app.black.2' />
          <IconButton
            aria-label='close'
            variant='unstyled1'
            size='xs'
            icon={<IconX size='16px' strokeWidth='3' />}
            onClick={handleRemoveSection}
          />
        </HStack>
      </Flex>
      <Center
        p='2'
        border='2px dashed'
        rounded='sm'
        borderColor='app.black.2'
      >
        {children}
      </Center>
    </Box>
  );
}