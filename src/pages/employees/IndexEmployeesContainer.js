import { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom'; 
import { Container, Row, Col } from 'reactstrap';

import DataTable from '../../shared/components/table/Table';
import TableHeader from '../../shared/components/table/TableHeader';
import TableBody from '../../shared/components/table/TableBody';
import Paginator from '../../shared/components/Paginator';
import { Link } from 'react-router-dom';

import MoneyFormat from '../../helpers/money_format';
import  { fetchEmployees } from '../../services/employees';

const IndexEmployeesContainer = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState({ 
      employees: [], 
      pagination: {
        per_page: 15,
        total_pages: 0
      } 
    });

  useEffect(() => {
    fetchEmployees(user.token)
      .then(employees => {
        setEmployees(employees);
        setIsLoading(false);
      })
  }, [])

  const onTableChange = async (key ,value) => {
    setIsLoading(true);
    let params = {
      per_page: employees.pagination.per_page,
      page: key === 'page' ? value : employees.pagination.page,
    }

    const response = await fetchEmployees(user.token, params);
    setEmployees(response);
    setIsLoading(false);
  }
  
  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" className="mb-3">
          <NavLink className="btn btn-primary" to="/employees/create">Add new</NavLink>
        </Col>
        <Col xs="12" lg="9">
          <DataTable>
            <TableHeader 
              isLoading={isLoading} 
              headers={['Name', 'Position', 'Salary p/month']} 
            />

            <TableBody 
              isLoading={isLoading} 
              data={employees && employees.employees.map(employee => {
                return [
                  <Link to={`/employees/${employee.id}`}>
                    {employee.name}
                  </Link>,
                  employee.position,
                  MoneyFormat('EUR').format(employee.salary)
                ]
              })} 
            />

            <Paginator 
              onTableChange={onTableChange} 
              totalPages={employees.pagination.total_pages}
              currentPage={employees.pagination.page} 
            />
          </DataTable>
        </Col>
      </Row>
    </Container>
  )
}

export default IndexEmployeesContainer;