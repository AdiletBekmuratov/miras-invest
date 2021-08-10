import React from 'react'
import BadgeIcon from '/images/badge.svg'

function BadgeCard() {
	return (
		<div className='relative border-2 border-darkerBlue rounded-2xl max-w-[432px] pt-16 pb-8 px-6'>
			<img src={BadgeIcon} alt="badge" className='absolute z-10 -top-8 left-1/2 -translate-x-1/2 bg-white p-2'/>
			<p className='text-2xl text-darkerBlue font-bold text-center'>
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
