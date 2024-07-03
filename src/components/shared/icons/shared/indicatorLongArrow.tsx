import React, { ReactElement } from 'react'

interface IndicatorLongArrowProps {
  className?: string
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const IndicatorLongArrow: React.FC<IndicatorLongArrowProps> = React.forwardRef<any, IndicatorLongArrowProps>(
  (props, ref): ReactElement => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="bi bi-arrow-down"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
      >
        <path
          fill-rule="evenodd"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
        />
      </svg>
    )
  },
)
export default IndicatorLongArrow
