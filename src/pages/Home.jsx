import BadgeCard from '@/components/BadgeCard';
import React from 'react';

export default function Home() {
	return (
		<>
			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>

					<section className='flex justify-center items-center w-full py-16'>
						<BadgeCard />
					</section>
				</div>
			</main>
		</>
	);
}