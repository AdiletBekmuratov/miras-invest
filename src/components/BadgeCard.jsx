import React from 'react'
import BadgeIcon from '/images/badge.svg'

function BadgeCard() {
	return (
		<div className='relative border-2 border-lightBlue rounded-2xl sm:max-w-[430px] pt-16 pb-8 mx-4 px-6'>
			<img src={BadgeIcon} alt="badge" className='absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-2' />
			<p className='text-base sm:text-2xl text-lightBlue font-bold text-center'>
				Подберем недвижимость
				как от застройщиков, так
				и на вторичном рынке.
				Работая с нами, вам не
				о чем переживать!
			</p>
		</div>
	)
}

export default BadgeCard
