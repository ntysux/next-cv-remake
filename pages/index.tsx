import { Button, Flex, Heading, Stack, Text, VStack, useBoolean } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

export default function HeroPage() {
  const router = useRouter();
  const [loading, setLoading] = useBoolean(false);

  async function handleCreateNewNotionPage() {
    setLoading.on();
    const { data } = await axios.post('http://localhost:3000/api/create');
    router.push(`/cv/${data.newPageId}`);
  }

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bgSize='17px 17px'
      bgGradient='radial(#88898C 8%, transparent 10%)'
    >
      <VStack spacing='4'>
        <Heading
          fontFamily='Quicksand'
          fontWeight='300'
          color='app.black.1'
          letterSpacing='widest'
        >
          Next <Text as='span' fontWeight='500' color='app.teal.1'>CV</Text>
        </Heading>
        <Stack direction={['column', 'row']}>
          <Button
            isLoading={loading}
            variant='solid1'
            onClick={handleCreateNewNotionPage}
          >
            Bắt đầu
          </Button>
          <Button variant='outline1'>
            Tìm cv
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}