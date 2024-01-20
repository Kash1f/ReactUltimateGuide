import React from 'react'

const Pagination = (items,itemsPerPage) => {

    //develop a pagination component to navigate through a large list of items

    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage*itemsPerPage;

  return (
    <div>Pagination</div>
  )
}

export default Pagination