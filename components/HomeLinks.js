import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/HomeLinks.module.css'

const imgLoader = ({ src, width, quality }) => {
	return `https://res.cloudinary.com/kylewb94/image/upload/${src}?w=${width}&q=${quality || 75}`
}

export default function HomeLinks() {
	return (
		<div className={styles.homeLinks}>
			{/* ITEM 1 */}
			<div className={styles.homeLinksText} id={styles.text1}>
				<h1>Welcome to Oregon Symphony&apos;s Studio 125</h1>
				<p>
					Your one-stop destination for all things digital from the Oregon Symphony. Discover new, never-before-seen performances like Music Director Carlos Kalmar conducting musicians of your Oregon Symphony in our Carlos@18 series.
				</p>
				<Link href='/'>
					<a className='btn btnPrimary'>Explore</a>
				</Link>
			</div>
			<div className={styles.homeLinksImg} id={styles.img1}>
				<Image loader={imgLoader} src={'v1625499708/studio125_627d79ac6a.jpg'} alt='Studio 125' width={784} height={450} />
			</div>

			{/* ITEM 2 */}
			<div className={styles.homeLinksImg} id={styles.img2}>
				<Image loader={imgLoader} src={'v1625499726/season_3b8737648b.jpg'} alt='2021/22 Season' width={784} height={450} />
			</div>
			<div className={styles.homeLinksText} id={styles.text2}>
				<h1>Explore the 2021/22 Season</h1>
				<p>
					Delve into the wide variety of live concerts, including Danzmayr’s inaugural Classical Season that launches with Mahler&apos;s &quot;Resurrection&quot; Symphony No 2. And, there&apos;s more to experience with the Pops Series, Kids concerts and Popcorn Package -- with the orchestra performing scores live to films shown on the big screen.
				</p>
				<Link href='/events'>
					<a className='btn btnPrimary'>Calendar</a>
				</Link>
			</div>

			{/* ITEM 3 */}
			<div className={styles.homeLinksText} id={styles.text3}>
				<h1>Meet Oregon Symphony&apos;s new music director,<br />David Danzmayr</h1>
				<p>
					The Oregon Symphony is proud to announce that acclaimed Austrian-born conductor David Danzmayr will serve as our next Music Director with the launch of the 2021/22 Season.
				</p>
				<Link href='/'>
					<a className='btn btnPrimary'>Learn More</a>
				</Link>
			</div>
			<div className={styles.homeLinksImg} id={styles.img3}>
				<Image loader={imgLoader} src={'v1625499734/danzmayr_1e9052ab53.jpg'} alt='David Danzmayr' width={784} height={450} />
			</div>

			{/* ITEM 4 */}
			<div className={styles.homeLinksImg} id={styles.img4}>
				<Image loader={imgLoader} src={'v1625499745/donate_2e44c6b36c.jpg'} alt='Donate to Oregon Symphony' width={784} height={450} />
			</div>
			<div className={styles.homeLinksText} id={styles.text4}>
				<h1>Help us keep playing</h1>
				<p>
					We need music in our lives, now more than ever. It’s crucial that your Oregon Symphony continues to innovate and evolve, finding new ways to connect our community through incredible music. We ask you to be here for us, so that we can be here for you – as we have been for nearly 125 years.
				</p>
				<Link href='/'>
					<a className='btn btnPrimary'>Donate</a>
				</Link>
			</div>
		</div>
	)
}
