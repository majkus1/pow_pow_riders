import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Head from 'next/head'

const Instapage = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [lastScrollTop, setLastScrollTop] = useState(0)

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
				<title>Pow Pow Riders | INSTAGRAM</title>
				<meta
					name='description'
					content='Dołącz do naszej społeczności snowboardowej na Instagramie! Odkryj inspirujące zdjęcia, filmy i wskazówki od POW POW RIDERS.'
				/>
			</Head>
			<div className='wrapper'>
				<Nav />
				<div className='page-container'>
					<section className='insta-feed'>
						<div className='insta-head'>
							<h6>
								Zaobserwuj instagram<span> i bądź na bieżąco</span>
							</h6>
						</div>
						<div className='wrapper-insta'>
							<div className='insta-line'>
								<a href='' target='_blank'>
									<img src='/img/ig.webp' alt='logo instagrama bez tła' width='50' height='50' /> <p>@powpow_riders</p>
								</a>
							</div>
							<a href='https://www.instagram.com/powpow_riders/' target='_blank' className='insta-posts'>
								<div className='column'>
									<img src='/img/ig1.webp' alt='post z instagrama' className='img-posts-ig' />
									<img src='/img/ig2.webp' alt='post z instagrama' className='img-posts-ig' />
									<img src='/img/ig-10.webp' alt='post z instagrama' className='img-posts-ig' />
								</div>
								<div className='column'>
									<img src='/img/ig-11.webp' alt='post z instagrama' className='img-posts-ig' />
									<img src='/img/ig3.webp' alt='post z instagrama' className='img-posts-ig' />
									<img src='/img/ig4.webp' alt='post z instagrama' className='img-posts-ig' />
								</div>
								<div className='column'>
									<img src='/img/ig5.webp' alt='post z instagrama' className='img-posts-ig' />
									<img src='/img/ig6.webp' alt='post z instagrama' className='img-posts-ig' />
									<img src='/img/ig7.webp' alt='post z instagrama' className='img-posts-ig' />
								</div>
							</a>
						</div>
						<style jsx>{`
							.insta-feed {
								margin-top: 60px;
							}
							.insta-feed .insta-head h6 {
								font-size: 27px;
								padding-left: 3px;
								padding-right: 3px;
							}
							@media (min-width: 900px) {
								.insta-feed .insta-head h6 {
									font-size: 34px;
								}
							}
						`}</style>
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

export default Instapage
