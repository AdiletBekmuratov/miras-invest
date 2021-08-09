import React from 'react'
import Image from '/images/palace.png'

function SinglePalace() {
	return (
		<>
			<section className='relative'>
				<div class="inline-block relative w-full h-[418px]">
					<div className='bg-black opacity-30 w-full h-full absolute top-0 left-0' />
					<img src={Image} alt="imggg" className='block object-cover w-full h-full' />
					<div class="absolute top-[15%] left-[5%] -translate-x-[5%] md:left-[20%] md:-translate-x-[20%] -translate-y-[15%] max-w-[570px] flex flex-col gap-y-5 p-5">
						<h1 className='text-white uppercase font-extrabold'>TOPRAK PALACE VILLAS</h1>
						<h4 className='text-white text-xl font-bold'>Алания, Каргыджак</h4>
						<p className='text-white text-xl'>Уникальный комплекс в районе Каргыджак из 8 вилл в 700 метрах от оборудованной набережной. </p>
					</div>
				</div>
			</section>

			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						<h2>
							Все виллы в данном проекте имеют панорамный, прямой вид на море
						</h2>
						<p>
							Каждая вилла состоит из 2 этажей, архитектура в стиле хайтек.
							Включает в себя приватный бассейн 30 кв.м. с автоматической системой очистки воды.
							Паркинг на 2 автомобиля.
							️Система умный дом
							️Высоклассная отделка и подогрев полов
							️Каждая вилла оборудована бытовой техникой и кондиционерами
							На этапе строительства можно выбрать индивидуальный дизайн-проект интерьера и    учитываются все пожелания по отделке и планировке
						</p>
					</section>

					<section>
						<h2>
							Все виллы в данном проекте имеют панорамный, прямой вид на море
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus, dolores maxime fuga neque impedit quos earum quidem laudantium nulla accusamus cupiditate saepe, quaerat culpa eius. Itaque ipsa minus veniam.
						</p>
					</section>
				</div>
			</main>
		</>
	)
}

export default SinglePalace
