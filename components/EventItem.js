import Image from 'next/image'
import Link from 'next/link'
import { useContext, Fragment } from 'react'

import { FaPencilAlt, FaTimes } from 'react-icons/fa'

import AuthContext from '@/context/AuthContext'
import styles from '@/styles/EventItem.module.css'

export default function EventItem({ evt, deleteHandler }) {
	const { user } = useContext(AuthContext)

	return (
		<div className={styles.event}>
			<div className={styles.img}>
				<Image src={evt.image ? evt.image.formats.medium.url : '/images/event-default.jpg'} width={784} height={450} alt='Event Image' />
			</div>

			<div className={styles.info}>
				<p>
					{new Date(evt.date).toLocaleDateString('en-US')}, {evt.time}
				</p>
				<h3><Link href={`/events/${evt.slug}`}>{evt.name}</Link></h3>
			</div>

			<div className={styles.link}>
				{user ? (
					// If logged in
					<Fragment>
						<li>
							<Link href={`/events/edit/${evt.id}`}>
								<a>
									<FaPencilAlt />&nbsp;Edit
								</a>
							</Link>
						</li>
						<li>
							<a href='#' onClick={() => deleteHandler(evt.id)} >
								<FaTimes />&nbsp;Delete
							</a>
						</li>
					</Fragment>
				) : (
					// If logged out
					<Link href={`/events/${evt.slug}`}>
						<a className='btn btnPrimary'>Details</a>
					</Link>
				)}
			</div>
		</div>
	)
}
