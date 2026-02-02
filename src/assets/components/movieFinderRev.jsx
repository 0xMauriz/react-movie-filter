import { useState, useEffect } from "react";
import films from "../script/movieList.js"

function MovieFinderRev() {

    const [films1, setFilms1] = useState(films);
    const [filteredFilms, setFilteredFilms] = useState(films)
    const [searchFilm, setSearchFilm] = useState('')

    useEffect(() => {
        const newFilteredFilms = films.filter((film) => {
            return film.genre.toLowerCase().includes(searchFilm.toLowerCase())
        });


        setFilteredFilms(newFilteredFilms);

    }, [searchFilm, films1])


    return (
        <>
            <div className="">
                <h2>Lista film</h2>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" onClick={() => setSearchFilm('')} data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        {films.map((film, index) => (
                            <li key={index} className="dropdown-item" onClick={() => setSearchFilm(film.genre)}>
                                {film.genre}
                            </li>
                        ))}
                    </ul>
                    <ul style={{ listStyleType: "none" }}>
                        {filteredFilms.map((film, index) => (
                            <li key={index}>
                                {film.title} - {film.genre}
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    )
}

export default MovieFinderRev