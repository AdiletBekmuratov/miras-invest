import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['ru', 'en', 'kz'],
		fallbackLng: "ru",
		debug: false,
		detection: {
			order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
			caches: ['cookie']
		},
		backend: {
			loadPath: '/assets/locales/{{lng}}/translation.json',
		},
	});

export default i18n