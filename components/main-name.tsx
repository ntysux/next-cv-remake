import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { useState } from "react";

export default function MainName() {
  const [name, setName] = useState('Untitled');

  return (
    <Editable value={name}>
      <EditablePreview
        mx='3'
        color='white'
        fontWeight='600'
        maxW='100px'
        noOfLines={1}
      />
      <EditableInput
        px='2'
        color='white'
        bg='app.black.2'
        onChange={e => setName(e.target.value)}
      />
    </Editable>
  );
}