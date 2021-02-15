import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import moviesRouter from './routers/moviesRouter.js';

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors());

app.use('/movies', moviesRouter);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.listen(PORT, () => console.debug(`Server Running on port #${PORT}.`));