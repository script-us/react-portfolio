import React from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

interface PaginationProps {
  numberOfPage: number[]
  currentPage: number
  gotoPage: (page: number) => void
  next: () => void
  prev: () => void
  className?: string
}

const Pagination: React.FC<PaginationProps> = ({ numberOfPage, currentPage, gotoPage, next, prev, className }) => {
  const router = useRouter()

  const renderPageNumber = (number: number, isEllipsis: boolean = false) => (
    <div
      key={number}
      onClick={() => gotoPage(number)}
      className={`py-[8px] px-[9px] rounded-[8px] cursor-pointer ${
        number === currentPage && router.route === '/'
          ? 'bg-color-primaryGreen'
          : number === currentPage && router.route === `/robotDetail/[id]`
            ? 'bg-color-purple'
            : number !== currentPage && !isEllipsis && router.route === `/robotDetail/[id]`
              ? 'bg-color-paginationColor'
              : isEllipsis
                ? 'bg-transparent'
                : 'bg-color-gray'
      }`}
    >
      <div
        className={`w-[13px] text-center font-montserrat !font-medium h-[15px] ${
          number === currentPage ? 'text-color-white' : 'text-color-black'
        }`}
      >
        {isEllipsis ? '...' : number}
      </div>
    </div>
  )

  return (
    <div
      className={classNames(
        `pt-[16px] pb-[16px] flex flex-col sm:flex-row gap-[8px] sm:gap-[4px] justify-center items-center`,
        className,
      )}
    >
      <div className={`!bg-transparent text-color-darkGray px-0 sm:px-[8px] cursor-pointer`} onClick={prev}>
        {numberOfPage && numberOfPage.length ? 'Previous' : ''}
      </div>
      <div className="flex gap-[8px] sm:gap-[12px] justify-center items-center flex-wrap">
        {numberOfPage.map((number) => {
          //it is for ellipsis or not
          const isEllipsis =
            (currentPage >= 3 && number >= currentPage - 2 && number <= currentPage + 2) ||
            (currentPage < 3 && currentPage >= 1 && number === 4) ||
            (currentPage < 5 && currentPage >= 1 && number === 6) ||
            (currentPage > numberOfPage.length - 4 && number === numberOfPage.length - 5)

          //check if the first page or last page
          const isFirstOrLastPage = number === 1 || number === numberOfPage.length

          // Check if the current page is within the first few pages
          const isWithinFirstPages = number <= 5 && currentPage < 5

          // Check if the current page is within the last few pages
          const isWithinLastPages = number > numberOfPage.length - 5 && currentPage > numberOfPage.length - 4

          // Check if the number is current page range or not
          const isWithinCurrentPages = number >= 4 && number >= currentPage - 1 && number <= currentPage + 1

          if (isFirstOrLastPage || isWithinFirstPages || isWithinLastPages || isWithinCurrentPages) {
            return renderPageNumber(number)
          } else if (isEllipsis) {
            return renderPageNumber(number, true)
          }
          return null
        })}
      </div>
      <div className={`!bg-transparent text-color-darkGray px-0 sm:px-[8px] cursor-pointer`} onClick={next}>
        <div className="font-montserrat !font-medium">{numberOfPage && numberOfPage.length ? 'Next' : ''}</div>
      </div>
    </div>
  )
}

export default Pagination
