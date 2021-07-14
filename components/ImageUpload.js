import { useState } from 'react'

import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'

export default function ImageUpload({ evtId, imageUploaded, token }) {
	const [image, setImage] = useState(null)

	const submitHandler = async (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('files', image)
		formData.append('ref', 'events')
		formData.append('refId', evtId)
		formData.append('field', 'image')

		const res = await fetch(`${API_URL}/upload`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		})

		if (res.ok) {
			imageUploaded()
		}
	}

	const fileChangeHandler = (e) => {
		setImage(e.target.files[0])
	}

	return (
		<div className={styles.form}>
			<h1>Upload Event Image</h1>
			<form onSubmit={submitHandler}>
				<div className={styles.file}>
					<input type='file' onChange={fileChangeHandler} />
				</div>
				<input
					type='submit'
					value='Upload'
					className='btn btnPrimary'
					style={{
						width: 'auto',
						height: 'auto',
						fontFamily: '\'Poppins\', sans-serif',
						border: 'none'
					}}
				/>
			</form>
		</div>
	)
}