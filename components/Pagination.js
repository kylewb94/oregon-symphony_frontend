import Link from 'next/link'

import { PER_PAGE } from '@/config/index'
import styles from '@/styles/Pagination.module.css'

export default function Pagination({ page, total }) {
	const lastPage = Math.ceil(total / PER_PAGE)
	return (
		<div className={styles.pagination}>
			{page > 1 && (
				<Link href={`/events?page=${page - 1}`}>
					<a className='btn btnSecondary'>Prev</a>
				</Link>
			)}

			{page < lastPage && (
				<Link href={`/events?page=${page + 1}`}>
					<a className='btn btnSecondary'>Next</a>
				</Link>
			)}
		</div>
	)
}