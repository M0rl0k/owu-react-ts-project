import React, {useEffect, useState} from 'react';

import {GenreList, MovieList} from "../components";

import css from './MoviesPage.module.css'
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../hooks";


const MoviesPage = () => {


    const [flag, setFlag] = useState<boolean>(false)
    const [genreID, setGenreID] = useState<number>()
    const [genreName, setGenreName] = useState<string>()
    const [, setQuery] = useSearchParams()
    const {state} = useAppContext()

    useEffect(()=> {
        setQuery(prev => {
            prev.delete('page')
            return prev
        })
        setQuery(prev => {
            prev.delete('with_genre')
            return prev
        })
    }, [])



    return (
        <div className={`${css.MoviePage} ${state === 'dark' ? '' : css.light}`}>
            <div className={css.MoviePageWrap}>
                <GenreList setFlag={setFlag} setGenreID={setGenreID} setGenreName={setGenreName}/>
                <MovieList flag={flag} genreID={genreID} genreName={genreName}/>
            </div>
        </div>
    );
};

export {MoviesPage};