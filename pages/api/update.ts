import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';
import { UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints';
import { Cv } from '@/redux/state-interface';

export default async function updateCv(req: NextApiRequest, res: NextApiResponse) {
  const cv: Cv = req.body.cv;

  // call notion
  const notion = new Client({auth: `${process.env.NOTION_KEY}`});

  const cvPageParameters: UpdatePageParameters = {
    page_id: cv.id,
    properties: {
      name: {
        title: [
          {
            text: {
              content: cv.name
            }
          }
        ]
      },
      color: {
        rich_text: [
          {
            text: {
              content: cv.color
            }
          }
        ]
      }
    }
  }

  if(cv.avatar) {
    cvPageParameters.properties!.avatar = {
      files: [
        {
          name: cv.avatar.name,
          external: {
            url: cv.avatar.firebaseUrl
          }
        }
      ]
    }
  }

  // update cv page
  const cvUpdated =  await notion.pages.update(cvPageParameters);

  res.status(200).json({cvUpdated});
}