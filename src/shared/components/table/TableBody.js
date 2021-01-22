import Skeleton from 'react-loading-skeleton';

const TableBody = ({ isLoading, data }) => {
  return (
    <tbody>
      {
        isLoading && (<Skeleton count={15} />)
      }

      { !isLoading && data && data.map((row, index) => {
        return (
          <tr key={index}>
            { 
              row.map((column, i) => (<td key={i}>{column}</td>))
            }
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody;