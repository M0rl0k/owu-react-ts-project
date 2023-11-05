import React, {useEffect, useState} from 'react';

import css from './MoviesDetailsPage.module.css'
import {MovieInfo, PosterPreview} from "../components";
import {useAppContext, useAppLocation} from "../hooks";
import {IMovieDetails} from "../interfaces/movieDetailsInterface";
import {moviesService} from "../services";

const MoviesDetailsPage = () => {

    const {pathname} = useAppLocation<string>()
    const id = pathname.split('/')[2];

    const [movieData, setMovieData]= useState<IMovieDetails>(null)

    useEffect(()=> {
        moviesService.getMovieDetailsById(+id).then(({data}) => setMovieData(data))
    }, [id])

    const {state} = useAppContext()


    return (
        <div className={`${css.MoviesDetailsPage} ${state === 'dark' ? '' : css.light}`}>
            <div className={css.MoviesDetailsPageWrap}>
                {movieData && <PosterPreview posterPath={movieData.poster_path}/>}
                {movieData && <MovieInfo movieData={movieData}/>}
            </div>
        </div>
    );
};

export {MoviesDetailsPage};