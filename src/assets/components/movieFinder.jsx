import { useState } from "react";
import films from "../script/movieList.js"

function MovieFinder() {

    const { title, genre } = films;


    return (
        <>
            <div>
                <ul style={{ listStyleType: "none" }}>
                    {films.map((film, index) => (
                        <li key={index}>
                            {film.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MovieFinder