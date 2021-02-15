import { useState, useEffect } from 'react';
import './App.css';
import CorgiImage from './assets/brianna-santellan-Zwvxj3ytTHc-unsplash.jpg';
import CatImage from './assets/nirzar-pangarkar-sDpmnfv-KRk-unsplash.jpg';
import CheetahImage from './assets/michael-constantin-p-0HS1VmqNtHI-unsplash.jpg';

import { Container, TextField, Button, Typography, Paper, Grid, Grow } from '@material-ui/core';

function App() {

  const buttons = [
    { text: "Corgi Dog", src: CorgiImage },
    { text: "Siamese Cat", src: CatImage },
    { text: "Cheetah", src: CheetahImage }
  ];

  const [imageCounter, setImageCounter] = useState(0);

  const handleClickImage = () => {
    setImageCounter((imageCounter + 1) % buttons.length);
  }

  return (
    <Container maxWidth="lg" className="App">
      
      <Typography variant="h1">Image Shuffle</Typography>
      <img className="mainImg" alt="main" src={buttons[imageCounter].src} onClick={handleClickImage} role="button" />


      <Container>
        <Grow in>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            {buttons.map((button, i) => (
              <Grid item key={i} xs={12} sm={3}>
                <Button
                  className="buttonSelect"
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => setImageCounter(i)}
                  fullWidth>
                  {(imageCounter === i) && "*"}{button.text}{(imageCounter === i) && "*"}
                  
                </Button>
              </Grid>

            ))}
          </Grid>
        </Grow>
      </Container>

    </Container>
  );
}

export default App;
