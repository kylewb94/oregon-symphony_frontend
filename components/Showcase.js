import Link from 'next/link'

import styles from '@/styles/Showcase.module.css'

export default function Showcase() {
	return (
		<div className={styles.showcase}>
			<video
				src='https://res.cloudinary.com/kylewb94/video/upload/v1625446124/showcase_ihuqlg.mp4'
				autoPlay
				muted
				loop
			/>
			<div className={styles.showcaseOverlay}></div>
			<div className={styles.showcaseText}>
				<h1>Choose Your Own Series On Sale Now</h1>
				<p>
					With a Choose Your Own Series, you can enjoy the music you love, with the concerts you want – on your schedule. Just choose three or more eligible concerts, and you’re done!
				</p>
				<Link href='/events'>
					<a className='btn btnImportant'>Get Started</a>
				</Link>
			</div>
		</div>
	)
}
