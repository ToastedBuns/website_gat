import React from 'react'
import { Link } from 'gatsby'

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
  const nextPage = '/page/' + (currentPage + 1).toString()

  return (
    <div className="pagination-links">
      <ul>
        {!isFirst && (
          <li key="previous-page">
            <Link to={previousPage} rel="prev">
              ←
            </Link>
          </li>
        )}

        {Array.from({ length: numberOfPages }, (_, i) =>
          currentPage === i + 1 ? (
            <li key={'current-page'}>
              <span className="is-active">{i + 1}</span>
            </li>
          ) : (
            <li key={`page-number${i + 1}`}>
              <Link to={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>{i + 1}</Link>
            </li>
          )
        )}
        {!isLast && (
          <li key="next-page">
            <Link to={nextPage} rel="next">
              →
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default PaginationLinks
