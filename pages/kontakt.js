import Nav from '@/components/Nav'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const Contact = () => {
	return (
		<>
			<Head>
				<title>Pow Pow Riders | Kontakt</title>
				<meta
					name='description'
					content='Dołącz do naszej społeczności snowboardowej! Skontaktuj się z PPR i dowiedz się, jak możesz stać się częścią naszego świata.'
				/>
			</Head>
			<Nav />
			<div className='wrapper'>
				<div className='page-container'>
					<div className='head-social'>
						<a href='https://www.tiktok.com/@powpow_riders' target='_blank' className='tt-link'>
							<Image src='/img/tt.webp' width={28} height={28} alt='mini logo tiktoka' />
						</a>
						<a href='https://www.instagram.com/powpow_riders/' className='ig-link' target='_blank'>
							<Image src='/img/ig.webp' width={28} height={28} alt='mini logo instagrama' />
						</a>
						<a
							href='https://www.linkedin.com/in/kamila-%C5%9Bwi%C4%99czkowska-8aaab424a/?locale=es_ES'
							className='lin-link'
							target='_blank'>
							<Image src='/img/in.webp' width={28} height={28} alt='mini logo linkedin' />
						</a>
					</div>
					<section className='contact'>
						<h2>Kontakt</h2>
						<p>Przygotowujemy dla Was specjalne konsultacje z instruktorami i trenerami.</p>
						<p>Już niedługo więcej informacji...</p>
						<p className='info-localization'>Szkolenia snowboardowe odbywają się w Szczyrku i na Słowacji - Jasna (Chopok).<br></br> W resortach sieci GOPASS</p>
					</section>
					<section className='insta-feed'>
						<div className='insta-head'>
							<h6>póki co znajdziecie nas na insta</h6>
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
							.insta-feed .insta-head {
								padding-left: 15px;
								padding-right: 15px;
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

export default Contact
