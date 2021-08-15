import React from 'react'
import CustomLink from './CustomLink'
import FacebookIcon from '/images/facebook.svg'
import InstagramIcon from '/images/instagram.svg'
import TelegramIcon from '/images/telegram.svg'
import YoutubeIcon from '/images/youtube.svg'
import { useTranslation } from "react-i18next";

function Footer() {
	const { t } = useTranslation();
	return (
		<footer className='footer mt-auto'>
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex py-8 gap-y-5 flex-col sm:flex-row sm:space-x-7 sm:py-10 sm:items-center">
						<span className='text-xl uppercase text-white'>2021 mirasinvest.kz</span>
						<span className='text-xl text-white'>{t('rights')}</span>

						<div>
							<div className='flex gap-x-4 gap-y-2 sm:ml-4'>
								<CustomLink href="https://www.telegram.com" className='flex-shrink-0'>
									<img src={TelegramIcon} alt="telegram" className="h-6 w-6 object-contain" />
								</CustomLink>
								<CustomLink href="https://www.instagram.com" className='flex-shrink-0'>
									<img src={InstagramIcon} alt="instagram" className="h-6 w-6 object-contain" />
								</CustomLink>
								<CustomLink href="https://www.facebook.com" className='flex-shrink-0'>
									<img src={FacebookIcon} alt="facebook" className="h-6 w-6 object-contain" />
								</CustomLink>
								<CustomLink href="https://www.youtube.com" className='flex-shrink-0'>
									<img src={YoutubeIcon} alt="youtube" className="h-6 w-6 object-contain" />
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
