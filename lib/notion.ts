import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';

const notion = new NotionAPI();
export default notion;

const client = new Client({
  auth: process.env.NOTION_SECRET,
});

export { client };
