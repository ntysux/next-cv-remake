import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';
import { CreatePageParameters, UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints';
import { Cv, TypeData } from '@/redux/state-interface';

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
  await notion.pages.update(cvPageParameters);

  // update section page
  await Promise.all(cv.section.map(async(section, index) => {
    if(section.id) {
      if(section.type === TypeData.Note) {
        const sectionPageParameters: UpdatePageParameters = {
          page_id: section.id,
          properties: {
            cvId: {
              title: [
                {
                  text: {
                    content: cv.id
                  }
                }
              ]
            },
            type: {
              number: TypeData.Note
            },
            note: {
              rich_text: [
                {
                  text: {
                    content: section.data ? section.data : ''
                  }
                }
              ]
            }
          }
        }

        await notion.pages.update(sectionPageParameters);
      }
      else if(section.type === TypeData.Heading) {
        const sectionPageParameters: UpdatePageParameters = {
          page_id: section.id,
          properties: {
            cvId: {
              title: [
                {
                  text: {
                    content: cv.id
                  }
                }
              ]
            },
            type: {
              number: TypeData.Heading
            },
            heading: {
              rich_text: [
                {
                  text: {
                    content: section.data ? section.data : ''
                  }
                }
              ]
            }
          }
        }

        await notion.pages.update(sectionPageParameters);
      }
      else if(section.type === TypeData.List) {
        const sectionPageParameters: UpdatePageParameters = {
          page_id: section.id,
          properties: {
            cvId: {
              title: [
                {
                  text: {
                    content: cv.id
                  }
                }
              ]
            },
            type: {
              number: TypeData.List
            },
            list: {
              rich_text: [
                {
                  text: {
                    content: section.data ? section.data : ''
                  }
                }
              ]
            }
          }
        }

        await notion.pages.update(sectionPageParameters);
      }
    }
    else {
      if(section.type === TypeData.Note) {
        const sectionPageParameters: CreatePageParameters = {
          parent: {
            database_id: `${process.env.NOTION_DATABASE_SECTION_ID}`
          },
          properties: {
            cvId: {
              title: [
                {
                  text: {
                    content: cv.id
                  }
                }
              ]
            },
            type: {
              number: TypeData.Note
            },
            note: {
              rich_text: [
                {
                  text: {
                    content: section.data ? section.data : ''
                  }
                }
              ]
            }
          }
        }

        const newNote = await notion.pages.create(sectionPageParameters);
        cv.section[index].id = newNote.id;
      }
      else if(section.type === TypeData.Heading) {
        const sectionPageParameters: CreatePageParameters = {
          parent: {
            database_id: `${process.env.NOTION_DATABASE_SECTION_ID}`
          },
          properties: {
            cvId: {
              title: [
                {
                  text: {
                    content: cv.id
                  }
                }
              ]
            },
            type: {
              number: TypeData.Heading
            },
            heading: {
              rich_text: [
                {
                  text: {
                    content: section.data ? section.data : ''
                  }
                }
              ]
            }
          }
        }

        const newHeading = await notion.pages.create(sectionPageParameters);
        cv.section[index].id = newHeading.id;
      }
      else if(section.type === TypeData.List) {
        const sectionPageParameters: CreatePageParameters = {
          parent: {
            database_id: `${process.env.NOTION_DATABASE_SECTION_ID}`
          },
          properties: {
            cvId: {
              title: [
                {
                  text: {
                    content: cv.id
                  }
                }
              ]
            },
            type: {
              number: TypeData.List
            },
            list: {
              rich_text: [
                {
                  text: {
                    content: section.data ? section.data : ''
                  }
                }
              ]
            }
          }
        }

        const newList = await notion.pages.create(sectionPageParameters);
        cv.section[index].id = newList.id;
      }
    }
  }));

  res.status(200).json({cv});
}