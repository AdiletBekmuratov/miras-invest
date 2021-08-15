import Logo from '/images/logo.svg'

export const API_URL = import.meta.env.VITE_APP_API_URL
export const PUBLIC_URL = import.meta.env.VITE_APP_PUBLIC_URL

export const fromImageToUrl = (image) => {
	if(!image){
		return Logo
	}

	if(image.url.indexOf('/') === 0){
		console.log(`${API_URL}${image.url}`);
		return `${API_URL}${image.url}`
	}

	return image.url
}