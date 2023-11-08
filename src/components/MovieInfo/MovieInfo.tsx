import React, {FC} from 'react';

import {IMovieDetails} from "../../interfaces/movieDetailsInterface";
import css from './MovieInfo.module.css'
import {StarsRating} from "../StarsRating";
import {useAppContext} from "../../hooks";

interface IProps {
    movieData: IMovieDetails
}

const MovieInfo:FC<IProps> = ({movieData}) => {

    const {
        title,
        vote_average,
        genres,
        overview,
        production_countries,
        release_date,
        runtime,
        adult,
        tagline
    } = movieData

    const {state} = useAppContext()

    return (
        <article className={`${css.MovieInfo} ${state === 'dark' ? '' : css.light}`}>
            <h2 className={css.MovieInfoHeading}>{title.toUpperCase()}</h2>
            <div className={css.MovieInfoTop}>
                <div className={css.MovieInfoRelease}>
                    <p>{release_date}</p>
                    <p><span>|</span></p>
                    <div className={css.MovieInfoReleaseGenres}>
                        {genres.map(genre => <p className={css.MovieInfoReleaseGenre} key={genre.id}>{genre.name}</p>)}
                    </div>
                </div>
                <p>{tagline}</p>
            </div>
            <div className={css.MovieInfoMiddle}>
                <div className={css.MovieInfoStoryBlock}>
                    <h3 className={css.MovieInfoStoryBlockHeading}>
                        The Story
                    </h3>
                    <p className={css.MovieInfoStoryBlockText}>
                        {overview}
                    </p>
                </div>
            </div>
            <div className={css.MovieInfoBottom}>
                {adult ? <p className={css.MovieInfoBottomBlock}>18+</p> : <p className={css.MovieInfoBottomBlock}>6+</p>}
                <p className={css.MovieInfoBottomBlock}>{runtime} min</p>
                {production_countries.map((country, index) => <p className={css.MovieInfoBottomBlock} key={index}>{country.name}</p>)}
            </div>
            <div className={css.MovieInfoRating}>
                <StarsRating initialValue={Math.round(vote_average)} readonly={true} allowFraction={true} size={20} showTooltip={false}/>
            </div>
        </article>
    );
};

export {
    MovieInfo
};