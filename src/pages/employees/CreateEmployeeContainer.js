import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import EmployeeForm from './EmployeeForm';
import { createEmployee } from '../../services/employees';
import { fetchDepartments } from '../../services/departments';

const CreateEmployeeContainer = ({ user }) => {
  let history = useHistory();
  const [employee, setEmployee] = useState(null);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments(user.token, {per_page: '*'})
      .then(response => {
        setDepartments(response);
      })
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault();
    const employee = {
      name: event.target.name.value,
      position: event.target.position.value,
      salary: event.target.salary.value,
      department_id: event.target.department_id.value,
    }

    setEmployee(employee);
    
    const response = await createEmployee(user.token, employee); 
    if (response) {
      history.push('/employees')
    }
  }
  
  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" lg="9">
          <EmployeeForm departments={departments} onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  )
}

export default CreateEmployeeContainer;