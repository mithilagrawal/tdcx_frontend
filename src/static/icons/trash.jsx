import React from "react"

const TrashIcon = ({
	style = {},
	fill = "#647278",
	width = "100%",
	className = "",
	viewBox = "0 0 30 30",
}) => (
	<svg
		width={width}
		style={style}
		height={width}
		viewBox={viewBox}
		xmlns='http://www.w3.org/2000/svg'
		className={`svg-icon ${className || ""}`}
		xmlnsXlink='http://www.w3.org/1999/xlink'
	>
		<path
			fill={fill}
			d='M15,1H11V0c-.145-.291-.675,0-1,0H6c-.325,0-.857-.292-1,0V1H1A1.577,1.577,0,0,0,0,2V3c0,.316.684,0,1,0H15c.316,0,1,.316,1,0V2A1.577,1.577,0,0,0,15,1ZM2,17c.057.9,1.095,1,2,1h8c.9,0,1.943-.1,2-1L15,5H1Z'
			transform='translate(0 0.13)'
		/>
	</svg>
)

export default TrashIcon
