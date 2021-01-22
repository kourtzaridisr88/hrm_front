import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useHistory, useParams, NavLink } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';

import  { fetchEmployee, updateEmployee, deleteEmployee } from '../../services/employees';
import { fetchDepartments } from '../../services/departments';

const EditEmployeeContainer = ({ user }) => {
  let history = useHistory();
  let { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchEmployee(user.token, id)
      .then(employee => setEmployee(employee));
    
    fetchDepartments(user.token, {per_page: '*'})
      .then(response => setDepartments(response));
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault();
    const employee = {
      name: event.target.name.value,
      position: event.target.position.value,
      salary: event.target.salary.value,
      department_id: event.target.department_id.value
    }

    const response = await updateEmployee(user.token, id, employee);
    if (response) history.push('/employees')
  }

  const onDelete = async () => {
    const response = await deleteEmployee(user.token, id);
    if (response) history.push('/employees')
  }
  
  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" lg="9">
          <EmployeeForm employee={employee} departments={departments} onSubmit={onSubmit} onDelete={onDelete} />
        </Col>
      </Row>
    </Container>
  )
}

export default EditEmployeeContainer;