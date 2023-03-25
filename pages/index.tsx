import { Button, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function HeroPage() {
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
          <Button variant='solid1' as={Link} href='/cv/cv1'>
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