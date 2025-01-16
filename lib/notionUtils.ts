import {
  DatabaseObjectResponse,
  PageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

export interface BlogData {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  published: string;
}
export interface BlogHeaderData {
  title: string;
  pageID: string;
  coverUrl: string;
}

// ************************************************ //
export const formatBlogData = (
  results: QueryDatabaseResponse['results']
): BlogData[] => {
  return results.map((result) => {
    // Type guard check before accessing properties
    if (!isPageOrDatabaseObject(result)) {
      return {
        title: 'No Title',
        description: 'No Description',
        tags: [],
        slug: 'No Slug',
        published: 'Unknown',
      };
    }

    // Safely access properties after narrowing down the type
    const nameArray =
      result.properties.Name?.type === 'title'
        ? result.properties.Name.title
        : [];
    const descriptionArray =
      result.properties.Description?.type === 'rich_text'
        ? result.properties.Description.rich_text
        : [];
    const tagsArray =
      result.properties.Tags?.type === 'multi_select'
        ? result.properties.Tags.multi_select
        : [];
    const slug =
      result.properties.Slug?.type === 'rich_text'
        ? result.properties.Slug.rich_text
        : [];
    const publishedDate =
      result.properties.Published?.type === 'date'
        ? (result.properties.Published.date?.start ?? 'Unknown')
        : 'Unknown';

    return {
      title: nameArray.length > 0 ? nameArray[0].plain_text : 'No Title',
      description:
        descriptionArray.length > 0
          ? descriptionArray[0].plain_text
          : 'No Description',
      tags: Array.isArray(tagsArray)
        ? tagsArray.map((tag) => tag.name)
        : tagsArray.options.map((tag) => tag.name),
      slug: slug.length > 0 ? slug[0].plain_text : 'No Slug',
      published: publishedDate,
    };
  });
};

// ************************************************ //

function isPageOrDatabaseObject(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any
): result is PageObjectResponse | DatabaseObjectResponse {
  return 'properties' in result;
}
export const formatHeaderData = (
  results: Array<PageObjectResponse | DatabaseObjectResponse>
): BlogHeaderData[] => {
  return results.map((result) => {
    if (!isPageOrDatabaseObject(result)) {
      return {
        title: '',
        pageID: '',
        coverUrl: '',
      };
    }

    const nameArray =
      result.properties.Name?.type === 'title'
        ? result.properties.Name.title
        : [];
    // const descriptionArray = result.properties.Description?.rich_text ?? [];
    // const tagsArray = result.properties.Tags?.multi_select ?? [];
    // const slug = result.properties.Slug?.rich_text ?? [];

    const title = nameArray.length > 0 ? nameArray[0].plain_text : '';
    const pageID = result.id.replace(/-/g, '');
    const coverUrl =
      result.cover?.type === 'external'
        ? result.cover.external.url
        : result.cover?.file?.url || '';

    return {
      title: title,
      pageID: pageID,
      coverUrl: coverUrl,
    };
  });
};

// ************************************************ //
