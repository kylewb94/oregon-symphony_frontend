import Link from 'next/link'

import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

export default function NotFoundPage() {
	return (
		<Layout title='Page Not Found'>
			<div className={styles.error}>
				<h1>404</h1>
				<h4>Page not found</h4>
				<Link href='/'><a>Go Back Home</a></Link>
			</div>
		</Layout>
	)
}
