import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';
import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';

export default async function createNewCv(req: NextApiRequest, res: NextApiResponse) {
  const pageParameters: CreatePageParameters = {
    parent: {
      database_id: `${process.env.NOTION_DATABASE_CV_ID}`
    },
    properties: {
      name: {
        title: [
          {
            text: {
              content: 'Untitled'
            }
          }
        ]
      },
      color: {
        rich_text: [
          {
            text: {
              content: '#5CF2E3'
            }
          }
        ]
      }
    }
  }

  // call notion
  const notion = new Client({auth: `${process.env.NOTION_KEY}`});

  // create new Page
  const newPage = await notion.pages.create(pageParameters);
  
  res.status(200).json({newPageId: newPage.id});
}