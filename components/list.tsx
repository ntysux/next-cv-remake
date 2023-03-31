import { ListItem, Textarea, UnorderedList } from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { setList } from "@/redux/actions";
import { List } from "@/redux/state-interface";

interface Props {
  index: number,
  data: List
}

export default function ListEdit({index, data}: Props) {
  const textareaRef = useRef(null);
  const dispatch = useDispatch();

  function adjustTextareaHeight() {
    const textareaElement = textareaRef.current as unknown as HTMLTextAreaElement;
    textareaElement.style.height = 'auto';
    textareaElement.style.height = `${textareaElement.scrollHeight}px`;
  }

  function setListData(event: ChangeEvent<HTMLTextAreaElement>) {
    const newValue = event.target.value;
    const lines = newValue.split("\n");
    const newLines = lines.map(line => {
      if (!line.startsWith("-")) {
        return "-" + line;
      }
      return line;
    });

    if (newLines.length === 1 && newLines[0] === '-') {
      dispatch(setList(index, null));
    }
    else {
      dispatch(setList(index, newLines.join("\n")));
    }
  }

  return (
    <Textarea
      value={data.data !== null ? data.data : '-'}
      ref={textareaRef}
      variant='unstyled2'
      onChange={e => {
        adjustTextareaHeight();
        setListData(e);
      }}
    />
  );
}

interface ViewProps {
  data: List
}

export function ListView({data}: ViewProps) {
  const dataHandled = data.data?.split('\n').join('').split('-'); 

  return (
    <UnorderedList>
      {
        dataHandled?.map((line, index) =>
          index !== 0 && <ListItem key={index}>{line}</ListItem>
        )
      }
    </UnorderedList>
  );
}