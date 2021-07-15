import Link from 'next/link'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import styles from '@/styles/Footer.module.css'

export default function Footer() {
	return (
		<footer>
			<div className={styles.footerBlockContainer}>
				<div className={styles.footerBlock}>
					<div className={styles.footerBlockInfo}>
						<h3>Tickets &amp; Customer Service</h3>
						<p>909 SW Washington, Portland, OR 97205</p>
						<p><a href="tel:503.228.1353">503-228-1353</a></p>
						<p><a href="mailto:symphony@orsymphony.org">symphony@orsymphony.org</a></p>
						<br />
						<h3>Administrative Office</h3>
						<p>921 SW Washington, Suite 200, Portland, OR 97205</p>
						<p><a href="tel:503.228.4294">503-228-4294</a></p>
					</div>
					<ul className={styles.footerBlockMenu}>
						<li><Link href='/'>About Us</Link></li>
						<li><Link href='/'>Career Opportunities</Link></li>
						<li><Link href='/'>Volunteer Opportunities</Link></li>
						<li><Link href='/'>Press Room</Link></li>
						<li><Link href='/'>Contact Us</Link></li>
					</ul>
					<div className={styles.footerBlockSocial}>
						<h3>Receive special offers &amp; updates</h3>
						<Link href='/'>
							<a className='btn btnPrimary'>Email Sign Up</a>
						</Link>
						<ul>
							<li>
								<a href="https://www.facebook.com/OregonSymphony/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
							</li>
							<li>
								<a href="https://twitter.com/OregonSymphony" target="_blank" rel="noreferrer"><FaTwitter /></a>
							</li>
							<li>
								<a href="https://www.instagram.com/oregonsymphony/" target="_blank" rel="noreferrer"><FaInstagram /></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.footerCopyrightContainer}>
				<ul className={styles.footerCopyright}>
					<li>
						<p>&copy; 2021 Oregon Symphony</p>
					</li>
					<li className='divider' />
					<li><Link href='/photo-credits'>
						<a>Photo Credits</a>
					</Link></li>
					<li className='divider' />
					<li><Link href='/legal'>
						<a>Legal Disclaimers</a>
					</Link></li>
				</ul>
			</div>
		</footer>
	)
}
