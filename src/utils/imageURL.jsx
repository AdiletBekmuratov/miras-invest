import Logo from '/images/logo.svg'

export const API_URL = import.meta.env.REACT_APP_API_URL || 'http://localhost:1337'

export const fromImageToUrl = (image) => {
	if(!image){
		return Logo
	}

	if(image.url.indexOf('/') === 0){
		return `${API_URL}${image.url}`
	}

	return image.url
}