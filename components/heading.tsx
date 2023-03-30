import { setHeading } from "@/redux/actions";
import { Heading } from "@/redux/state-interface";
import { Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

interface Props {
  index: number,
  data: Heading
}

export default function HeadingEdit({index, data}: Props) {
  const dispatch = useDispatch();

  function setDataHeading(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.value) {
      dispatch(setHeading(index, e.target.value));
    }
    else {
      dispatch(setHeading(index, null));
    }
  }

  return (
    <Input
      value={data.data ? data.data : ''}
      variant='unstyled1'
      size='lg'
      onChange={e => setDataHeading(e)}
    />
  );
}