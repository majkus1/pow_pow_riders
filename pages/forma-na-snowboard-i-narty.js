import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { GiPlayButton } from 'react-icons/gi'
import { AiFillCaretDown } from 'react-icons/ai'

const Snwbski = () => {
	// const reviews = [
	// 	{
	// 		opinion: null,
	// 		author: 'Marcel o Ebook Power Knees',
	// 		words: 'EWO',
	// 		words2: 'LUCJE',
	// 		image: '/img/opinion-ebook.webp',
	// 	},
	// 	{
	// 		opinion: null,
	// 		author: 'Sylwia o Ebook Power Knees',
	// 		words: 'PRO',
	// 		words2: 'GRES',
	// 		image: '/img/opinion-ebook2.webp',
	// 	},
	// ]

	// const [currentIndex, setCurrentIndex] = useState(0)

	// const goRight = () => {
	// 	setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
	// }
	// const [faqs, setFaqs] = useState([
	// 	{
	// 		question: 'Jestem po kontuzji, czy mogę ćwiczyć z Power Knees?',
	// 		answer:
	// 			'Jeśli właśnie wracasz do zdrowia, to wspaniale! Ale w takim przypadku zawsze trzeba być ostrożnym. Zadaj sobie pytanie, czy czujesz już pełną sprawność, czy proces leczenia został zakończony. Do treningów w  Power Knees niezbędne jest bycie zdrowym. Są tu też ćwiczenia, które byłyby zdecydowanie na korzyść po kontuzji, np. docisk, ale wiele też zależy od tego, jaką kontuzję masz za sobą. Ufaj swojemu ciału i wskazówkom fizjo oraz lekarza.',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Czy e-book zawiera ćwiczenia na schodach z insta?',
	// 		answer:
	// 			'Ćwiczenia dla riders z wykorzystaniem schodów można znaleźć na instagramie @powpow_riders. Są to pojedyncze ćwiczenia. Te, które możecie znaleźć w e-booku nie pokrywają się z nimi oraz tworzą plan 8-tygodniowy. W nim z kolei zawarta jest progresja, czyli wzrost ilości powtórzeń konkretnych ćwiczeń, ich stopień zaawansowania, złożoność oraz zastosowanie akcesoriów treningowych.   ',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Czy jest potrzebny sprzęt?',
	// 		answer:
	// 			'Nie jest niezbędny, ale bardzo fajnie jakby się pojawił. Jeśli nie od razu, to chociaż z czasem. W e-booku ćwiczyć będziesz głównie z gumą oporową i dyskiem sensorycznym. Są to akcesoria, które zdecydowanie warto mieć, są niedrogie, zajmują niewiele miejsca, a mocno wpłyną na efekty ćwiczeń. Jednak na samym początku możesz zacząć bez akcesoriów. W niektórych ćwiczeniach z gumą treningową będziesz mieć możliwość użycia małego ciężaru. We wszystkich ćwiczeniach z dyskiem możesz użyć poduszki. Podsumowując, na strat domowe zamienniki są w porządku. Po jednym/dwóch tygodniach ćwiczeń warto rozejrzeć się za sprzętem.',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Jak pobrać e-book po zakupie?',
	// 		answer:
	// 			'Gdy zrealizujesz zamówienie korzystając z płatności: \n -automatycznej, Twój e-book będzie dostępny do pobrania od razu po zakupie,\n -tradycyjnej, od razu po zaksięgowaniu wpłaty zamówienie zmieni status na zrealizowane, wtedy Twój e-book automatycznie pojawi się na Twoim e-mailu i/lub koncie w Pow Store.',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'W jakim formacie jest e-book?',
	// 		answer:
	// 			'Jest to e-książka, którą pobierzesz w formacie PDF. Najbardziej rekomendowane do jej odtworzenia są: smartfon, tablet, komputer. ',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Czy trening siły eksplozywnej poza sezonem też ma sens?',
	// 		answer:
	// 			'Tak. Zdecydowanie tak. Trenowanie eksplozywne to między innymi zachowanie wydajności mięśni, ale też mega test dla formy i ogromna dawka adrenaliny, więc czemu by sobie odmawiać? ',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Jak korzystać z Power Knees w trakcie sezonu?',
	// 		answer:
	// 			'Odpowiem pytaniem: Jaką jazdę planujesz? Park/stok, rekreacyjnie/freeride? Pod to zaplanuj resztę. Sporty śnieżne, niezależnie od dyscypliny, zawsze są intensywnym treningiem, przede wszystkim dla dolnego ciała. Możesz więc cały dzień na śniegu porównać do zmęczenia po W— F—. Cały dzień z deską czy nartami to też ogrom koncentracji, koordynacji, balansu, więc robienie W— V— w pełnej intensywności, w tym samym dniu, który spędziłeś na stoku, czy dzień później, nie do końca jest dobrym pomysłem. Ale fajnym pomysłem po dniu na stoku może być np. długi spacer czy relaksująca sesja jogi i oczywiście W— B— z e-booka. ',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Czy pojedyncze ćwiczenia z  planu można stosować w rozgrzewce przed jazdą na śniegu?',
	// 		answer:
	// 			'No jasne! Ćwiczenia na balans z  W— V— czy eksplozywne z W— F— na pewno pobudzą czucie głębokie, siłę eksplozywną, uruchomią mięśnie całego ciała i core do pracy. Na śniegu więc będziesz mieć fajny vibe, wzrośnie umiejętność dynamicznego manewrowania środkiem ciężkości, a umysł odpali się na śnieżne przygody, wzmocni się koncentracja, pobudzi kreatywność.',
	// 		isOpen: false,
	// 	},
	// ])

	// const toggleAnswer = index => {
	// 	const newFaqs = [...faqs]
	// 	newFaqs[index].isOpen = !newFaqs[index].isOpen
	// 	setFaqs(newFaqs)
	// }

	useEffect(() => {
		if (window.location.hash === '#faq') {
			const blogSection = document.getElementById('faq')
			if (blogSection) {
				blogSection.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	// const styleObject = {
	// 	marginTop: '20px',
	// 	background: 'transparent',
	// }
	// const bgcblockq = {
	// 	backgroundColor: 'white',
	// 	opacity: '0.85',
	// }
	return (
		<>
			<Head>
				<title>Pow Pow Riders | Forma na snowboard i narty</title>
				<meta
					name='description'
					content='Odkryj jak poprawić swoją formę na snowboardzie i nartach z Pow Pow Riders. Oferujemy profesjonalne treningi i kursy, które pomogą Ci osiągnąć maksymalną wydajność i bezpieczeństwo na stoku.'
				/>
				<link rel='canonical' href='https://www.powpowriders.com/forma-na-snowboard-i-narty.html' />
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

					<section className='ebook-infos'>
						<h1>
							FORMA NA<span> SNOWBOARD I NARTY</span>
						</h1>
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
								<p className='dscrb-ebook-page'>
									<span>Część treningu sportowego</span> to przejrzyste, konkretne rozpiski na każdy dzień tygodnia
									przez 2 miesiące. Karty treningowe zawierają w sobie niezbędne do wykonania treningu informacje. Aż
									chcę się odpalić dobrą muzykę i zacząć trening!
								</p>
								<p className='dscrb-ebook-page'>
									{' '}
									Resztę wskazówek, tj. sposób wykonania wraz z dokładnym opisem każdego z ćwiczeń, poznasz, czytając
									karty poszczególnych ćwiczeń. To w nich poznasz dany ruch oraz skorygujesz swoją technikę. To bardzo
									ważne, aby trening spełniał swoje funkcje i był bezpieczny dla Twojego zdrowia.{' '}
								</p>
								<br></br>
								<p className='dscrb-ebook-page'>
									<span>Część treningu mentalnego</span> to bardzo trudno dostępna na polskim rynku wiedza o treningu
									mentalnym ridera zimowego. Przygotowanie holistyczne, jak też dbanie o zdrowie całościowo jest
									niepełne bez niej.
								</p>
								<p className='dscrb-ebook-page'>
									W tej części przeczytasz krótko o 3 ważnych tematach, na które należy zwrócić uwagę, a wskazówki w
									nich zawarte skonfrontować wewnętrznie samemu ze sobą, aby mieć pełną kontrolę nad własnym zdrowiem i
									rozwojem w śnieżnej pasji.
								</p>
								<br></br>
								<p className='dscrb-ebook-page'>
									<span>Ale to nie wszystko!</span> Ta część zawiera również #workbook, czyli zeszyt ćwiczeń. Tę część
									e-booka warto wydrukować i wypełniać zawsze kiedy będziesz szykować się do nowej ewolucji
									snowboardowej lub narciarskiej.
								</p>

								<div className='one-line-btn'>
									<div className='check-our-lessons'>
										<a href='https://page.co/tUWEKk' className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Czytam dalej
										</a>
									</div>
									<div className='check-our-lessons'>
										<a
											href='https://powpowriders.com/pow-store/produkt/8-tygodniowy-pogram-treningowo-rozwojowy-sporty-zimowe/'
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
						.ebook-infos h1 {
							font-size: 27px;
							padding-left: 3px;
							padding-right: 3px;
						}
							.why-powpow {
								margin-top: 25px;
								margin-bottom: 45px;
							}
							.why-powpow .why-content {
								margin-top: -50px;
								padding-bottom: 20px;
							}
							.why-powpow .why-content .dscrb-ebook-page {
								padding-left: 6px;
								padding-right: 6px;
							}
							.why-powpow .why-content .check-our-lessons .link-to-sits-shop {
								margin-bottom: 0px;
							}
							.why-img img {
								height: auto;
							}
							.ebook-infos .why-powpow .why-content .why-head {
								color: black;
							}
							.ebook-infos h1 {
								letter-spacing: 4px;
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
							@media (min-width: 620px) {
								.ebook-infos h1 span {
									display: inline;
								}
							}
							@media (min-width: 900px) {
								.ebook-infos h1 {
									font-size: 34px;
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
							// @media (min-width: 1300px) {
							// 	.ebook-infos .why-powpow .why-content .one-line-btn {
							// 		display: flex;
							// 		gap: 20px;
							// 	}
							// }
						`}</style>
					</section>

					{/* <section id='faq-ebook'>
						<div className='faq-txt' id='faq'>
							<p className='dscrb-ebook-page'>
								<span>faq</span> Częste pytania o e-booka:
							</p>
							{faqs.map((faq, index) => (
								<>
									<div className='box-faq' key={index}>
										<p className='ask-ebook'>{faq.question}</p>
										<button
											onClick={() => toggleAnswer(index)}
											className='btn-faq'
											aria-label={faqs[index].isOpen ? 'Ukryj odpowiedź' : 'Pokaż odpowiedź'}>
											<AiFillCaretDown className='check' style={{ marginRight: 5 }} />
										</button>
									</div>
									{faq.isOpen && <p className='answ-ebook'>{faq.answer}</p>}
								</>
							))}
						</div>
						<div className='faq-img'>
							<img src='/img/mockup-three.webp' alt='' />
						</div>
					</section> */}
{/* 
					<section className='reviews' style={styleObject}>
						<div className='review-head'>
							<h3 className='feel-head'>
								OPINIE O <span>EBOOK POWER KNEES</span>
							</h3>
						</div>

						<div id='content'>
							<div className='box-review-content'>
								<div className='testimonial'>
									<blockquote style={bgcblockq}>
										{reviews[currentIndex].opinion && <p className='review-txt'>{reviews[currentIndex].opinion}</p>}
										{reviews[currentIndex].image && (
											<img src={reviews[currentIndex].image} alt='Opinia w formie obrazu' className='opinion-img' />
										)}
										<div className='bgc-reviews-words'>
											{reviews[currentIndex].words && !reviews[currentIndex].image && (
												<p className='line-after'>{reviews[currentIndex].words}</p>
											)}
											{reviews[currentIndex].words2 && !reviews[currentIndex].image && (
												<p className='line-before'>{reviews[currentIndex].words2}</p>
											)}
											{reviews[currentIndex].words3 && !reviews[currentIndex].image && (
												<p className='line-after'>{reviews[currentIndex].words3}</p>
											)}
										</div>
										<button onClick={goRight}>{'>'}</button>
									</blockquote>
									<div className='who'></div>
									<p className='author'>{reviews[currentIndex].author}</p>
								</div>
							</div>
						</div>
						<style jsx>{`
							.reviews .review-head .feel-head {
								text-transform: uppercase;
								color: #0097d0;
								font-family: 'Bely Display', sans-serif;
								font-weight: 400;
							}
							@media (min-width: 620px) {
								.reviews .review-head .feel-head span {
									display: inline;
								}
							}
						`}</style>
					</section> */}

					<section className='ebook-session'>
						<div className='box-session'>
							<img src='/img/session-ebook.webp' alt='sesja zdjęciowa autorki dla ebooka' />
							<img src='/img/session-ebook2.webp' alt='sesja zdjęciowa autorki dla ebooka' />
						</div>
					</section>

					<section className='about-pp'>
						<div className='why-powpow'>
							<div className='why-content'>
								<h3 className='why-head'>przedsezonowe warsztaty dla riders</h3>
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
							.why-powpow .why-content .check-our-lessons .link-to-sits-shop {
								margin-bottom: 0px;
							}
							.why-img img {
								height: auto;
							}
							.why-powpow .why-content p {
								margin-top: 10px;
							}
							.about-pp .why-powpow .why-content .why-head {
								color: black;
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
							// @media (min-width: 1300px) {
							// 	.about-pp .why-powpow .why-content .one-line-btn {
							// 		display: flex;
							// 		gap: 20px;
							// 	}
							// }
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

export default Snwbski
