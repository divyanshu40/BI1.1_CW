import { useState } from "react";
import useFetch from "../src/UseFetch";

const MoviesTitles = () => {
    const { data, loading, error } = useFetch("https://movies-fetch-api.vercel.app/movies");
    return (
        <>
         {loading ? <p>Loading...</p> : <div>
             {data ? <ul>
                {data.movies.map((movie) => {
                    return (
                        <li key={data._id}>{movie.title}</li>
                    )
                })}
             </ul> : <p>{error}</p>}
            </div>}
        </>
    )
}

export default MoviesTitles