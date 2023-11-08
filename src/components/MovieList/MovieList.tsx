import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";


import {IMovieInterface, IMoviesRes} from "../../interfaces";
import css from './MovieList.module.css'
import {moviesService} from "../../services";
import {MovieListCard} from "../MovieListCard";
import {useAppContext} from "../../hooks";

interface IProps {
    flag: boolean
    genreName: string
}

const MovieList:FC<IProps> = ({flag, genreName}) => {

    const [response, setResponse] = useState<IMoviesRes<IMovieInterface[]>>();
    const [query, setQuery] = useSearchParams({page: '1'})
    const [value, setInputValue] = useState<string>('')

    useEffect(()=> {
        if (value) {
            moviesService.searchByKeyWord(value, +query.get('page')).then(({data}) => setResponse(data))
            return
        }

        if (query.get('with_genre')) {
            console.log(2)
            moviesService.getMoviesByGenre(+query.get('page'), query.get('with_genre')).then(({data}) => setResponse(data))
            return
        }

        if (!query.get('with_genre') && !value) {
            moviesService.getMovies(+query.get('page')).then(({data}) => setResponse(data))
            return;
        }
    }, [query, flag, value])


    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }

    const nextPage = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }

    const isPrev = +query.get('page') > 1;
    const isNext = +query.get('page') === response?.total_pages


    const {state} = useAppContext()

    return (
        <section className={css.WrapMovieList}>
            <div className={css.MovieListSearch}>
                <div className={`${css.MovieListSearchGenre} ${state === 'dark' ? '' : css.light}`}>{genreName ? genreName : 'All movies'}</div>
                <input type="text"
                       placeholder={'Type to search...'}
                       value={value}
                       onChange={(e) => setInputValue(e.target.value)}
                       className={state === 'dark' ? '': css.light}
                />
                <button
                    disabled={!value}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className={css.MovieList}>
                {response?.results.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}
            </div>
            {response && <div className={`${css.Pagination} ${state === 'dark' ? '' : css.light}`}>
                <button onClick={prevPage} disabled={!isPrev}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <button onClick={nextPage} disabled={isNext}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>}
        </section>

    );
};

export {
    MovieList
};