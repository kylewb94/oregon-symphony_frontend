import Image from 'next/image'

import Layout from "@/components/Layout"
import YouTubeEmbed from '@/components/YouTubeEmbed'
import styles from '@/styles/Studio125.module.css'

const imgLoader = ({ src, width, quality }) => {
	return `https://res.cloudinary.com/kylewb94/image/upload/${src}?w=${width}&q=${quality || 75}`
}

export default function studio125Page() {
	return (
		<Layout title='Studio 125 | Oregon Symphony'>
			<div className={styles.title}>
				<Image loader={imgLoader} src={'v1625675259/medium_studio125_94d9b83dcb.png'} alt='Studio 125' width={720} height={94} />
				<h1>A new digital destination for music</h1>
			</div>
			<h2>Featured Video</h2>
			<YouTubeEmbed embedId='fOkhzd2U2bo' />
		</Layout>
	)
}
