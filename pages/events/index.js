import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'

export default function EventsPage({ events, page, total }) {
	return (
		<Layout
			title='Calendar of Concerts &amp; Events | Oregon Symphony'
			description='Find tickets for upcoming events &amp; explore the schedule for Oregon Symphony concerts this month and beyond. Join us for classical, pops, jazz, holiday, rock, and kids orchestra concerts at the Arlene Schnitzer Concert Hall in Portland, Oregon.'
		>
			<h1 className='padding'>Events</h1>
			{events.length === 0 && <h3>No upcoming events</h3>}

			{events.map((evt) => (
				<EventItem key={evt.id} evt={evt} />
			))}

			<Pagination page={page} total={total} />
		</Layout>
	)
}

export async function getServerSideProps({ query: { page = 1 } }) {
	// Calculate start page
	const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

	// Fetch total/count
	const totalRes = await fetch(`${API_URL}/events/count`)
	const total = await totalRes.json()

	// Fetch events
	const eventRes = await fetch(
		`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
	)
	const events = await eventRes.json()

	return {
		props: { events, page: +page, total },
	}
}
