export const ArrowLeft = ({ width = '24', height = '24' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={width}
      height={height}
    >
      <rect width="256" height="256" fill="none" />
      <line
        x1="216"
        y1="128"
        x2="40"
        y2="128"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="112 56 40 128 112 200"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </svg>
  )
}
