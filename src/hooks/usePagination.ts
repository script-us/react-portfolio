import { useEffect, useState } from 'react'

interface IPaginationProps<T> {
  currentData: T[]
  currentPage: number
  gotoPage: (args: number) => void
  prev: () => void
  next: () => void
  totalPages: number
}

const usePagination = <T>(data: T[], itemsPerPage: number): IPaginationProps<T> => {
  const [currentData, setCurrentData] = useState<T[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setCurrentData(data.slice(startIndex, endIndex))
  }, [currentPage, itemsPerPage])

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const gotoPage = (page: number) => {
    const newPage = Math.max(1, Math.min(page, totalPages))
    setCurrentPage(newPage)
  }

  const prev = () => {
    gotoPage(currentPage - 1)
  }

  const next = () => {
    gotoPage(currentPage + 1)
  }

  return { currentData, currentPage, totalPages, gotoPage, prev, next }
}

export default usePagination
