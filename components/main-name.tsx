import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { rename } from "@/redux/actions";
import { RootState } from "@/redux/store";

export default function MainName() {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.cv);

  function handleRename(newName: string) {
    dispatch(rename(newName));
  }

  return (
    <Editable value={name}>
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
        onChange={e => handleRename(e.target.value)}
      />
    </Editable>
  );
}