import { Table } from 'reactstrap';

const DataTable = ({ children }) => {
  return (
    <Table striped>
      { children }
    </Table>
  )
}

export default DataTable;