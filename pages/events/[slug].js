import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Event.module.css'

export default function EventPage({ evt }) {
	const router = useRouter()

	return (
		<Layout
			title={(evt.name) + ' | Oregon Symphony'}
			description={evt.metaDescription}
		>
			<div className={styles.eventContainer}>
				<Link href={'/events'}>
					<a className='btn btnSecondary'>Back</a>
				</Link>

				<div className={styles.event}>
					<div className={styles.eventMain}>
						<h1>{evt.name}</h1>
						<ToastContainer />
						{evt.image && (
							<div className={styles.image}>
								<Image src={evt.image.formats.medium.url} width={784} height={450} alt='Event Image' />
							</div>
						)}

						<p>{evt.description}</p>

						{evt.program && (
							<Fragment>
								<h3>Program</h3>
								<p>{evt.program}</p>
							</Fragment>
						)}

						<h3>Artists</h3>
						<p>{evt.artists}</p>
					</div>

					<div className={styles.eventSide}>
						<h3>{new Date(evt.date).toDateString()}, {evt.time}</h3>
						<br />
						<h3>{evt.venue}</h3>
						<p>{evt.address}</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/events?slug=${slug}`)
	const events = await res.json()

	return {
		props: {
			evt: events[0],
		},
	}
}
