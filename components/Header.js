import { useContext, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

import Search from './Search'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'

const imgLoader = ({ src, width, quality }) => {
	return `https://res.cloudinary.com/kylewb94/image/upload/${src}?w=${width}&q=${quality || 75}`
}

export default function Header() {
	const { user, logout } = useContext(AuthContext)

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.logo}>
					<Link href='/'>
						<a><Image loader={imgLoader} src={'v1625409415/thumbnail_header_68fa837b09.png'} alt='Oregon Symphony logo' width={240} height={89} /></a>
					</Link>
				</div>

				<nav>
					<ul className={styles.menu}>
						<li>
							<Search />
						</li>
						{user ? (
							// If logged in
							<Fragment>
								<li>
									<Link href='/account/dashboard'>
										<a>Edit Events</a>
									</Link>
								</li>
								<li>
									<button
										onClick={() => logout()}
										className='btn btnHeader'
									>
										<FaSignOutAlt />&nbsp;Logout
									</button>
								</li>
							</Fragment>
						) : (
							// If logged out
							<Fragment>
								<li>
									<Link href='/events'><a>Events</a></Link>
								</li>
								<li>
									<Link href='/account/login'>
										<a
											className='btn btnHeader'
											style={{ lineHeight: 'normal' }}
										>
											<FaSignInAlt />&nbsp;Login
										</a>
									</Link>
								</li>
							</Fragment>
						)}
					</ul>
				</nav>
			</div>
		</header>
	)
}
