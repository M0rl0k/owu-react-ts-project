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
        <div className={`${css.MovieInfo} ${state === 'dark' ? '' : css.light}`}>
            <h2 className={css.MovieInfoHeading}>{title.toUpperCase()}</h2>
            <div className={css.MovieInfoTop}>
                <div className={css.MovieInfoRelease}>
                    <p>{release_date}</p>
                    <p><span>|</span></p>
                    <div className={css.MovieInfoReleaseGenres}>
                        {genres.map(genre => <div className={css.MovieInfoReleaseGenre} key={genre.id}>{genre.name}</div>)}
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
                {adult ? <div className={css.MovieInfoBottomBlock}>18+</div> : <div className={css.MovieInfoBottomBlock}>6+</div>}
                <div className={css.MovieInfoBottomBlock}>{runtime} min</div>
                {production_countries.map((country, index) => <div className={css.MovieInfoBottomBlock} key={index}>{country.name}</div>)}
            </div>
            <div className={css.MovieInfoRating}>
                <StarsRating initialValue={Math.round(vote_average)} readonly={true} allowFraction={true} size={20} showTooltip={false}/>
            </div>
        </div>
    );
};

export {
    MovieInfo
};