import { client } from '@/lib/notion';
import { formatBlogData, BlogData, formatHeaderData } from '@/lib/notionUtils';
import {
  PageObjectResponse,
  DatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

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

export const fetchBlogData = async (slug: string) => {
  const response = await client.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: 'Slug',
          rich_text: {
            equals: slug,
          },
        },
        {
          property: 'Public',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });

  const filteredResults = response.results.filter(
    (result): result is PageObjectResponse | DatabaseObjectResponse =>
      'properties' in result
  );
  return formatHeaderData(filteredResults);
};

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
