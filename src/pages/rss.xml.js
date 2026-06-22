import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

const WP_API_URL = 'https://backend.spyblue.co/wp-json/wp/v2';

export async function GET(context) {
	const res = await fetch(`${WP_API_URL}/posts`);
	const posts = await res.json();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.title.rendered,
			pubDate: post.date,
			description: post.excerpt.rendered,
			link: `/blog/${post.slug}/`,
		})),
	});
}
