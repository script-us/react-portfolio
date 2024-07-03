import React, { useMemo } from 'react'
import Pagination from '@/components/shared/pagination'
import usePagination from '@/hooks/usePagination'
const abc = ['1', '2', '3', '4', '5', '6']

const Paginations = () => {
  const { prev, next, gotoPage, totalPages, currentPage } = usePagination(abc, 2)

  const numberOfPages = useMemo(() => {
    if (totalPages === null || totalPages === undefined) {
      return []
    }
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }, [totalPages])

  return (
    <div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic breadcrumb</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Pagination
            prev={prev}
            next={next}
            gotoPage={gotoPage}
            currentPage={currentPage}
            numberOfPage={numberOfPages}
          />
        </div>
      </div>
    </div>
  )
}

export default Paginations
