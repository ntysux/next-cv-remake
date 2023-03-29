import { Textarea } from "@chakra-ui/react";
import { useRef } from "react";
import DataDisplayFrame from "./data-display-frame";

export function NoteEdit() {
  const textareaRef = useRef(null);

  function adjustTextareaHeight() {
    const textareaElement = textareaRef.current as unknown as HTMLTextAreaElement;
    textareaElement.style.height = "auto";
    textareaElement.style.height = `${textareaElement.scrollHeight}px`;
  }

  return (
    <DataDisplayFrame name='Ghi chú'>
      <Textarea
        ref={textareaRef}
        variant='unstyled1'
        onChange={adjustTextareaHeight}
      />
    </DataDisplayFrame>
  );
}