import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import DepartmentForm from './DepartmentForm';

import { createDepartment } from '../../services/departments';

const CreateDepartmentContainer = ({ user }) => {
  let history = useHistory();
  const [department, setDepartment] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const department = {
      name: event.target.name.value
    }

    setDepartment(department);

    const response = await createDepartment(user.token, department);
    if (response) history.push('/departments');
  }
  
  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" lg="9">
          <DepartmentForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  )
}

export default CreateDepartmentContainer;