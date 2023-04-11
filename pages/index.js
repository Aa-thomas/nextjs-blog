import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
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
