import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Hello Stu',
    description:
      'Hello Stu is the personal website and blog of Stuart Mackenzie. Stuart works hard to improve and transform public services as a Senior Partner at TPXimpact. Outside of work he is a photographer, amatuer web developer, runner, parkrun enthsiast and excotic disco dancer!',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: `${post.data.description} <a href="/posts/${post.slug}">[...]</a>`,
      author: 'Stuart Mackenzie',
      link: `/posts/${post.slug}/`,
      enclosure: {
        url: post.data.postImage.src,
        type: 'image/' + post.data.postImage.format,
        width: post.data.postImage.width,
        height: post.data.postImage.height,
      },
    })),
  });
}
