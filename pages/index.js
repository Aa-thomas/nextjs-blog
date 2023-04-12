import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.scss';

export const getStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};

export default function Home({ allPostsData }) {
	console.log;
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
					odit. Optio doloribus nisi autem alias laudantium. Minus at
					repellendus suscipit aliquid nulla, dolore, nihil, odit quis quam
					aliquam ratione impedit ex maxime? Veritatis, explicabo dolor,
					voluptates fuga quasi aliquid rerum similique obcaecati porro
					velit odio, dolore possimus? Minima, eum ipsa.
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this
					on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
		</Layout>
	);
}
