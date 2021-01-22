import Skeleton from 'react-loading-skeleton';

const TableHeader = ({ isLoading, headers }) => {
  return (
    <thead>
      <tr>
        { isLoading ? <Skeleton /> : headers && headers.map((header, index) => (<th key={index}>{header}</th>)) }
      </tr>
    </thead>
  )
}

export default TableHeader;