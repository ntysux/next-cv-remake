import { Center, HStack, IconButton, Text, useToast } from "@chakra-ui/react";
import { IconClipboardCheck, IconCopy } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function CopyUrlToClipboard() {
  const { asPath } = useRouter();
  const toast = useToast();

  const origin = process.env.NEXT_PUBLIC_APP_URL;
  const fullUrl = `${origin}${asPath}`;
  
  function handleCopyUrlToClipboard() {
    navigator.clipboard.writeText(fullUrl);

    toast({
      render: () => (
        <Center>
          <HStack
            w='fit-content'
            p={2}
            bg='app.black.1'
            color='white'
            rounded='sm'
            fontWeight='500'
          >
            <IconClipboardCheck size='20px' />
            <Text>Đã sao chép vào clipboard.</Text>
          </HStack>
        </Center>
      ),
      duration: 3000
    });
  }
  
  return (
    <IconButton
      aria-label='copy url to clipboard'
      variant='unstyled3'
      icon={<IconCopy />}
      onClick={handleCopyUrlToClipboard}
    />
  );
}