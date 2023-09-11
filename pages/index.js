import React, { useState, useEffect } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import { GiPlayButton } from 'react-icons/gi'
import Link from 'next/link'
import Nav from '../components/Nav'
import Head from 'next/head'

const Home = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [lastScrollTop, setLastScrollTop] = useState(0)
	const [selectedImage2, setSelectedImage2] = useState(null)

	const handleImageClick2 = src => {
		setSelectedImage2(src)
	}
	const handleCloseClick2 = () => {
		setSelectedImage2(null)
	}

	const reviews = [
		{
			opinion:
				'Miałem przyjemność zrealizować z powpow riders szereg wyjazdów, w trakcie których szlifowałem swoje umiejętności snowboardowe. Lekcje były organizowane w bardzo elastyczny i efektywny sposób, z nastawieniem na kluczowe techniki jazdy i ewolucje. \n\nOsiąganie kolejnych stopni umiejętności było oparte o zintegrowane trenowanie składowych komponentów, a zajęcia były omawiane w trakcie analiz video. Pozwoliło mi to na wyeliminowanie podstawowych błędów nabytych w trakcie własnych lat nauki, których nawet nie byłem świadom. \n\nDodatkowo zaczęły mi wychodzić coraz częściej ewolucje, o których zawsze marzyłem. Zajęcia były prowadzone w bezpieczny i przemyślany sposób, pozwalający skupić się na tym co najważniejsze, czyli dobrej i przyjemnej jeździe w zacnym towarzystwie ! ',

			author: 'Kacper o szkoleniu: Asystent Instruktora SITS / SNOW POW CLASS / SNOW POW CAMP / FREESTYLE DAY',
			words: 'EWO',
			words2: 'LUCJE',
			image: null,
		},
		{
			opinion:
				'Mega polecam Szkolenia SITS z POW POW RIDERS. W mojej jeździe zmieniło się wszystko, na plus, ale najbardziej pewność siebie na desce.\nPomogło mi zrobić duży progres na skoczniach i przeszkodach. Atmosfera, jaką się tworzy na kursie bardzo pomaga w podnoszeniu skilla oraz próbowaniu nowych rzeczy, każdy każdego motywuje, każdy każdemu kibicuje. Zajęcia super prowadzone.\nPani Kamila zawsze pomocna + największy motywator jakiego można spotkać. Pow Pow Familly 🔥',

			author: 'Witek o szkoleniu: Asystent Instruktora SITS',
			words: 'PRO',
			words2: 'GRES',
			image: null,
		},
		{
			opinion:
				'Szkolenie Sits to był bardzo intensywny tydzień, nigdy w tak krótkim czasie nie dowiedziałem się tyle o snowboardingu ile podczas tego tygodnia. Jestem dumny z opanowania skrętu ciętego WN i ze śmigu ciętego, w ogóle jazda na krawędzi stała się pewna i trzymająca się nawet na lodzie. Wszystkie skręty cięte wjechały na wyższy poziom:) Przełamałem się też po traumatycznych przeżyciach z przeszłości do skoku na skoczni. Polecam szkołę snowboardingu POW POW Riders GDYŻ: \n \n>instruktorzy POW POW kompleksowo dbają o każdego uczestnika szkolenia\n >mają indywidualne podejście\n >tworzą rodzinną, ciepłą atmosferę \n>oprócz szkolenia na desce na stoku prowadzą również treningi mentalne i ogólnorozwojowe.\n\n Dla Kamili, właścicielki POW POW RIDERS, snowboarding to nie tylko sposób na zarabianie pieniędzy, ale pasja, serce, ona tym żyje, tym oddycha. To zaraźliwe. Kama Kama Kama Kamili ON. Co więcej, wartości etyczne, kultura osobista i zrozumienie innych mają w POW POW duże znaczenie, w związku z tym czujesz się bezpiecznie i zaopiekowany. Co nie zdarza się często. Bardzo ważne jest też to, że POW POW to nie tylko szkoła, to rodzina, która zostaje z Tobą na dłużej, oczywiście tylko wtedy jeśli tego chcesz i potrzebujesz. Family meet vol. 1 to tradycja, która dla mnie zrodziła się z chęci bycia częścią wspólnoty riders respektujących zrównoważony rozwój, wolność, jedność, ceniących moment i piękno gór.',

			author: 'Beniamin o szkoleniu: III stopień SITS, SNOW POW CLASS',
			words: 'PA',
			words2: 'SJA',
			image: null,
		},
		{
			opinion:
				'Pow Pow Riders wymiata pod wieloma aspektami. Cieszę się, że miałam okazje uczestniczyć w ich kursie SiTS, podczas którego w mojej głowie poszerzyło się rozumowanie snowboardingu ;) \n\nByło kameralnie i to było dużym plusem podczas kursu, był bezpośredni kontakt z instruktorką Kamilą i bardzo ciepła atmosfera, którą stwarzała instruktorka. Kurs polegał nie tylko i wyłącznie na poszerzaniu wiedzy teoretycznej czy też praktycznej, bo praktyki było najwięcej, co bardzo cenię. \n\nDziało się znacznie więcej. Była okazja do wspólnych analiz, pytań i odpowiedzi, rozmów, podczas których można było dowiedzieć się bardzo wiele cennych informacji. Najbardziej podjarana jestem tym, że niektóre elementy, które Kamila przeplatała podczas jazdy na stoku, odblokowały mi myślenie i kreatywność, którą wykorzystam podczas swoich lekcji jako instruktorka. \n\nPow Pow Riders to pro wybór na instruktora, jest sztos ! Na pewno nie poprzestanę na kursie asystenta i myślę, że dalszy krok do przodu będzie z Pow Pow, bo to świetny wybór ;)',

			author: 'Brygida o szkoleniu: Asystent Instruktora SITS',
			words: 'PRA',
			words2: 'KTY',
			words3: 'KA',
			image: null,
		},
		{
			opinion:
				'Jestem niezwykle zadowolony z tygodniowego szkolenia na Asystenta Instruktora w Pow Pow Riders. Jakość szkolenia była znakomita. Instruktorzy podchodzili do nauczania w sposób profesjonalny, ale jednocześnie przyjazny i zrozumiały. \n\nIch pasja i wiedza na temat snowboardu były inspirujące, co pozwoliło mi nie tylko poprawić technikę jazdy, ale także nabrać pewności siebie na snowboardzie, zarówno jeżdżąc na "słabszą" nogę, jak i podczas freestyleu. Warto też dodać, że instruktorzy oferowali nieocenione wsparcie mentalne, co dodatkowo pomogło mi uwierzyć w swoje umiejętności. \n\nSerdecznie polecam tę szkołę każdemu, kto pragnie rozwijać się jako snowboardzista i instruktor. Rozwój z Pow Pow Riders dzięki profesjonalnym instruktorom, świetnej jakości szkolenia i w przyjaznej atmosferze.',

			author: 'Michał o szkoleniu: Asystent Instruktora SITS',
			words: 'WSPA',
			words2: 'RCIE',
			image: null,
		},
		{
			opinion:
				'Za mną już kilkanaście sezonów na desce, więc z początku myślałem, że jedynie wyćwiczę to co już potrafię i niczego nowego się nie nauczę. No a jednak. Kamila zauważyła błędy w technice i freestyle i eliminowała je u mnie na stoku. \n\nĆwiczenia, które proponowała, pomogły mi przełamać się w jeździe na drugą nogę, pozbyć się złych nawyków i lęków przed niektórymi trikami, a nawet pokazała mi, jak lepiej wykonać triki, które umiałem. Kama to świetna instruktorka, dobiera najlepsze ćwiczenia dla każdego stopnia zaawansowania. \n\nZmęczenie! Kama chyba nie zna tego słowa. Jest bardzo zaangażowana w nauczanie, czasem nawet po nocy z ekipą oglądaliśmy nasze nagrania ze stoku :d Mówiła nam, co trzeba poprawić żeby trik wyglądał lepiej. Ciągle w dobrym humorze i pozytywnym nastawieniu do swoich uczniów – ziomali.',

			author: 'Konrad o szkoleniu: SNOW POW CAMP',
			words: 'ZIO',
			words2: 'MA',
			words3: 'LE',
			image: null,
		},
		{
			opinion: null,

			author: 'Jakub o szkoleniu: Asystent Instruktora SITS',
			image: '/img/opinion-screen.webp',
		},
		{
			opinion: null,

			author: 'Piotr o szkoleniu: SNOW POW CLASS',
			image: '/img/opinion-screen-2.webp',
		},
		{
			opinion: null,

			author: 'Bartek o szkoleniu: Asystent Instruktora SITS',
			image: '/img/opinion-screen-4.webp',
		},
		// {
		// 	opinion: null,

		// 	author: 'UZUPEŁNIĆ',
		// 	image: '/img/opinion-screen-3.webp',
		// },
		{
			opinion: null,

			author: 'Marcel o szkoleniu: II stopień SITS',
			image: '/img/screen-opiniones.webp',
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const goRight = () => {
		setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
	}

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

	useEffect(() => {
		if (window.location.hash === '#blog') {
			const blogSection = document.getElementById('blog')
			if (blogSection) {
				blogSection.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	return (
		<>
			<Head>
				<title>POW POW RIDERS | POWDER POWER RIDERS</title>
				<meta
					name='description'
					content='Snowboard z Pow Pow Riders! Profesjonalna szkoła oferująca kursy snowboardowe, treningi mentalne, program treningowy. Dołącz do nas!'
				/>
				<link rel='canonical' href='https://www.powpowriders.com/' />
			</Head>
			<div className='wrapper'>
				<Nav />
				<div className='page-container'>
					<section className='home'>
						<div className='image-container'>
							<ParallaxProvider>
								<Parallax speed={-10}>
									<img
										src='/img/bgc-mobile-bg.webp'
										className='mobileheadimg'
										width={'100%'}
										height={885}
										loading='eager'
										alt='zdjęcie grupowe podczas szkolenia na stoku narciarskim'
									/>
								</Parallax>
							</ParallaxProvider>
							<ParallaxProvider>
								<Parallax speed={-30}>
									<img
										src='/img/main-img-medium-2.webp'
										alt='zdjęcie grupowe podczas szkolenia na stoku narciarskim'
										className='mediumheadimg'
										width={'100%'}
										height={750}
										loading='eager'
									/>
								</Parallax>
							</ParallaxProvider>
							<ParallaxProvider>
								<Parallax speed={-40}>
									<img
										src='/img/bgc-desktop.webp'
										alt='zdjęcie grupowe z flagą szkółki podczas szkolenia na stoku narciarskim'
										className='desktopheadimg'
										width={'100%'}
										height={890}
										loading='eager'
									/>
								</Parallax>
							</ParallaxProvider>

							<div className='centerhead'>
								<h1>Pow Pow Riders</h1>
								<h2 className='new'>Cześć, Riders!</h2>
								<div className='btns'>
									<Link href='/oferta-pow-pow-riders.html' className='btn-ones'>
										<GiPlayButton className='checks' />
										Odkryj, co oferujemy
									</Link>
									<Link href='https://page.co/tUWEKk' className='btn-twos'>
										<GiPlayButton className='checks' />
										Program treningowy ridera
									</Link>
									<Link href='/zostan-instruktorem-snowboardu.html' className='btn-thre'>
										<GiPlayButton className='checks' />
										Chcę zostać Instruktorem
									</Link>
								</div>
							</div>
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
						</div>
					</section>

					<section className='ebook'>
						<div className='ebook-content'>
							<div className='ebooktxt'>
								<h2>Program treningowo-rozwojowy w sportach zimowych oraz deskowych</h2>
								<ul>
									<li>Czy chcesz robić postępy, progres, ale nie wiesz, od czego zacząć?</li>
									<li>Czy miał_ś kiedykolwiek kontuzję?</li>
									<li>Czy zdarzyło Ci się kiedyś nie czuć zajawy z jazdy przez brak energii?</li>
									<li>
										Czy czujesz, że treningi, które robisz, są niewystarczające do wymagających górskich warunków, czy
										na snowpark?
									</li>
									<li>Czy zdarzyło Ci się rozchorować zimą?</li>
									<li>Jak oceniasz swoją odporność?</li>
									<li>Czy czujesz blokady mentalne, aby zacząć jeździć freestylowo?</li>
								</ul>
								<div class='link-to-ebook-container'>
									<a href='https://page.co/tUWEKk' className='link-to-ebook'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Czytam dalej
									</a>
								</div>
							</div>
							<Image
								src='/img/ebook-mockup-desktop.webp'
								alt='mockup programu treningowego ridera szkoły pow pow riders'
								sizes='100vw'
								className='mockup-desktop'
								style={{ width: '50%', height: '500' }}
								width={0}
								height={500}
							/>
						</div>
					</section>

					<section className='ebookmobile'>
						<div className='ebook-content-mobile'>
							<div className='ebooktxtmmobile'>
								<h2>Program treningowo-rozwojowy w sportach zimowych oraz deskowych</h2>
							</div>
							<Image
								src='/img/mockup-mobile-ebook.webp'
								alt='mockup programu treningowego ridera szkoły pow pow riders'
								sizes='100vw'
								className='mockup-desktop'
								style={{ width: '100%', height: '650' }}
								width={0}
								height={670}
							/>
							<a href='https://page.co/tUWEKk' className='moblink-to-book'>
								<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Chcę poznać program
							</a>
						</div>
					</section>

					<section className='lessons-road'>
						<div className='road-img'>
							<img
								src='/img/mockup-1.webp?v=2'
								onClick={() => handleImageClick2('/img/mockup-one.webp?v=2')}
								alt='mockup ebooka pow pow riders'
								className='mockup-desk'
							/>
							<img
								src='/img/mockup-2.webp?v=2'
								onClick={() => handleImageClick2('/img/mockup-two.webp?v=2')}
								alt='mockup ebooka pow pow riders'
								className='mockup-mob'
							/>
							<img
								src='/img/mockup-3.webp?v=2'
								onClick={() => handleImageClick2('/img/mockup-three.webp?v=2')}
								alt='mockup ebooka pow pow riders'
							/>
							<img
								src='/img/mockup-4.webp?v=2'
								onClick={() => handleImageClick2('/img/mockup-four.webp?v=2')}
								alt='mockup ebooka pow pow riders'
							/>
						</div>
						<style jsx>{`
							.lessons-road {
								margin-top: 0px;
							}
							.lessons-road .road-img {
								margin-top: 80px;
							}
							.lessons-road .road-img .mockup-desk {
								display: none;
							}
							@media (min-width: 880px) {
								.lessons-road .road-img .mockup-desk {
									display: block;
								}
								.lessons-road .road-img .mockup-mob {
									display: none;
								}
							}
						`}</style>
					</section>

					<section className='snowboard-lessons'>
						<h3>Szkolenia snowboardowe</h3>
						<div className='boxes-lessons'>
							<div className='lessons-sits'>
								<div className='lesson'>
									<p>II Stopień SITS</p>
									<Link href='/II-stopien-sits.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdź
									</Link>
								</div>
								<div className='lesson'>
									<p>III Stopień SITS</p>
									<Link href='/III-stopien-sits.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdź
									</Link>
								</div>
								<div className='lesson'>
									<p>Asystent Instruktora SITS</p>
									<Link href='/asystent-instruktora-sits.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdź
									</Link>
								</div>
							</div>
							<div className='lessons-ppr'>
								<div className='lesson'>
									<p>Kursy Indywidualne</p>
									<Link href='/kursy-indywidualne-snowboard.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdź
									</Link>
								</div>
								<div className='lesson'>
									<p>Kursy Grupowe</p>
									<Link href='/kursy-grupowe-snowboard.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdź
									</Link>
								</div>
							</div>
						</div>
					</section>

					<section className='reviews'>
						<div className='review-head'>
							<h4 className='feel-head'>
								Feeling naszych wspaniałych uczestniczek <span>opinie o pow pow riders</span>i uczestników szkoleń
								snowboardowych i treningów.
							</h4>
						</div>

						<div id='content'>
							<div className='box-review-content'>
								{/* <div class='testimonial'>
								<blockquote>
									<p className='review-txt'>{reviews[currentIndex].opinion}</p>
									<div className='bgc-reviews-words'>
										{reviews[currentIndex].words && <p className='line-after'>{reviews[currentIndex].words}</p>}
										{reviews[currentIndex].words2 && <p className='line-before'>{reviews[currentIndex].words2}</p>}
										{reviews[currentIndex].words3 && <p className='line-after'>{reviews[currentIndex].words3}</p>}
										{reviews[currentIndex].words4 && <p className='line-before'>{reviews[currentIndex].words4}</p>}
										{reviews[currentIndex].words5 && <p className='line-after'>{reviews[currentIndex].words5}</p>}
										{reviews[currentIndex].words6 && <p className='line-before'>{reviews[currentIndex].words6}</p>}
										{reviews[currentIndex].words7 && <p className='line-after'>{reviews[currentIndex].words7}</p>}
										{reviews[currentIndex].words8 && <p className='line-before'>{reviews[currentIndex].words8}</p>}
										{reviews[currentIndex].words9 && <p className='line-after'>{reviews[currentIndex].words9}</p>}
										{reviews[currentIndex].words10 && <p className='line-before'>{reviews[currentIndex].words10}</p>}
										{reviews[currentIndex].words11 && <p className='line-after'>{reviews[currentIndex].words11}</p>}
									</div>
									<button onClick={goRight}>{'>'}</button>
								</blockquote>
								<div className='who'></div>
								<p className='author'>{reviews[currentIndex].author}</p>
							</div> */}
								<div className='testimonial'>
									<blockquote>
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
					</section>

					<section className='blog' id='blog'>
						<h5>BLOG RIDERA</h5>
						<div className='one-group-art'>
							<div className='box-article'>
								<h6>Plusy i minusy bycia Instruktorem Snowboardu</h6>
								<p>
									Instruktor Snowboardu SITS to nie tylko wysokie kwalifikacje i możliwość szkolenia riderów w Polsce i
									na europejskich lodowcach, czyli fajny pomysł na pracę zarobkową.[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/plusy-i-minusy-bycia-instruktorem-snowboardu/'>Czytam więcej...</Link>
								</div>
							</div>
							<div className='box-article'>
								<h6>Sporty zimowe a badania okresowe</h6>
								<p>
									Zdrowy organizm to dużo energii do uprawiania sportów zimowych przez cały sezon. To radość i zajawka z
									jazdy. To brak przeziębień, przeciążeń[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/sporty-zimowe-a-badania-okresowe/'>Czytam więcej...</Link>
								</div>
							</div>
						</div>
						<div className='one-group-art'>
							<div className='box-article'>
								<h6>Naturalne suplementy — apiterapia w sportach zimowych</h6>
								<p>
									Nie policzę, ile razy słyszałam od riders historie o byciu zmarzlakiem. Ale to nie jest tak, że
									jesienią i zimą trzeba chorować.[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/naturalne-suplementy-apiterapia-w-sportach-zimowych/'>Czytam więcej...</Link>
								</div>
							</div>
							<div className='box-article'>
								<h6>Trening ridera sportów zimowych</h6>
								<p>
									Power Knees krok po kroku przez 4 lub 8 tygodni przygotowuje ridera do sezonu zimowego; przede
									wszystkim pod kątem formy fizycznej, ale również mentalnej. […]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/trening-ridera-sportow-zimowych/'>Czytam więcej...</Link>
								</div>
							</div>
						</div>
						<div className='one-group-art'>
							<div className='box-article'>
								<h6>LODOWIEC | co musisz wiedzieć, zanim spakujesz snowboard i ruszysz na trzytysięcznik</h6>
								<p>
									Dwa tygodnie temu zgłosił się do mnie rodzic 12-letniego chłopca z pytaniem o lekcje snowboardowe z
									ukierunkowaniem na pierwszy w życiu shred na lodowcu.[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/https-www-instagram-com-powpow_riders/'>Czytam więcej...</Link>
								</div>
							</div>
							<div className='box-article'>
								<h6>Najbardziej odjechane zawody & event snowboardowy</h6>
								<p>
									Edycja 2022 stała pod znakiem zapytania. Nie tylko ze względu na sytuację na świecie, ale też niepewne
									warunki pogodowe.[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/najbardziej-odjechane-zawody-event-snowboardowy/'>Czytam więcej...</Link>
								</div>
							</div>
						</div>
					</section>

					<section className='insta-feed'>
						<div className='insta-head'>
							<h6>
								Zaobserwuj instagram<span> i bądź na bieżąco</span>
							</h6>
						</div>
						<div className='wrapper-insta'>
							<div className='insta-line'>
								<a href='https://www.instagram.com/powpow_riders/' target='_blank'>
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

					{selectedImage2 && (
						<div className='modal2' onClick={handleCloseClick2}>
							<button className='close2' onClick={handleCloseClick2}>
								X
							</button>
							<img src={selectedImage2} alt='powiększony obraz' />
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Home
