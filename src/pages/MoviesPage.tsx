import React, {useState} from 'react';


import {GenreList, MovieList} from "../components";
import css from './MoviesPage.module.css'
import {useAppContext} from "../hooks";


const MoviesPage = () => {


    const [flag, setFlag] = useState<boolean>(false)
    const {state} = useAppContext()

    return (
        <section className={`${css.MoviePage} ${state === 'dark' ? '' : css.light}`}>
            <div className={css.MoviePageWrap}>
                <GenreList setFlag={setFlag}/>
                <MovieList flag={flag}/>
            </div>
        </section>
    );
};

export {MoviesPage};