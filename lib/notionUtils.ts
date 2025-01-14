import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export interface BlogData {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  published: string;
}

export const formatBlogData = (
  results: QueryDatabaseResponse['results']
): BlogData[] => {
  return results.map((result) => {
    const nameArray = result.properties.Name?.title ?? [];
    const descriptionArray = result.properties.Description?.rich_text ?? [];
    const tagsArray = result.properties.Tags?.multi_select ?? [];
    const slug = result.properties.Slug?.rich_text ?? [];
    const publishedDate = result.properties.Published?.date?.start ?? 'Unknown';

    return {
      title: nameArray.length > 0 ? nameArray[0].plain_text : 'No Title',
      description:
        descriptionArray.length > 0
          ? descriptionArray[0].plain_text
          : 'No Description',
      tags: tagsArray.map((tag) => tag.name),
      slug: slug.length > 0 ? slug[0].plain_text : 'No Slug',
      published: publishedDate,
    };
  });
};
