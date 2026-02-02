import { useState, useEffect } from "react";
import films from "../script/movieList.js"

function MovieFinder() {

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
                <div className="d-flex justify-content-around">
                    <input type="text" className="form-control w-30" placeholder="Digita un genere per filtrare" value={searchFilm} onChange={e => { setSearchFilm(e.target.value) }} /></div>
                <ul style={{ listStyleType: "none" }}>
                    {filteredFilms.map((film, index) => (
                        <li key={index}>
                            {film.title} - {film.genre}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MovieFinder