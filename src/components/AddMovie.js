//imports

import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

function AddMovie() {
//state for alert
  const [alert,setAlert] = React.useState(false);
  //state for message
  const [message,setMessage] = React.useState("");
  //State for variant
  const [variant,setVariant] = React.useState("danger");
  //to navigate to the home page
  const navigate = useNavigate();

  //state for form
  const [formvalues, setFormValues] = React.useState({
    title: "",
    rating: "",
    releaseDate: "",
  });

  //function to handle change of the form
  const handleChange = (event) => {
    setFormValues({
      ...formvalues,
      [event.target.name]: event.target.value,
    });
  };
//function for submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formvalues);
    //request to the server for add new movie
    try {
    let response =  await axios.post("http://localhost:3002/addMovie", {
        movieData: formvalues,
      });
      //to show the use success message
      setAlert(true);
      setMessage("Movie Added Successfully")
      setVariant("info")
      setTimeout(()=>{
        navigate('/')
      },1000)

    } catch (error) {
      //to show the use error message
      console.log(error);
      setAlert(true);
      setMessage("Something went Wrong")
    }
  };
  return (
    <>
    <Alert show={alert} variant={variant}>
      {message}
    </Alert>
      <h1 className="text-center">Add Movie</h1>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              name="title"
              value={formvalues.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Rating"
              onChange={handleChange}
              name="rating"
              value={formvalues.rating}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label>Release Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Release Date"
              name="releaseDate"
              value={formvalues.releaseDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Movie
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddMovie;
