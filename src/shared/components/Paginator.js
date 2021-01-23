import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginator = ({ totalPages, currentPage, onTableChange }) => {
  let items = [];
  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <PaginationItem key={i} active={currentPage === i}>
        <PaginationLink onClick={() => onTableChange('page', i)}>
          { i }
        </PaginationLink>
      </PaginationItem>
    )
  }
  return (
    <Pagination className="mt-3">
      { items }
    </Pagination>
  );
}

export default Paginator;