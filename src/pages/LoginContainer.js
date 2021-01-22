import { 
  Container, 
  Row, 
  Col, 
  Jumbotron, 
  Card, 
  CardBody, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input 
} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { login } from '../services/auth';

const LoginContainer = ({setUser}) => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const params = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    const user = await login(params);
    console.log(user)
    setUser(user)
  }

  return (
    <Container className="page page--login">
      <Row className="justify-content-center w-100">
        <Col lg="8">
          <Jumbotron>
            <h3>
              HRM
            </h3>
            <hr />
            <Card>
              <CardBody>
                <Form onSubmit={onSubmit}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input 
                      type="text" 
                      name="email" 
                      placeholder="Email"  
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input 
                      type="password" 
                      name="password" 
                      placeholder="Password"  
                    />
                  </FormGroup>

                  <Button type="submit" color="primary">Login</Button>
                </Form>
              </CardBody>
            </Card>
          </Jumbotron>
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  )
}

export default LoginContainer;