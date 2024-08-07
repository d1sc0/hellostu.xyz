import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Stuart Mackenzie - Hello Stu',
    description:
      'Hello Stu is the personal website and blog of Stuart Mackenzie. Stuart works hard to improve and transform public services as a Senior Partner at TPXimpact. Outside of work he is a photographer, amatuer web developer, runner, parkrun enthsiast and excotic disco dancer!',
    site: context.site,
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: `${post.data.description}`,
      link: `/posts/${post.slug}/`,
      content: `<p>${post.data.description} <a href="${context.site}posts/${post.slug}/">[read more...]</a></p>
      <p><img src="https://hellostu.xyz${post.data.socialImage}" width="600px" height="300px" /></p>`,
    })),
  });
}
