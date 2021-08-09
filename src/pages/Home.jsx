import BadgeCard from '@/components/BadgeCard';
import React from 'react';

export default function Home() {
	return (
		<>
			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						<h1 className='text-darkerBlue text-xl'>
							Компания Mirasinvest был основан в мае 2021 года.
							Но, не смотря на это, уже успела завоевать доверие рынка и начала сотрудничать с крупными застройщиками Турции.
						</h1>
					</section>

					<section className='flex justify-center items-center w-full py-16'>
						<BadgeCard />
					</section>
				</div>
			</main>
		</>
	);
}
