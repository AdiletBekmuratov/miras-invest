import React from 'react'
import CustomLink from './CustomLink'
import FacebookIcon from '/images/facebook.svg'
import InstagramIcon from '/images/instagram.svg'
import TelegramIcon from '/images/telegram.svg'
import YoutubeIcon from '/images/youtube.svg'

function Footer() {
	return (
		<footer className='footer'>
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7 py-10 items-center">
						<span className='text-xl uppercase text-white'>2021 mirasinvest.kz</span>
						<span className='text-xl text-white'>All rights reserved.</span>

						<div>
							<div className='flex space-x-4 ml-4'>
								<CustomLink>
									<img src={TelegramIcon} alt="telegram" />
								</CustomLink>
								<CustomLink>
									<img src={InstagramIcon} alt="instagram" />
								</CustomLink>
								<CustomLink>
									<img src={FacebookIcon} alt="facebook" />
								</CustomLink>
								<CustomLink>
									<img src={YoutubeIcon} alt="youtube" />
								</CustomLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
