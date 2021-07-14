import Link from 'next/link'
import { useRouter } from 'next/router'

import qs from 'qs'

import EventItem from '@/components/EventItem'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function SearchPage({ events }) {
	const router = useRouter()

	return (
		<Layout title='Search Results | Oregon Symphony'>
			<Link href='/events'>
				<a className='btn btnSecondary'>Go Back</a>
			</Link>
			<h1 className='padding'>Search Results for {router.query.term}</h1>
			{events.length === 0 && <h3>No upcoming events</h3>}

			{events.map((evt) => (
				<EventItem key={evt.id} evt={evt} />
			))}
		</Layout>
	)
}

export async function getServerSideProps({ query: { term } }) {
	const query = qs.stringify({
		_where: {
			_or: [
				{ name_contains: term },
				{ venue_contains: term },
				{ address_contains: term },
				{ program_contains: term },
				{ artists_contains: term },
				{ description_contains: term },
			],
		},
	})

	const res = await fetch(`${API_URL}/events?${query}`)
	const events = await res.json()

	return {
		props: { events },
	}
}
