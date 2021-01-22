import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EmployeeForm = ({ employee, departments, onSubmit, onDelete}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="name">Employee Name</Label>
        <Input 
          type="text" 
          name="name" 
          placeholder="Employee Name" 
          defaultValue={employee ? employee.name : ''} 
          required={true}
        />
      </FormGroup>

      <FormGroup>
        <Label for="position">Position</Label>
        <Input 
          type="text" 
          name="position" 
          placeholder="Position" 
          defaultValue={employee ? employee.position : ''}
          required={true} 
        />
      </FormGroup>

      <FormGroup>
        <Label for="salary">Salary</Label>
        <Input 
          type="text" 
          name="salary" 
          placeholder="Salary" 
          defaultValue={employee ? employee.salary : ''}
          required={true} 
        />
      </FormGroup>

      <FormGroup>
        <Label for="department_id">Department</Label>
        <Input type="select" name="department_id" required defaultValue={employee ? employee.department_id : null}>
          { departments.map((department, index) => {
            return (<option key={index} value={department.id}>{department.name}</option>);
          }) }
        </Input>
      </FormGroup>

      <Button type="submit" color="primary">{ employee ? 'Update' : 'Save' }</Button>

      {employee && (
        <Button type="submit" color="danger" onClick={onDelete}>Delete</Button>
      )}
    </Form>
  )
}

export default EmployeeForm;