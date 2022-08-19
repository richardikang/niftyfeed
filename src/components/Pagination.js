import React from "react";
import classNames from "classnames";
import styled from "styled-components";

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  const liClasses = classNames({
    "page-item": true,
    active: page === currentPage,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  return (
    <Paginationstyle>
      <ul>
        {pages.map((page) => (
          <PaginationItem
            page={page}
            key={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
      </ul>
    </Paginationstyle>
  );
};

const Paginationstyle = styled.div`
  display: inline-block;
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;

  .page-item {
    display: inline;
  }
  .page-item:first-child .page-link {
    margin-left: 0;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }
  .page-item:last-child .page-link {
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .page-item.active .page-link,
  .page-item.active .page-link:focus,
  .page-item.active .page-link:hover {
    z-index: 2;
    color: #fff;
    cursor: default;
    background-color: #5cb85c;
    border-color: #5cb85c;
  }
  .page-item.disabled .page-link,
  .page-item.disabled .page-link:focus,
  .page-item.disabled .page-link:hover {
    color: #818a91;
    pointer-events: none;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }
  .page-link {
    position: relative;
    float: left;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    color: #5cb85c;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .page-link:focus,
  .page-link:hover {
    color: #3d8b3d;
    background-color: #eceeef;
    border-color: #ddd;
  }
`;

export default Pagination;
