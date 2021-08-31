import placeholder from '/images/main.jpg'

export const API_URL = "http://127.0.0.1:8000"
export const PUBLIC_URL = "http://localhost:3000"

export const fromImageToUrl = (image) => {
	if(!image){
		return placeholder
	}

	if(image.indexOf('\\') > -1){
		return `${API_URL}/storage/${image.replace(/\\/g, '/')}`
	}

	return `${API_URL}/storage/${image}`
}