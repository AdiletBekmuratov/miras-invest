import placeholder from '/images/main.jpg'

export const API_URL = "http://localhost:1337"
export const PUBLIC_URL = "http://localhost:3000"

export const fromImageToUrl = (image) => {
	if(!image){
		return placeholder
	}

	if(image.url.indexOf('/') === 0){
		console.log(`${API_URL}${image.url}`);
		return `${API_URL}${image.url}`
	}

	return image.url
}