import { Form, Input, Button, Label, Row, Col } from "reactstrap";
import { useState } from "react";

function FilterText({onFilter}){

  const [filterTxt,setFilterTxt] = useState("");

  const handleSubmitForm = (evento) => {
    evento.preventDefault() /
    onFilter(filterTxt);
  }
  
  const handleFilterTxtChange = (evento) => {
    setFilterTxt(evento.target.value);
  }

  const handleReset = () => {
    setFilterTxt("");
    onFilter("");
  };
  
  return(
      <Form onSubmit={handleSubmitForm}>
      <Row className="align-items-center g-2">
        <Col md="auto">
          <Label htmlFor="filterInput" className="col-form-label fs-5 fw-bold">Filter:</Label>
        </Col>
        <Col md="4">
          <Input
            id="filterInput"
            type="text"
            value={filterTxt}
            onChange={handleFilterTxtChange}
            placeholder="Search product"
          />
        </Col>
        <Col md="auto">
          <Button color="primary" type="submit" className="me-2">Search</Button>
          <Button color="secondary" type="button" onClick={handleReset}>Reset</Button>
        </Col>
      </Row>
    </Form>

  );
}

export default FilterText;