import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Head from 'next/head'

const Group = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [lastScrollTop, setLastScrollTop] = useState(0)
	const navbarRef = useRef(null)

	useEffect(() => {
		const onScroll = () => {
			const { pageYOffset } = window
			if (pageYOffset > lastScrollTop) {
				setIsScrolled(false)
			} else if (pageYOffset < lastScrollTop) {
				setIsScrolled(true)
			}
			setLastScrollTop(pageYOffset <= 0 ? 0 : pageYOffset)
		}

		window.addEventListener('scroll', onScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [lastScrollTop])

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 2) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', scrollListener)

		return () => {
			window.removeEventListener('scroll', scrollListener)
		}
	}, [])

	return (
		<>
			<Head>
				<title>Pow Pow Riders | KURSY GRUPOWE</title>
				<meta
					name='description'
					content='Oferujemy profesjonalnie prowadzone kursy grupowe dla snowboardzistów na każdym poziomie zaawansowania. Doświadcz różnicy z POW POW RIDERS.'
				/>
			</Head>
			<div className='wrapper'>
				<div className='page-container'>
					<Nav />
					<section className='info-soon'>
						<p>
							Szczegółowe informacje wkrótce.<br></br> <br></br>SNOW POW BOOT CAMP DLA MŁODZIEŻY<br></br> SNOW POW BOOT
							CAMP DLA DOROSŁYCH<br></br> SNOW POW BOOT CAMP SEASON OPENING
						</p>
					</section>

					<footer className='footer-company'>
						<div className='footer-company-txt'>
							<h6 className='company-name-cre'>CRE ∞ POWDER POWER RIDERS</h6>
						</div>
						<div className='links-under'>
							<Link href='/forma-na-snowboard-i-narty.html'>FORMA DO SPORTÓW ZIMOWYCH</Link>
							<Link href='/pow-store/'>POW-STORE</Link>
							<Link href='/instagram-pow-pow-riders'>INSTA</Link>
						</div>
					</footer>
				</div>
			</div>
		</>
	)
}

export default Group
