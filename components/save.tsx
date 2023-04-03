import { mergeApi } from "@/redux/actions";
import { RootState } from "@/redux/store";
import { IconButton, useBoolean } from "@chakra-ui/react";
import { IconCloud } from "@tabler/icons-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function Save() {
  const dispatch = useDispatch();
  const cv = useSelector((state: RootState) => state.cv);
  const [loading, setLoading] = useBoolean(false);

  async function handleUploadToNotion() {
    setLoading.on();
    const res = await axios.post('http://localhost:3000/api/update', {cv});
    dispatch(mergeApi(res.data.cv));
    res && setLoading.off(); 
  }

  return (
    <IconButton
      isLoading={loading}
      aria-label='save'
      variant='unstyled1'
      size='sm'
      icon={<IconCloud strokeWidth='2.5' size='20px' />}
      onClick={handleUploadToNotion}
    />
  );
}