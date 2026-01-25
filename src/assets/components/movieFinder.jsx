import { useState, useEffect } from "react";
import films1 from "../script/movieList.js"

const initialFilms = ["Inception", "Il Padrino", "Titanic", "Batman", "Interstellar", "Pulp Fiction"];

function MovieFinder() {

    const [films1, setFilms1] = useState(initialFilms);
    const [filteredFilms, setFilteredFilms] = useState(films1)
    const [searchFilm, setSearchFilm] = useState('')

    useEffect(() => {
        const newFilteredFilms = films1.filter((film) => {
            return film.toLowerCase().includes(searchFilm.toLowerCase())
        });

        setFilteredFilms(newFilteredFilms);

    }, [searchFilm, films1])


    return (
        <>
            <div className="">
                <h2>Lista delle cose da fare</h2><div className="d-flex justify-content-around">
                    <input type="text" className="form-control w-25" value={searchFilm} onChange={e => { setSearchFilm(e.target.value) }} /></div>
                <ul style={{ listStyleType: "none" }}>
                    {filteredFilms.map((film, index) => (
                        <li key={index}>
                            {film}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MovieFinder