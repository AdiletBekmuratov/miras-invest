import React from 'react'
import InfoBox from './InfoBox'

function Info() {
	return (
		<>
			<div className="mx-auto bg-fisrt-back h-[820px]">
				<img src="/src/pictures/gull_PNG17 1.png" className="absolute mt-[86px] ml-[988px] " />
				<div className="mt-48 ml-16 md:ml-60 h-[1600px] leading-[74px] md:leading-[104px] 
      uppercase text-white text-[64px] md:text-[85px] font-bold absolute">Инвестируй <br /> в надежность</div>
				<div>
					<button className="absolute mt-[450px] ml-16 md:ml-60 bg-darkerBlue 
        h-[60px] w-[200px] shadow-first rounded-[5px] text-[24px] text-white">Оформить</button>
				</div>
			</div>

			<div className="h-[1900px] md:h-[1500px]">
				<div>
					<div className="w-[500px] md:w-[1160px] ml-16 md:ml-60 flex mt-12">
						<div className="flex-none w-[100px] md:w-[270px]">
							<p className="text-[32px] md:text-[60px] leading-[29px] md:leading-[58px] 
            font-bold text-darkerBlue uppercase">Miras <br /> Invest</p>
						</div>
						<div className="ml-12 flex-grow">
							<p className="text-[16px] md:text-[24px] leading-[16px] md:leading-[29px] font-medium text-justify ">
								Miras Invest - агентство на рынке недвижимости в Алании. Обращаясь к нам по вопросам покупки или продажи жилья, вы получаете полное сопровождение.
								С нами максимально комфортен поиск и выбор жилья в турецкой ривьере.</p>
						</div>
					</div>
				</div>

				<div>
					<div className="w-[400px] md:w-[350px] mt-12 md:mt-28 ml-16 md:ml-60">
						<p className="text-darkerBlue font-bold text-[24px] leading-[29px]">
							Работаем сразу по нескольким направлениям:</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-32 md:gap-y-20 md:w-[1100px] 
        h-[550px] md:h-[400px] ml-16 md:ml-60 mt-12 ">
						<div>
							<InfoBox
								icon={<svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M72.918 36.0312C72.8739 35.5843 72.717 35.156 72.4621 34.7863C72.2073 34.4165 71.8628 34.1175 71.4609 33.9173L50.1886 23.2811C49.8192 23.0962 49.4118 23 48.9987 23C48.5856 23 48.1782 23.0962 47.8088 23.2811L26.5364 33.9173C26.1357 34.1187 25.7922 34.4181 25.538 34.7876C25.2837 35.1571 25.1268 35.5849 25.082 36.0312C25.0527 36.3157 22.5266 64.661 47.9204 75.954C48.2597 76.1071 48.6277 76.1863 49 76.1863C49.3723 76.1863 49.7403 76.1071 50.0796 75.954C75.4734 64.661 72.9473 36.3184 72.918 36.0312ZM49 70.5907C31.001 61.8903 30.1501 43.3223 30.2963 37.9856L49 28.6337L67.6904 37.9803C67.7888 43.2691 66.8182 61.9595 49 70.5907Z" fill="black" />
									<path d="M46.3411 51.1504L40.2439 45.0532L36.484 48.8131L46.3411 58.6702L61.5162 43.495L57.7563 39.7352L46.3411 51.1504Z" fill="black" />
									<circle cx="49.065" cy="49.065" r="46.565" stroke="black" stroke-width="5" />
								</svg>}
								text1="Юридическое сопровождение сделок купли-продажи жилья на всех этапах – от поиска, оформления договора до ключей и документа о праве собственности на недвижимость."
								text2="Комплексная экспертиза недвижимых объектов на предмет их юридической чистоты и фактического состояния;" />
						</div>
						<div>
							<InfoBox
								icon={<svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="49.065" cy="49.065" r="46.565" stroke="black" stroke-width="5" />
									<path d="M57.1909 25.0011C55.9025 25.0104 54.6234 25.0732 53.2723 25.4359C51.8005 25.8362 50.4039 26.4748 49.1379 27.3266C47.3596 26.2801 45.6371 25.4197 43.9866 25.2173C41.9368 24.9639 40.0332 25.1011 37.8209 25.1476C35.1977 25.2011 33.4868 26.5429 30.7104 27.6173C27.9362 28.6871 24.3636 29.7242 19.3214 29.7242H17V52.1075L18.307 52.761L22.5854 54.8703L37.8209 71.8746L37.8929 71.9467C39.6339 73.6723 41.9832 74.1002 44.0586 73.9816C46.1362 73.8653 48.0863 73.256 49.6439 72.3118C53.0727 70.2398 62.4118 63.7352 62.4118 63.7352L62.63 63.5887L62.7762 63.4445C63.8812 62.3446 64.4361 61.0027 64.8075 59.5935L73.7287 55.0866L80.4029 52.8354L82 52.3238V29.7242H79.6786C75.7763 29.751 71.9068 29.0098 68.2896 27.5429C65.5132 26.4569 63.8279 25.129 61.1768 25.0732C59.7607 25.0453 58.4746 24.9918 57.1886 25.0011H57.1909ZM57.2605 29.6521C58.3052 29.6428 59.5123 29.6987 61.0352 29.7242C61.2789 29.7335 63.5098 30.687 66.6205 31.9056C69.2507 32.9405 72.9046 33.859 77.3571 34.1567V48.982L71.9877 50.8006H71.8438L71.6975 50.8704L64.6636 54.4331C64.2902 53.3539 63.6973 52.3641 62.9225 51.5262L62.7762 51.3076L52.9102 39.1729L51.4593 37.3543L49.6439 38.8078L43.4062 43.8961C41.3123 45.3495 39.6154 44.9309 37.8929 44.1147C37.3937 43.8775 37.4216 43.8054 37.0223 43.5333L47.615 34.7381L47.7589 34.5939C50.9045 31.4684 52.8382 30.387 54.505 29.9428C55.3407 29.7149 56.2205 29.6615 57.2629 29.6521H57.2605ZM41.0871 29.7242C41.8617 29.695 42.6373 29.7191 43.4086 29.7963C44.0168 29.8684 44.7062 30.387 45.2959 30.5963C45.0591 30.8149 44.8873 30.9405 44.6412 31.1777L44.4973 31.3242L31.8014 41.8589L29.8421 43.4589L31.5832 45.2751C31.5832 45.2751 33.2616 47.0937 35.8639 48.3285C38.4663 49.5634 42.4846 50.2634 46.0921 47.7472L46.2384 47.6007L50.735 43.8961L59.2964 54.4331L59.3684 54.5796L59.4404 54.6494C60.9725 56.1679 60.9377 58.5563 59.4404 60.1027C59.4218 60.119 59.4589 60.1562 59.4404 60.1725C59.4218 60.1841 59.1154 60.3655 59.0782 60.3934L56.0302 56.2493L52.2579 59.0121L55.2339 63.0073C54.0268 63.8259 53.4836 64.2538 52.1859 65.1166L49.0682 60.9004L45.2936 63.6631L48.2696 67.6584C48.005 67.8212 47.4618 68.1863 47.2529 68.3142C46.5193 68.7584 45.1032 69.2584 43.8427 69.3305C42.6564 69.3956 41.7488 69.1212 41.3054 68.7491L41.2334 68.677L25.7077 51.4541L25.4175 51.089L21.6429 49.2006V34.1567C26.0768 33.866 29.7586 32.9846 32.3795 31.9777C35.4809 30.787 37.6955 29.8056 37.9648 29.7963L41.0848 29.7242H41.0871Z" fill="black" />
								</svg>}
								text1="Оказание послепродажных услуг: Заключение абонентских договоров, уборка помещений и их ремонт."
								text2="Помощь в сдаче жилья в аренду. Реализация жилья в разных регионах Алании" />
						</div>
					</div>
				</div>

				<div>
					<div className="w-[350px] mt-20 ml-16 md:ml-60">
						<p className="text-darkerBlue font-bold text-[24px] leading-[29px]">Индивидуальный подход для каждого:</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-8 md:gap-y-20 w-[1100px] ml-16 md:ml-60 mt-12">
						<div>
							<InfoBox
								icon={<svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="49.065" cy="49.065" r="46.565" stroke="black" stroke-width="5" />
									<path d="M32.97 30.24C26.3916 30.24 21 35.6151 21 42.1758C21 44.718 21.8117 47.0806 23.186 49.0226L31.5097 63.4117C32.6753 64.9347 33.4505 64.6458 34.4201 63.3319L43.6005 47.7082C43.7858 47.3719 43.9311 47.0151 44.0582 46.6503C44.6408 45.2305 44.9403 43.7105 44.94 42.1758C44.94 35.6151 39.5501 30.24 32.97 30.24ZM32.97 35.8328C36.5131 35.8328 39.3312 38.6435 39.3312 42.1764C39.3312 45.7092 36.5131 48.5187 32.97 48.5187C29.4275 48.5187 26.6088 45.7086 26.6088 42.1764C26.6088 38.6435 29.4275 35.8328 32.97 35.8328Z" fill="black" />
									<path fill-rule="evenodd" clip-rule="evenodd" d="M71.2792 33.325C69.9984 33.3535 68.7142 33.4076 67.4277 33.5028L67.626 36.656C68.8618 36.5665 70.0997 36.5089 71.3385 36.4833L71.2792 33.325ZM64.4534 33.7924C62.4755 34.038 60.4805 34.388 58.5083 34.9506L59.251 38.0064C61.0431 37.4956 62.9002 37.1656 64.7863 36.9313L64.4534 33.7924ZM55.5552 36.0085C54.9642 36.2694 54.3921 36.5708 53.8429 36.9108L53.8406 36.9137L53.8372 36.9148C53.0534 37.4084 52.2275 38.0349 51.5532 38.9452C51.0647 39.6046 50.6651 40.4386 50.5716 41.4247L53.4758 41.7467C53.4975 41.5153 53.616 41.2098 53.8292 40.9225H53.8303V40.9213C54.174 40.4562 54.6893 40.0339 55.3021 39.6474L55.3044 39.6463C55.7411 39.3767 56.1959 39.1375 56.6655 38.9303L55.5552 36.0085ZM54.06 43.1535L52.1773 45.5674C52.6236 45.9755 53.0916 46.289 53.5436 46.5512L53.5493 46.5541L53.555 46.5575C55.0553 47.4108 56.6022 47.8924 58.0364 48.3496L58.8606 45.3183C57.427 44.8612 56.0756 44.42 54.9173 43.7622C54.5856 43.5696 54.2949 43.3684 54.06 43.1535ZM61.661 46.171L60.8561 49.2074L61.2369 49.326L61.7043 49.4753C63.2513 49.9786 64.7333 50.5162 66.058 51.26L67.402 48.4556C65.8003 47.5556 64.1376 46.9673 62.5354 46.4464L62.5308 46.4452L62.0509 46.2919L61.661 46.171ZM70.1352 50.56L68.0701 52.7944C68.558 53.3228 68.9234 53.9584 69.1012 54.615L69.1023 54.6184L69.1035 54.6236C69.3155 55.3902 69.3161 56.292 69.1502 57.2028L72.0139 57.8139C72.2476 56.5279 72.2852 55.1161 71.901 53.7224C71.5665 52.4901 70.928 51.4196 70.1352 50.56ZM68.1504 59.1066C67.8349 59.4399 67.4861 59.7402 67.1096 60.0027H67.1085C66.0825 60.7243 64.8923 61.2681 63.6281 61.7355L64.5708 64.7245C65.9537 64.2133 67.3735 63.5863 68.7005 62.6526L68.7039 62.6497L68.7056 62.6486C69.2506 62.267 69.7547 61.8302 70.2098 61.345L68.1504 59.1066ZM60.9456 62.5774C59.1142 63.0698 57.2424 63.4449 55.3477 63.763L55.7946 66.886C57.7445 66.5582 59.7025 66.1666 61.6485 65.6434L60.9456 62.5774ZM52.4971 64.1939C50.5899 64.4544 48.6724 64.667 46.7492 64.8482L47.0012 67.9958C48.954 67.8122 50.9102 67.5962 52.8636 67.3289L52.4971 64.1939ZM43.8588 65.0962C41.9316 65.2489 39.9999 65.3732 38.0664 65.4781L38.2123 68.6336C40.1646 68.5282 42.1185 68.4022 44.0719 68.2472L43.8588 65.0962ZM35.1611 65.6206C34.0023 65.6747 32.8407 65.7192 31.6761 65.7602L31.7719 68.9186C32.9437 68.8783 34.1153 68.8316 35.2865 68.7784L35.1611 65.6206Z" fill="black" />
								</svg>}
								text1="- предоставляем онлайн-тур, его можно заказать здесь на сайте; " />
						</div>
						<div>
							<InfoBox
								icon={<svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="49.065" cy="49.065" r="46.565" stroke="black" stroke-width="5" />
									<path d="M22.3333 35.6667C22.3333 34.2522 22.8952 32.8957 23.8953 31.8955C24.8955 30.8953 26.2521 30.3334 27.6666 30.3334H70.3333C71.7477 30.3334 73.1043 30.8953 74.1045 31.8955C75.1047 32.8957 75.6666 34.2522 75.6666 35.6667V62.3334C75.6666 63.7479 75.1047 65.1044 74.1045 66.1046C73.1043 67.1048 71.7477 67.6667 70.3333 67.6667H27.6666C26.2521 67.6667 24.8955 67.1048 23.8953 66.1046C22.8952 65.1044 22.3333 63.7479 22.3333 62.3334V35.6667Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M49 57C53.4183 57 57 53.4183 57 49C57 44.5817 53.4183 41 49 41C44.5817 41 41 44.5817 41 49C41 53.4183 44.5817 57 49 57Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M22.3333 41C25.1622 41 27.8753 39.8762 29.8757 37.8758C31.8761 35.8755 32.9999 33.1624 32.9999 30.3334" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M65 67.6667C65 64.8377 66.1238 62.1246 68.1242 60.1242C70.1246 58.1238 72.8377 57 75.6667 57" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
								}
								text1="- полностью оплатим расходы на перелет и проживание в Алании при покупке квартиры;" />
						</div>
						<div>
							<InfoBox
								icon={<svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="49.065" cy="49.065" r="46.565" stroke="black" stroke-width="5" />
									<path d="M44.25 28.5L49.5 23.25L54.75 28.5V75.75H44.25V28.5Z" stroke="black" stroke-width="4" stroke-linejoin="round" />
									<path d="M33.75 44.25L44.25 33.75V75.75H33.75V44.25ZM23.25 63.9375L33.75 54.75V75.75H23.25V63.9375ZM54.75 33.75L65.25 44.25V75.75H54.75V33.75ZM65.25 54.75L75.75 63.2812V75.75H65.25V54.75Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								</svg>}
								text1="- подбираем жилые комплексы с учетом ваших предпочтений; " />
						</div>
						<div>
							<InfoBox
								icon={<svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="49.065" cy="49.065" r="46.565" stroke="black" stroke-width="5" />
									<path d="M63.1679 53.25C65.0204 53.25 66.6497 54.1928 67.6092 55.625H53.0623C51.7252 55.625 50.4925 56.0667 49.4998 56.8125H35.8507C35.6166 56.8122 35.3849 56.858 35.1686 56.9474C34.9524 57.0368 34.7559 57.168 34.5904 57.3335C34.425 57.499 34.2938 57.6954 34.2044 57.9117C34.1149 58.1279 34.0691 58.3597 34.0694 58.5937V59.9641C34.0694 61.2347 34.5254 62.465 35.3519 63.4316C37.9525 66.4787 41.8452 68.2196 47.1248 68.6091V71.0625C47.1248 71.4448 47.1604 71.8225 47.2317 72.1835C40.8738 71.7821 35.9742 69.6517 32.642 65.7472C31.2654 64.1348 30.5092 62.0842 30.5093 59.9641V58.5913C30.5093 57.1747 31.072 55.8161 32.0737 54.8144C33.0754 53.8127 34.434 53.25 35.8507 53.25H63.1679ZM49.4998 24.7618C51.0592 24.7618 52.6034 25.069 54.0441 25.6658C55.4849 26.2625 56.794 27.1373 57.8967 28.2399C58.9994 29.3426 59.8741 30.6517 60.4708 32.0925C61.0676 33.5332 61.3748 35.0774 61.3748 36.6368C61.3748 38.1963 61.0676 39.7405 60.4708 41.1812C59.8741 42.6219 58.9994 43.931 57.8967 45.0337C56.794 46.1364 55.4849 47.0111 54.0441 47.6079C52.6034 48.2047 51.0592 48.5118 49.4998 48.5118C46.3503 48.5118 43.3299 47.2607 41.1029 45.0337C38.8759 42.8067 37.6248 39.7863 37.6248 36.6368C37.6248 33.4874 38.8759 30.4669 41.1029 28.2399C43.3299 26.013 46.3503 24.7618 49.4998 24.7618ZM49.4998 28.3243C48.4082 28.3243 47.3272 28.5393 46.3187 28.9571C45.3102 29.3748 44.3938 29.9871 43.622 30.759C42.8501 31.5309 42.2378 32.4473 41.82 33.4558C41.4023 34.4643 41.1873 35.5452 41.1873 36.6368C41.1873 37.7285 41.4023 38.8094 41.82 39.8179C42.2378 40.8264 42.8501 41.7428 43.622 42.5147C44.3938 43.2866 45.3102 43.8988 46.3187 44.3166C47.3272 44.7343 48.4082 44.9493 49.4998 44.9493C51.7044 44.9493 53.8187 44.0736 55.3776 42.5147C56.9365 40.9558 57.8123 38.8415 57.8123 36.6368C57.8123 34.4322 56.9365 32.3179 55.3776 30.759C53.8187 29.2001 51.7044 28.3243 49.4998 28.3243ZM49.4998 61.5625C49.4998 60.6176 49.8751 59.7115 50.5432 59.0434C51.2113 58.3753 52.1174 58 53.0623 58H72.0623C73.0071 58 73.9132 58.3753 74.5813 59.0434C75.2494 59.7115 75.6248 60.6176 75.6248 61.5625V71.0625C75.6248 72.0073 75.2494 72.9134 74.5813 73.5815C73.9132 74.2496 73.0071 74.625 72.0623 74.625H53.0623C52.1174 74.625 51.2113 74.2496 50.5432 73.5815C49.8751 72.9134 49.4998 72.0073 49.4998 71.0625V61.5625ZM73.2498 62.75C72.6199 62.75 72.0158 62.4997 71.5704 62.0543C71.125 61.6089 70.8748 61.0049 70.8748 60.375H68.4998C68.4998 61.6347 69.0002 62.8429 69.891 63.7337C70.7818 64.6245 71.99 65.125 73.2498 65.125V62.75ZM73.2498 67.5C71.99 67.5 70.7818 68.0004 69.891 68.8912C69.0002 69.782 68.4998 70.9902 68.4998 72.25H70.8748C70.8748 71.6201 71.125 71.016 71.5704 70.5706C72.0158 70.1252 72.6199 69.875 73.2498 69.875V67.5ZM54.2498 60.375C54.2498 61.0049 53.9996 61.6089 53.5542 62.0543C53.1088 62.4997 52.5047 62.75 51.8748 62.75V65.125C53.1346 65.125 54.3427 64.6245 55.2335 63.7337C56.1243 62.8429 56.6248 61.6347 56.6248 60.375H54.2498ZM56.6248 72.25C56.6248 70.9902 56.1243 69.782 55.2335 68.8912C54.3427 68.0004 53.1346 67.5 51.8748 67.5V69.875C52.5047 69.875 53.1088 70.1252 53.5542 70.5706C53.9996 71.016 54.2498 71.6201 54.2498 72.25H56.6248ZM66.7185 66.3125C66.7185 65.2102 66.2806 64.153 65.5012 63.3736C64.7217 62.5941 63.6646 62.1562 62.5623 62.1562C61.46 62.1562 60.4028 62.5941 59.6234 63.3736C58.8439 64.153 58.406 65.2102 58.406 66.3125C58.406 67.4148 58.8439 68.4719 59.6234 69.2514C60.4028 70.0308 61.46 70.4687 62.5623 70.4687C63.6646 70.4687 64.7217 70.0308 65.5012 69.2514C66.2806 68.4719 66.7185 67.4148 66.7185 66.3125Z" fill="black" />
								</svg>}
								text1="- оплатим проживание, даже, если вы не купите жилье." />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Info