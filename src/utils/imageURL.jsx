import placeholder from '/images/main.jpg'

export const API_URL = "https://admin.miras-invest.com"
export const PUBLIC_URL = "http://localhost:3000"
//https://miras-invest.com
export const fromImageToUrl = (image) => {
	if(!image){
		return placeholder
	}

	if(image.indexOf('\\') > -1){
		return `${API_URL}/storage/${image.replace(/\\/g, '/')}`
	}

	return `${API_URL}/storage/${image}`
}