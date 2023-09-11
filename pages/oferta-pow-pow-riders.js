import React, { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Head from 'next/head'
import Image from 'next/image'
import { GiPlayButton } from 'react-icons/gi'

const Offer = () => {
	const [selectedImage, setSelectedImage] = useState(null)

	const handleImageClick = src => {
		setSelectedImage(src)
	}
	const handleCloseClick = () => {
		setSelectedImage(null)
	}
	return (
		<>
			<Head>
				<title>POW POW RIDERS | Oferta</title>
				<meta
					name='description'
					content='Stań się częścią naszej społeczności snowboardowej i odkryj, co mamy do zaoferowania. Kursy, obozy i wiele więcej!'
				/>
			</Head>
			<div className='wrapper'>
				<div className='page-container'>
					<Nav />
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
					<section className='offer'>
						<div className='offer-head'>
							<h1>POZNAJMY SIĘ!</h1>
							<div className='why-powpow'>
								<div className='why-content'>
									<h2 className='why-head'>
										UCZYMY WEDŁUG PROFESJONALNEGO I KREATYWNEGO PROGRAMU ZAJĘĆ. <span>NA ZAJAWIE, Z SUPER VIBEM.</span>
										<span> WSPIERAMY ZDROWY SNOWBOARDING.</span>
									</h2>
									<p>
										Powder Power Riders to szerokie spojrzenie na snowboarding. Umożliwiające nieustanny rozwój pasji.
										To lepsza relacja z ciałem w sporcie i na co dzień, większa pewność siebie, możliwości, odważniejsze
										podejmowanie się trudnych ewolucji. Wszystko dzięki praktyce treningu mentalnego oraz wsparciu
										instruktorskiemu. Trening sportowy i mentalny jest dla nas równie ważny podczas szkoleń, jak i
										przede wszystkim przed sezonem zimowym. To większa spostrzegawczość, czujność na zagrożenie np.
										warunki atmosferyczne. Lepszy refleks, koordynacja, propriocepcja (czucie głębokie), dzięki
										programowi treningowo-rozwojowemu dla ridera.
									</p>
									<br></br>
									<p>
										To również w pierwszej kolejności maksymalnie profesjonalne szkolenia z techniki jazdy, freestyle,
										które prowadzą Instruktorzy Sits z polskiej czołówki instruktorskiej.
									</p>
									<div className='why-img-content'>
										<div className='why-img-container'>
											<img
												src='/img/bgc-mobile.webp'
												onClick={() => handleImageClick('/img/bgc-mobile.webp')}
												alt='zdjęcie grupowe z kursu asystennta instruktora z sezone 22/23'
											/>
											<img
												src='/img/group2.webp'
												onClick={() => handleImageClick('/img/group2.webp')}
												alt='zdjęcie grupowe ze szkolenia'
											/>
										</div>
									</div>
								</div>
							</div>

							<h4 className='boxes-offers-head'>SZKOLENIA SNOWBOARDOWE </h4>

							<div className='boxes-offers'>
								<div className='box-with-offer'>
									<h2>SZKOLENIA SITS</h2>
									<Link href='/zostan-instruktorem-snowboardu.html' className='link-to-page'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} />
										SITS & POW POW RIDERS
									</Link>
									<p className='dscrb-page'>dla Riders, którzy chcą być instruktorami snowboardingu</p>
								</div>
								<div className='box-with-offer'>
									<h2>SZKOLENIA INDYWIDUALNE</h2>
									<Link href='/kursy-indywidualne-snowboard.html' className='link-to-page'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} />
										SNOW POW CLASS
									</Link>
									<p className='dscrb-page'>
										dla Riders gotowych na intensywny czas na śniegu, dużo wiedzy praktycznej, teorii
									</p>
								</div>
								<div className='box-with-offer'>
									<h2>SZKOLENIA GRUPOWE</h2>
									<Link href='/kursy-grupowe-snowboard.html' className='link-to-page'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} />
										SNOW POW BOOT CAMP
									</Link>
									<p className='dscrb-page'>dla Riders chętnych na skill & chill, nowe znajomości snowboardowe</p>
								</div>
							</div>
						</div>
						<style jsx>{`
							.offer .why-powpow {
								margin-top: 25px;
							}
							.why-powpow .why-content {
								margin-top: 0px;
							}
							.why-powpow .why-content .why-head {
								text-align: start;
							}
							.why-powpow .why-content .why-head span {
								display: block;
							}
							.why-powpow .why-content p {
								text-align: start;
							}
							@media (min-width: 980px) {
								.why-powpow .why-content {
									padding-right: 25px;
									width: 75%;
								}
								.why-powpow .why-content p {
									text-align: justify;
									padding-left: 35px;
									padding-right: 35px;
								}
								.why-powpow .why-content .why-head {
									text-align: center;
									margin-bottom: 35px;
								}
								// .why-powpow .why-content .why-head span {
								// 	display: inline;
								// }
								.why-powpow .why-content .why-img-content {
									margin-top: 35px;
								}
							}
						`}</style>
					</section>

					<section className='ebook-infos'>
						<h5>FORMA DO SPORTÓW ZIMOWYCH I DESKOWYCH</h5>
						<div className='why-powpow'>
							<div className='why-content'>
								<h2 className='why-head'>trening mindset energia</h2>
								<ul>
									<li>8-tygodniowy program treningowo-rozwojowy w sportach zimowych oraz deskowych</li>
									<li>dwa plany treningowe różniące się stopniem zaawansowania </li>
									<li>ćwiczenia dedykowane dla riders</li>
									<li>13 ważnych tematów (podrozdziałów) o świadomym treningu, odporności, energii do sportu zimą </li>
									<li>osobna część ebooka o treningu mentalnym ridera zimowego</li>
									<li>#WORKBOOK a w nim ćwiczenia treningu mentalnego wspierające progres</li>
								</ul>
								<div className='one-line-btn'>
									<div className='check-our-lessons'>
										<a href='https://page.co/tUWEKk' className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Czytam dalej
										</a>
									</div>
									<div className='check-our-lessons'>
										<a
											href='/pow-store/produkt/8-tygodniowy-pogram-treningowo-rozwojowy-sporty-zimowe/'
											className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Chcę kupić e-book
										</a>
									</div>
								</div>
							</div>
							<div className='why-img'>
								<img src='/img/ebookks.webp' alt='logo promujące ebooka power knees od pow pow riders' />
							</div>
						</div>

						<style jsx>{`
							.why-powpow {
								margin-top: 25px;
								margin-bottom: 45px;
							}
							.ebook-infos .why-powpow .why-content .why-head {
								color: black;
							}
							.why-powpow .why-content .check-our-lessons .link-to-sits-shop {
								margin-bottom: 0px;
							}
							.why-powpow .why-content {
								margin-top: -50px;
								padding-bottom: 20px;
							}
							.why-img img {
								height: auto;
							}
							.ebook-infos .why-powpow .why-content .one-line-btn .check-our-lessons:nth-child(1) .link-to-sits-shop {
								background-color: #cddfe9;
								color: black;
							}
							.ebook-infos
								.why-powpow
								.why-content
								.one-line-btn
								.check-our-lessons:nth-child(1)
								.link-to-sits-shop:hover {
								-webkit-box-shadow: 12px 12px 0px 1px #cddfe9;
								-moz-box-shadow: 12px 12px 0px 1px #cddfe9;
								box-shadow: 12px 12px 0px 1px #cddfe9;
								background-color: white;
							}
							@media (min-width: 300px) {
								.ebook-infos .why-powpow .why-content .one-line-btn .check-our-lessons .link-to-sits-shop {
									justify-content: center;
									width: 255px;
								}
							}
							@media (min-width: 980px) {
								.why-powpow .why-content {
									margin-top: 0px;
								}
								.why-img img {
									width: 350px;
									height: 350px;
								}
							}
							// @media (min-width: 1500px) {
							// 	.ebook-infos .why-powpow .why-content .one-line-btn {
							// 		display: flex;
							// 		gap: 20px;
							// 	}
							// }
						`}</style>
					</section>
					<section className='about-pp'>
						<div className='why-powpow'>
							<div className='why-content'>
								<h2 className='why-head'>przedsezonowe warsztaty dla riders</h2>
								<p>
									Power People to przede wszystkim chęć dzielenia się wiedzą o zdrowiu, oparta o specjalistyczną wiedzę
									i doświadczenia kontuzji. To odzyskane zdrowie i wiara w to, że większość z nich można uniknąć.
									Powiemy Ci jak rozwijać się i cieszyć sezonem, Twoją pasją w pełni.
								</p>
								<p>
									Efekt warsztatów niesie zawsze ze sobą plusy w sportowym przygotowaniu, brak kontuzji, poszerzenie
									wiedzy o swoim ciele, naukę czytania symptomów spadku odporności oraz rozwój umiejętności jazdy i nowe
									ewolucje.
								</p>
								<div className='one-line-btn'>
									<div className='check-our-lessons'>
										<a href='https://page.co/5w8tf' className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Czytam dalej
										</a>
									</div>
									<div className='check-our-lessons'>
										<a href='/pow-store/produkt/power-ppl/' className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Zapisy (październik)
										</a>
									</div>
									<div className='check-our-lessons'>
										<a href='/pow-store/produkt/warsztaty-przedsezonowe-10-12-11-23/' className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Zapisy (listopad)
										</a>
									</div>
								</div>
							</div>
							<div className='why-img'>
								<img src='/img/warsztatypp.webp' alt='logo promujące warsztaty power people szkółki pow pow riders' />
							</div>
						</div>
						<style jsx>{`
							.why-powpow {
								margin-top: 25px;
								margin-bottom: 45px;
							}
							.why-powpow .why-content {
								margin-top: -50px;
								padding-bottom: 20px;
							}
							.why-img img {
								height: auto;
							}
							.about-pp .why-powpow .why-content .why-head {
								color: black;
							}
							.why-powpow .why-content .check-our-lessons .link-to-sits-shop {
								margin-bottom: 0px;
							}
							.why-powpow .why-content p {
								margin-top: 10px;
							}
							.about-pp .why-powpow .why-content .one-line-btn .check-our-lessons:nth-child(1) .link-to-sits-shop {
								background-color: #cddfe9;
								color: black;
							}
							.about-pp
								.why-powpow
								.why-content
								.one-line-btn
								.check-our-lessons:nth-child(1)
								.link-to-sits-shop:hover {
								-webkit-box-shadow: 12px 12px 0px 1px #cddfe9;
								-moz-box-shadow: 12px 12px 0px 1px #cddfe9;
								box-shadow: 12px 12px 0px 1px #cddfe9;
								background-color: white;
							}
							@media (min-width: 300px) {
								.about-pp .why-powpow .why-content .one-line-btn .check-our-lessons .link-to-sits-shop {
									justify-content: center;
									width: 275px;
								}
							}
							// @media (min-width: 980px) {
							// 	.why-powpow .why-content {
							// 		padding-right: 25px;
							// 	}
							// }
							@media (min-width: 980px) {
								.why-img img {
									width: 350px;
									height: 350px;
								}
								.why-powpow .why-content {
									margin-top: 0px;
								}
							}
							// @media (min-width: 1500px) {
							// 	.about-pp .why-powpow .why-content .one-line-btn {
							// 		display: flex;
							// 		gap: 20px;
							// 	}
							// }
						`}</style>
					</section>
					{selectedImage && (
						<div className='modal' onClick={handleCloseClick}>
							<button className='close' onClick={handleCloseClick}>
								X
							</button>
							<img src={selectedImage} alt='powiększony obraz' />
						</div>
					)}
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

export default Offer
