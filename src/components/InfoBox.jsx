import React from 'react'

function InfoBox(props) {

	return (
		<>
			<div className="box-border h-16 sm:h-24 w-full flex justify-center">
				<img src={props.icon} alt={props.text1} className='object-contain text-lightBlue' />
			</div>

			<div className="text-base md:text-2xl font-medium text-justify w-full mt-8">
				<div>{props.text1}</div>
				{props.text2 && (
					<>
						<br />
						<div>{props.text2}</div>
					</>
				)}
			</div>
		</>
	)
}

export default InfoBox