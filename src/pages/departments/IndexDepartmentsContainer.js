import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DataTable from '../../shared/components/table/Table';
import TableHeader from '../../shared/components/table/TableHeader';
import TableBody from '../../shared/components/table/TableBody';
import Paginator from '../../shared/components/Paginator';
import { NavLink } from 'react-router-dom';

import MoneyFormat from '../../helpers/money_format';

import { fetchDepartments } from '../../services/departments';

const IndexDepartmentsContainer = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [departments, setDepartments] = useState({
    departments: [], 
    pagination: {
      per_page: 15, 
      page: 1
    }
  });
  const [query, setQuery] = useState({});

  useEffect(() => {
    fetchDepartments(user.token, departments.pagination)
      .then(departments => {
        setDepartments(departments);
        setIsLoading(false);
      })
  }, [])

  const onTableChange = async (key ,value) => {
    setIsLoading(true);
    let params = {
      per_page: departments.pagination.per_page,
      page: key === 'page' ? value : departments.pagination.page,
      ...query
    }

    const response = await fetchDepartments(user.token, params);
    setDepartments(response);
    setIsLoading(false);
  }

  const onFilterApply = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    let params = {
      no_of_employees: event.target.no_of_employees.value || null,
      salaries_from: event.target.salaries_from.value || null,
      salaries_to: event.target.salaries_to.value || null,
    }

    setQuery(params);
    params.per_page = departments.pagination.per_page;
    params.page = departments.pagination.page;

    const response = await fetchDepartments(user.token, params);
    setDepartments(response);
    setIsLoading(false);
  }
  
  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" className="mb-3">
          <NavLink className="btn btn-primary" to="/departments/create">Add New</NavLink>
        </Col>

        <Col xs="12" lg="9">
          <DataTable>
            <TableHeader 
              isLoading={isLoading} 
              headers={['Department', 'Biggest Salary', 'Average Salary', 'Total Salaries']} 
            />

            <TableBody 
              isLoading={isLoading} 
              data={departments && departments.departments.map(department => {
                return [
                  <NavLink to={`/departments/${department.id}`}>
                    {department.name}
                  </NavLink>,
                  MoneyFormat('EUR').format(department.max_salary),
                  MoneyFormat('EUR').format(department.avg_salaries),
                  MoneyFormat('EUR').format(department.total_salaries)
                ]
              })} 
            />

            <Paginator 
              onTableChange={onTableChange} 
              totalPages={departments.pagination.total_pages}
              currentPage={departments.pagination.page} 
            />
          </DataTable>
        </Col>

        <Col lg="3">
          <Form onSubmit={onFilterApply}>
          <FormGroup>
            <Label for="name">No of Employees</Label>
            <Input 
              type="text" 
              name="no_of_employees" 
              placeholder="No of employees" 
              defaultValue={query.no_of_employees || null} 
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">Total Salaries From</Label>
            <Input 
              type="text" 
              name="salaries_from" 
              placeholder="Salaries From" 
              defaultValue={query.salaries_from || null} 
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">Total Salaries To</Label>
            <Input 
              type="text" 
              name="salaries_to" 
              placeholder="Total Salaries To" 
              defaultValue={query.salaries_to || null} 
            />
          </FormGroup>

          <Button type="submit" color="primary">Apply</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default IndexDepartmentsContainer;