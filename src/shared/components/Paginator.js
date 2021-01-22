import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginator = ({ totalPages, currentPage, onTableChange }) => {
  let items = [];
  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <PaginationItem active={currentPage === i}>
        <PaginationLink onCLick={() => onTableChange('page', i)}>
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