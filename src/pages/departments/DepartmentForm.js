import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const DepartmentForm = ({ department, onSubmit, onDelete }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="name">Department Name</Label>
        <Input 
          type="text" 
          name="name" 
          placeholder="Department Name" 
          defaultValue={department ? department.name : ''} 
        />
      </FormGroup>

      <Button type="submit" color="primary">{ department ? 'Update' : 'Save' }</Button>

      { department && (
        <Button color="danger" onClick={onDelete}>Delete</Button>
      )}
    </Form>
  )
}

export default DepartmentForm;