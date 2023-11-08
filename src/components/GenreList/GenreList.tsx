import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {GenreBadge} from "../GenreBadge";
import {IGenres} from "../../interfaces";
import {genresService} from "../../services";
import {useAppContext} from "../../hooks";
import {ISetState} from "../../types/ISetState";
import css from './GenreList.module.css'

interface IProps {
    setFlag: ISetState<boolean>
    setGenreName : ISetState<string>
}

const GenreList:FC<IProps> = ({setFlag, setGenreName}) => {

    const [genres, setGenres] = useState<IGenres[]>([]);
    const {state} = useAppContext()

    useEffect(()=> {
        genresService.getGenres().then(({data}) => setGenres(data.genres))
    }, [])

    const navigate = useNavigate();

    return (
        <nav className={`${css.GenreList} ${state === 'dark' ? '' : css.light}`}>
            <span onClick={()=> navigate('/')}>All Movies</span>
            {genres.map(genre => <GenreBadge key={genre.id} genre={genre} setFlag={setFlag} setGenreName={setGenreName}/>)}
        </nav>
    );
};

export {
    GenreList
};