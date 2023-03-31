import { setHeading } from "@/redux/actions";
import { Heading as IHeading } from "@/redux/state-interface";
import { Heading, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

interface EditProps {
  index: number,
  data: IHeading
}

export default function HeadingEdit({index, data}: EditProps) {
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

interface ViewProps {
  data: IHeading
}

export function HeadingView({data}: ViewProps) {
  return (
    <Heading
      fontFamily='Quicksand'
      size='md'
      color='app.black.1'
      fontWeight='300'
      letterSpacing='wide'
    >
      {data.data ? data.data : ''}
    </Heading>
  );
}