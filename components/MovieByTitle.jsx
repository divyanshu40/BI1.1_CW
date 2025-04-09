import { useState } from "react";
import useFetch from "../src/UseFetch";

const MovieByTitle = ({ title }) => {
    const {data, loading, error} = useFetch(`https://movies-fetch-api.vercel.app/movies/title/${title}`);
    return (
        <>
         {loading ? <p>Loading...</p> : <div>
             {data.movie.title === title ? <div>
                <h2>{data.movie.title}</h2>
                <p>Director: {data.movie.director}</p>
                <p>Release Year: {data.movie.releaseYear}</p>
                <p>Rating: {data.movie.rating}</p>
                <p>Actors: {data.movie.actors.join(", ")}</p>
             </div>: <p>{data.message}</p>}
            </div>}
        </>
    )
}

export default MovieByTitle