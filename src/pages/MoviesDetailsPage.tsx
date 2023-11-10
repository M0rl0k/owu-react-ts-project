import React, {useEffect, useState} from 'react';

import css from './MoviesDetailsPage.module.css'
import {MovieInfo, PosterPreview} from "../components";
import {useAppContext, useAppLocation} from "../hooks";
import {IMovieDetails} from "../interfaces/movieDetailsInterface";
import {moviesService} from "../services";
import {IMovieCast} from "../interfaces";

const MoviesDetailsPage = () => {

    const {pathname} = useAppLocation<string>()
    const id = pathname.split('/')[2];
    const {state} = useAppContext()

    const [movieData, setMovieData]= useState<IMovieDetails>(null)
    const [movieCast, setMovieCast] = useState<IMovieCast>(null)

    useEffect(()=> {
        moviesService.getMovieDetailsById(+id).then(({data}) => setMovieData(data))
        moviesService.getMovieCastList(+id).then(({data}) => setMovieCast(data))
    }, [id])

    return (
        <section className={`${css.MoviesDetailsPage} ${state === 'dark' ? '' : css.light}`}>
            <div className={css.MoviesDetailsPageWrap}>
                {movieData && <PosterPreview posterPath={movieData.poster_path} alt={movieData.title}/>}
                {movieData && movieCast && <MovieInfo movieData={movieData} movieCast={movieCast}/>}
            </div>
        </section>
    );
};

export {MoviesDetailsPage};