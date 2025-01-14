import { client } from '@/lib/notion';
import { formatBlogData, BlogData } from '@/lib/notionUtils';

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
  return await client.databases.query({
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
