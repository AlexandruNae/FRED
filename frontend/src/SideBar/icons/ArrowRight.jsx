import React from 'react'

const ArrowRight = ({ size = 16, color = '#fff' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M9 18l6-6-6-6" />
	</svg>
)

export default ArrowRight
