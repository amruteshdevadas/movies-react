//imports

import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button";


function MovieCard() {
  //state for movieData
  const [movieData, setMovieData] = React.useState([]);

  React.useEffect(() => {
    fetchList() 
   },[])

   //fetching data from api
   async function fetchList(){
    try {
      let response = await axios.get("http://localhost:3002/getMovies")
    setMovieData(response.data)
    console.log(response.data)
    } catch (error) {
      console.log(error)
    }
   }

  return (
    <>
    <h5 className="text-center">
        Movies
    </h5>
    <div className="text-center">
    <Link to="/addMovie">
    <Button variant="primary">
      Add Movie
    </Button>
    </Link>
    </div>
    
    <div className="row text-center m-5">
      {movieData.length > 0 && movieData.map((movie) => {
        return (
          <Card style={{ width: "18rem" ,background:"rgb(204, 102, 255)"}} className="col-lg-4 col-md-6 col-sm-12 m-2" key={movie.id}>
            <Card.Body >
              <Card.Title>Title :{movie.title}</Card.Title>
              <Card.Text>Rating : {movie.rating}</Card.Text>
              <Card.Text>Release Date :{movie.releaseDate}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      </div>

    </>
  );
}

export default MovieCard;
