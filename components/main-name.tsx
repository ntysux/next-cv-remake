import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { rename } from "@/redux/actions";
import { RootState } from "@/redux/store";

export default function MainName() {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.cv);
  const [currentName, setCurrentName] = useState(name);

  function handleRename(newName: string) {
    dispatch(rename(newName));
  }

  return (
    <Editable
      value={currentName}
      onSubmit={nextValue => handleRename(nextValue)}
    >
      <EditablePreview
        px='3'
        color='white'
        fontWeight='600'
        maxW='100px'
        noOfLines={1}
      />
      <EditableInput
        px='2'
        color='white'
        bg='app.black.2'
        onChange={e => setCurrentName(e.target.value)}
      />
    </Editable>
  );
}