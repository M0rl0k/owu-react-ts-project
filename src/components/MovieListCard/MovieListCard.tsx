import React, {FC} from 'react';

import css from './MovieListCard.module.css'
import {IMovieInterface} from "../../interfaces";
import {posterURL} from "../../constants";
import {StarsRating} from "../StarsRating";
import {Link} from "react-router-dom";
import {useAppContext} from "../../hooks";

interface IProps {
    movie: IMovieInterface
}

const MovieListCard: FC<IProps> = ({movie}) => {
    const {state} = useAppContext()

    return (
        <Link to={`${movie.id}`} className={`${css.MovieListCard} ${state === 'dark' ? '' : css.light}`}>
            <div className={css.MovieListCardTop}>
                <img src={`${posterURL}${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className={css.MovieListCardBottom}>
                <p>
                    {movie.title}
                    <br/>
                </p>
                <StarsRating allowFraction={true} readonly={true} initialValue={movie.vote_average} size={10} showTooltip={true}/>
            </div>
        </Link>
    );
};

export {
    MovieListCard
};