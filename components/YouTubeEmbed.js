import PropTypes from 'prop-types'

import styles from '@/styles/YouTubeEmbed.module.css'

export default function YouTubeEmbed({ embedId }) {
	return (
		<div className={styles.embed}>
			<div className={styles.video}>
				<iframe
					width='590'
					height='332'
					src={`https://www.youtube.com/embed/${embedId}`}
					frameBorder='0'
					allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
					controlsList='nodownload'
					title='Oregon Symphony'
				/>
			</div>
			<div className={styles.text}>
				<h3>Carlos@18: Mozart’s “Serenata Notturna,” Serenade No. 6</h3>
				<p>
					During the 18th century, serenades were played to honor an important person, and usually performed in the background at large, festive gatherings. The unique scoring for strings and timpani sets 1776’s “Serenata Notturna” apart from Mozart’s other serenades, as does its three movements, instead of the usual six to eight. Its playful writing transforms music expected to be in the background into foreground listening pleasure.
				</p>
			</div>
		</div>
	)
}

YouTubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired
}
