import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginator = ({ pokemon, itemsDisplay, setCurrentPage, currentPage }) => {
  if (pokemon != null) {
    let pages = [];
    let active = currentPage;

    for (let i = 0; i <= Math.ceil(pokemon.length / itemsDisplay); i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === active}
          onClick={() => setCurrentPage(i)}
        >
          {i + 1}
        </Pagination.Item>
      );
    }

    return (
      <div>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          {pages}
          <Pagination.Ellipsis />
          <Pagination.Next />
        </Pagination>
      </div>
    );
  }
};

export default Paginator;