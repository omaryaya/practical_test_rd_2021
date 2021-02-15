import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Container, TextField, Button, Typography, Paper, Grid, Grow, Card, CardContent } from '@material-ui/core';

function App() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const URL = "http://localhost:5000/movies";

  const getMoviesFromAPI = async () => {

    const result = await axios.get(URL);
    setMovies(result.data.Search);
  }

  useEffect(() => {
    getMoviesFromAPI();
  }, [])

  return (
    <Container maxWidth="lg" className="App" data-test="App">
      
      <Typography variant="h1">Movies</Typography>

      <Container>
        <Grow in>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            {movies?.map((movie, i) => (
              <Grid item key={i} xs={12} sm={3} >
                <Card>
                  <CardContent>
                  <img className="mainImg" alt="main" src={movie.Poster} />
                  <Typography variant="h6">{movie.Title} ({movie.Year})</Typography>
                  </CardContent>
                </Card>
              </Grid>

            ))}
          </Grid>
        </Grow>
      </Container>

    </Container>
  );
}

export default App;
