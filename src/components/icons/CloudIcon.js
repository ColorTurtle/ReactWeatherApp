import React from 'react';

const CloudIcon = (props) => {
  let style = {},
    width = '38.000000pt',
    className = '',
    height = '35.000000pt',
    viewBox = '0 0 120 180'

  return(
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="scale(3)"
         stroke="none">
        <path d="M16,32C7.2,32,0,24.8,0,16S7.2,0,16,0c6,0,11.2,3.3,14,8.2C30.6,8.1,31.3,8,32,8c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12
	C29.2,32,19.2,32,16,32z M32,28c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8c-1.6,0-3.1,0.5-4.3,1.3C26.4,8,21.7,4,16,4C9.4,4,4,9.4,4,16
	c0,6.6,5.4,12,12,12C19.6,28,29,28,32,28z"/>
      </g>
    </svg>
  )
}

export default CloudIcon;