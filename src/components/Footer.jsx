import React from 'react'
import FacebookIcon from '/images/facebook.svg'
import InstagramIcon from '/images/instagram.svg'
import TelegramIcon from '/images/telegram.svg'
import YoutubeIcon from '/images/youtube.svg'
import { useTranslation } from "react-i18next";
import CustomLink from './CustomLink'

function Footer() {
	const { t } = useTranslation();
	return (
		<footer className='footer'>
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex py-8 flex-col sm:flex-row sm:space-x-7 sm:py-10 sm:items-center">
						<span className='text-xl uppercase text-white mb-5 sm:mb-0'>2021 mirasinvest.kz</span>
						<span className='text-xl text-white mb-5 sm:mb-0'>{t('rights')}</span>

						<div>
							<div className='flex space-x-4 sm:ml-4'>
								<CustomLink href="https://www.instagram.com/mirasinvest/" className='flex-shrink-0'>
									<img src={InstagramIcon} alt="instagram" className="h-6 w-6 object-contain" />
								</CustomLink>
								<CustomLink href="https://www.facebook.com/MirasInvestCompany" className='flex-shrink-0'>
									<img src={FacebookIcon} alt="facebook" className="h-6 w-6 object-contain" />
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
