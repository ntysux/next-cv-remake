import { Flex, Text } from "@chakra-ui/react";
import ControlBar from "@/components/control-bar";
import Stage from "@/components/stage";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import StageView from "@/components/stage-view";
import { GetServerSidePropsContext } from "next";
import { Client } from "@notionhq/client";
import { Cv, Heading, List, Note, TypeData } from "@/redux/state-interface";
import { useEffect } from "react";
import { mergeApi } from "@/redux/actions";

interface Props {
  isPage: boolean,
  cvApi: Cv
}

export default function CvPage({isPage, cvApi}: Props) {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: RootState) => state.cv);
  
  useEffect(() => {
    dispatch(mergeApi(cvApi));
  }, []);

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
  let page: any;
  let cvApi: Cv | undefined;

  // Check page id
  try {
    page = await notion.pages.retrieve({page_id: pageId});
  } catch (error) {}

  if(page?.id) {
    // get page data
    const name: string = page.properties.name.title[0].plain_text;
    const color: string = page.properties.color.rich_text[0].plain_text; 
    
    cvApi = {
      id: page.id,
      name: name,
      color: color,
      mode: false,
      section: []
    }

    // get section page data
    const sectionPage = await notion.databases.query({
      database_id: `${process.env.NOTION_DATABASE_SECTION_ID}`,
      filter: {
        property: 'cvId',
        rich_text: {
          contains: page.id,
        }
      }
    });

    sectionPage.results.reverse().map((section: any) => {
      if(section.properties.type.number === TypeData.Note) {
        const data = section.properties.note.rich_text[0];
        const sectionApi: Note = {
          id: section.id,
          type: TypeData.Note,
          data: data ? data.plain_text : ''
        };
        cvApi?.section.push(sectionApi);
      }
      else if(section.properties.type.number === TypeData.Heading) {
        const data = section.properties.heading.rich_text[0];
        const sectionApi: Heading = {
          id: section.id,
          type: TypeData.Heading,
          data: data ? data.plain_text : ''
        };
        cvApi?.section.push(sectionApi);
      } else if(section.properties.type.number === TypeData.List) {
        const data = section.properties.list.rich_text[0];
        const sectionApi: List = {
          id: section.id,
          type: TypeData.List,
          data: data ? data.plain_text : ''
        };
        cvApi?.section.push(sectionApi);
      }
    });

    return {
      props: {isPage: true, cvApi}
    }
  }
  else {
    return {
      props: {isPage: false}
    }
  }
}