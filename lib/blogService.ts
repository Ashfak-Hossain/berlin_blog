import notion, { client } from '@/lib/notion';
import {
  formatBlogData,
  BlogData,
  formatHeaderData,
  BlogHeaderData,
} from '@/lib/notionUtils';
import {
  PageObjectResponse,
  DatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { cache } from 'react';

export const fetchFeaturedBlogs = async (): Promise<BlogData[]> => {
  const response = await client.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: 'Public',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'Featured',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });

  return formatBlogData(response.results);
};

export const fetchBlogData = cache(
  async (slug: string): Promise<BlogHeaderData[]> => {
    try {
      const response = await client.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
          and: [
            { property: 'Slug', rich_text: { equals: slug } },
            { property: 'Public', checkbox: { equals: true } },
          ],
        },
      });

      const filteredResults = response.results.filter(
        (result): result is PageObjectResponse | DatabaseObjectResponse =>
          'properties' in result
      );

      if (filteredResults.length === 0) {
        console.warn(`No blog found for slug: ${slug}`);
        return [];
      }

      return formatHeaderData(filteredResults);
    } catch (error) {
      console.error('Error fetching blog data:', error);
      return [];
    }
  }
);

export const fetchAllBlogs = async (): Promise<BlogData[]> => {
  const response = await client.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Public',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Serial',
        direction: 'ascending',
      },
    ],
  });

  return formatBlogData(response.results);
};

export const fetchRecordMap = cache(async (pageID: string) => {
  try {
    const data = await notion.getPage(pageID);
    return data;
  } catch (error) {
    console.error('Error fetching Notion page data:', error);
    return null;
  }
});
