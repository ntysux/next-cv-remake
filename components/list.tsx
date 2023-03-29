import { Textarea } from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";

export default function ListEdit() {
  const textareaRef = useRef(null);
  const [state, setState] = useState('');

  function adjustTextareaHeight() {
    const textareaElement = textareaRef.current as unknown as HTMLTextAreaElement;
    textareaElement.style.height = "auto";
    textareaElement.style.height = `${textareaElement.scrollHeight}px`;
  }

  function setNoteData(event: ChangeEvent<HTMLTextAreaElement>) {
    const newValue = event.target.value;
    const lines = newValue.split("\n");
    const newLines = lines.map(line => {
      if (!line.startsWith("•")) {
        return "•" + line;
      }
      return line;
    });
    setState(newLines.join("\n"));
  }

  return (
    <Textarea
      value={state}
      ref={textareaRef}
      variant='unstyled2'
      onChange={e => {
        adjustTextareaHeight();
        setNoteData(e);
      }}
    />
  );
}