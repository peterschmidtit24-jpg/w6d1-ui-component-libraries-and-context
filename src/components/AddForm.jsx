import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/theme.context';

function AddForm() {

  const { theme } = useContext(ThemeContext)

  return (
    <Form className='p-3'>
      
      <Form.Group className="mb-4" controlId="formBasicEmail" data-bs-theme={theme}>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control type="text" name="title"/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicEmail" data-bs-theme={theme}>
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control type="text" name="description"/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicEmail" data-bs-theme={theme}>
        <Form.Label htmlFor="content">Content</Form.Label>
        <Form.Control type="text" name="content"/>
      </Form.Group>

      <Button className='add-btn'>Add new Book</Button>

    </Form>
  )
}

export default AddForm