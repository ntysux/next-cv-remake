import { Flex, Text } from "@chakra-ui/react";
import ControlBar from "@/components/control-bar";
import Stage from "@/components/stage";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import StageView from "@/components/stage-view";
import { GetServerSidePropsContext } from "next";
import { Client } from "@notionhq/client";
import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  isPage: boolean
}

export default function CvPage({isPage}: Props) {
  const { mode } = useSelector((state: RootState) => state.cv);

  return isPage ? (
    <Flex
      flexDirection='column'
      minH='100vh'
      bgSize='17px 17px'
      bgGradient='radial(#88898C 8%, transparent 10%)'
    >
      <ControlBar />
      {
        mode ?
        <Stage />
        :
        <StageView />
      }
    </Flex>
  ) : (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bgSize='17px 17px'
      bgGradient='radial(#88898C 8%, transparent 10%)'
    >
      <Text
        fontSize='lg'
        bg='white'
        color='app.black.1'
        fontWeight='600'
      >
        Không tìm thấy cv
      </Text>
    </Flex>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pageId = context.resolvedUrl.split('/')[2];
  const notion = new Client({auth: `${process.env.NOTION_KEY}`});
  let page: GetPageResponse | undefined;

  // Check page id
  try {
    page = await notion.pages.retrieve({ page_id: pageId });
  } catch (error) {}

  if(page?.id) {
    return {
      props: {isPage: true}
    }
  }
  else {
    return {
      props: {isPage: false}
    }
  }
}