import placeholder from '/images/main.jpg'

export const API_URL = "https://strapi-miras-demo.herokuapp.com"
export const PUBLIC_URL = "https://www.miras-invest.com"

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