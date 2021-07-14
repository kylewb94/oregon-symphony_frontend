import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'
import { parseCookies } from '@/helpers/index'

export default function DashboardPage({ events, token, event, page, total }) {
	const router = useRouter()

	const deleteEvent = async (id) => {
		if (confirm('Are you sure?')) {
			const res = await fetch(`${API_URL}/events/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			const data = await res.json()

			if (!res.ok) {
				toast.error(data.message)
			} else {
				router.reload()
			}
		}
	}

	return (
		<Layout title='Edit Events | Oregon Symphony'>
			<h1 className='padding'>Events</h1>
			{events.length === 0 && <h3>No upcoming events</h3>}

			{events.map((evt) => (
				<EventItem key={evt.id} evt={evt} deleteHandler={deleteEvent} />
			))}

			<Pagination page={page} total={total} />
		</Layout>
	)
}

export async function getServerSideProps({ req, query: { page = 1 } }) {
	const { token } = parseCookies(req)

	const res = await fetch(`${API_URL}/events/me`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	const events = await res.json()

	// Calculate start page
	const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

	// Fetch total/count
	const totalRes = await fetch(`${API_URL}/events/count`)
	const total = await totalRes.json()

	// Fetch events
	const eventRes = await fetch(
		`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
	)
	const event = await eventRes.json()

	return {
		props: {
			events,
			token,
			page: +page,
			event,
			total
		},
	}
}