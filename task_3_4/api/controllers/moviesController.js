import * as Constants from '../Constants.js';
import axios from 'axios';

export const getMovies = async (req, res) => {

    return axios.get(Constants.URL)
        .then((apiResponse) => {
            const movies = apiResponse.data;
            console.debug("Movies", movies);
            res.status(200).json(apiResponse.data);
        })
        .catch((err) => {

            console.error(err);
            res.status(404).json({ message: err.message });

        });




};