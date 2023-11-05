import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {GenreBadge} from "../GenreBadge";
import {IGenres} from "../../interfaces";
import {genresService} from "../../services";
import css from './GenreList.module.css'
import {useAppContext} from "../../hooks";


interface IProps {
    setFlag: Dispatch<SetStateAction<boolean>>
    setGenreID : Dispatch<SetStateAction<number>>
    setGenreName : Dispatch<SetStateAction<string>>
}

const GenreList:FC<IProps> = ({setFlag, setGenreID, setGenreName}) => {

    const [genres, setGenres] = useState<IGenres[]>([]);
    const {state} = useAppContext()

    useEffect(()=> {
        genresService.getGenres().then(({data}) => setGenres(data.genres))
    }, [])


    const navigate = useNavigate();

    return (
        <div className={`${css.GenreList} ${state === 'dark' ? '' : css.light}`}>
            <span onClick={()=> navigate('/')}>All Movies</span>
            {genres.map(genre => <GenreBadge key={genre.id} genre={genre} setFlag={setFlag} setGenreID={setGenreID} setGenreName={setGenreName}/>)}
        </div>
    );
};

export {
    GenreList
};