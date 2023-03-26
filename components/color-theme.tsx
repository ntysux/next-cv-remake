import { Box, Center, HStack, IconButton, Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { useState } from 'react';

const colors: string[] = ['#5CF2E3', '#B980F2', '#F28DBC'];

interface Map {
  array: string[],
  render: (color: string, index: number) => JSX.Element
}

const Map = ({array, render}: Map) =>
  <>{array.map((color, index) => render(color, index))}</>

export default function ColorTheme() {
  const [color, setColor] = useState('#5CF2E3');

  return (
    <Center>
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label='change mode'
            variant='unstyled2'
            size='xs'
            icon={<Box p='1' bg={color} rounded='full' />}
          />
        </PopoverTrigger>
        <PopoverContent
          m='1'
          w='min'
          border='none'
          bg='app.black.1'
          rounded='sm'
        >
          <HStack spacing='1' p='1'>
            <Map array={colors} render={(color, index) => 
              <IconButton
                key={index}
                aria-label='color theme'
                variant='unstyled2'
                size='xs'
                icon={<Box p='2' rounded='full' bg={color} />}
                onClick={() => setColor(color)}
              />
            }/>
          </HStack>
        </PopoverContent>
      </Popover>
    </Center>
  );
}