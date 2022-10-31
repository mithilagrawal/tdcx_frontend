import React from "react"

const PencilIcon = ({
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
			d='M8.989,3.007l4,4-9,9h-3a1.029,1.029,0,0,1-1-1v-3Zm7-1-2-2a1.358,1.358,0,0,0-2,0l-2,2,4,4,2-2A1.358,1.358,0,0,0,15.989,2.007Z'
			transform='translate(0.014 0.433)'
		/>
	</svg>
)

export default PencilIcon
