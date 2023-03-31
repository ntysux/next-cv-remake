import { setNote } from "@/redux/actions";
import { Note } from "@/redux/state-interface";
import { Badge, Box, Stack, Text, Textarea } from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";
import { useDispatch } from "react-redux";

interface Props {
  index: number,
  data: Note
}

export function NoteEdit({index, data}: Props) {
  const dispatch = useDispatch();
  const textareaRef = useRef(null);

  function adjustTextareaHeight() {
    const textareaElement = textareaRef.current as unknown as HTMLTextAreaElement;
    textareaElement.style.height = "auto";
    textareaElement.style.height = `${textareaElement.scrollHeight}px`;
  }

  function setNoteData(event: ChangeEvent<HTMLTextAreaElement>) {
    if(event.target.value) {
      dispatch(setNote(index, event.target.value));
    }
    else {
      dispatch(setNote(index, null));
    }
  }

  return (
    <Textarea
      value={data.data ? data.data : ''}
      ref={textareaRef}
      variant='unstyled1'
      onChange={e => {
        adjustTextareaHeight();
        setNoteData(e);
      }}
    />
  );
}

interface ViewProps {
  data: Note
}

export function NoteView({data}: ViewProps) {
  return (
    <Stack spacing='1'>
      {
        data.data?.split("\n").map((line, index) => 
          <Badge key={index} variant='solid1'>
            {line}
          </Badge>
        )
      }
    </Stack>
  );
}