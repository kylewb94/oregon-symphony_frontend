import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import styles from '@/styles/Form.module.css'

export default function AddEventPage({ token }) {
	const [values, setValues] = useState({
		name: '',
		date: '',
		time: '',
		venue: '',
		address: '',
		program: '',
		artists: '',
		description: '',
		metaDescription: '',
	})

	const router = useRouter()

	const submitHandler = async (e) => {
		e.preventDefault()

		// Validation
		const hasEmptyFields = Object.values(values).some(
			(element) => element === ''
		)

		if (hasEmptyFields) {
			toast.error('Please fill in all fields')
		}

		const res = await fetch(`${API_URL}/events`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(values),
		})

		if (!res.ok) {
			if (res.status === 403 || res.status === 401) {
				toast.error('Unauthorized')
				return
			}
			toast.error('Something Went Wrong')
		} else {
			const evt = await res.json()
			router.push(`/events/${evt.slug}`)
		}
	}

	const inputChangeHandler = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	return (
		<Layout title='Add New Event | Oregon Symphony'>
			<Link href='/events'>
				<a className='btn btnSecondary'>Go Back</a>
			</Link>
			<h1>Add Event</h1>
			<ToastContainer />
			<form onSubmit={submitHandler} className={styles.form}>
				<div className={styles.container}>
					<div id={styles.name}>
						<label htmlFor='name'>Event Name</label>
						<input
							type='text'
							id='name'
							name='name'
							value={values.name}
							onChange={inputChangeHandler}
						/>
					</div>
					<div id={styles.date}>
						<label htmlFor='date'>Date</label>
						<input
							type='date'
							name='date'
							id='date'
							value={values.date}
							onChange={inputChangeHandler}
						/>
					</div>
					<div id={styles.time}>
						<label htmlFor='time'>Time</label>
						<input
							type='text'
							name='time'
							id='time'
							value={values.time}
							onChange={inputChangeHandler}
						/>
					</div>
					<div id={styles.venue}>
						<label htmlFor='venue'>Venue</label>
						<input
							type='text'
							name='venue'
							id='venue'
							value={values.venue}
							onChange={inputChangeHandler}
						/>
					</div>
					<div id={styles.address}>
						<label htmlFor='address'>Address</label>
						<input
							type='text'
							name='address'
							id='address'
							value={values.address}
							onChange={inputChangeHandler}
						/>
					</div>
					<div id={styles.program}>
						<label htmlFor='program'>Program</label>
						<input
							type='text'
							name='program'
							id='program'
							value={values.program}
							onChange={inputChangeHandler}
						/>
					</div>
					<div id={styles.artists}>
						<label htmlFor='artists'>Artists</label>
						<input
							type='text'
							name='artists'
							id='artists'
							value={values.artists}
							onChange={inputChangeHandler}
						/>
					</div>
					<div id={styles.metaDescription}>
						<label htmlFor='metaDescription'>Meta Description</label>
						<input
							type='text'
							name='metaDescription'
							id='metaDescription'
							value={values.metaDescription}
							onChange={inputChangeHandler}
						/>
					</div>
					<div id={styles.description}>
						<label htmlFor='description'>Event Description</label>
						<textarea
							type='text'
							name='description'
							id='description'
							value={values.description}
							onChange={inputChangeHandler}
						></textarea>
					</div>
				</div>
				<input
					type='submit'
					value='Add Event'
					className='btn btnPrimary'
					style={{
						width: 'auto',
						height: 'auto',
						fontFamily: '\'Poppins\', sans-serif',
						border: 'none'
					}}
				/>
			</form>
		</Layout>
	)
}

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req)

	return {
		props: {
			token,
		},
	}
}
