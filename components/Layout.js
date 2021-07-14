import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from './Header'
import Showcase from './Showcase'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'

export default function Layout({ title, description, keywords, children }) {
	const router = useRouter()

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			{router.pathname === '/' && <Showcase />}
			<div className={styles.container}>
				{children}
			</div>
			<Footer />
		</div>
	)
}

Layout.defaultProps = {
	title: 'Oregon Symphony',
	description: 'Your official source for Oregon Symphony Tickets. Explore the Oregon Symphony located in Portland and Salem, OR. Join us for one of our world-class concerts.',
	keywords: 'oregon symphony, portland symphony'
}
