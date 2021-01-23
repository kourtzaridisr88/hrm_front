import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import DepartmentForm from './DepartmentForm';
import { fetchDepartment, updateDepartment, deleteDepartment } from '../../services/departments';

const EditDepartmentContainer = ({ user }) => {
  let history = useHistory();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    fetchDepartment(user.token, id)
      .then(department => {
        setDepartment(department);
        setIsLoading(false);
      })
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault();
    const department = {
      id: id,
      name: event.target.name.value,
    }

    setDepartment(department);
    
    const response = await updateDepartment(user.token, id, department);
    if (response) history.push('/departments');
  }

  const onDelete = async () => {
    const response = deleteDepartment(user.token, id);
    if (response) history.push('/departments');
  }
  
  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" lg="9">
          <DepartmentForm department={department} onSubmit={onSubmit} onDelete={onDelete} />
        </Col>
      </Row>
    </Container>
  )
}

export default EditDepartmentContainer;