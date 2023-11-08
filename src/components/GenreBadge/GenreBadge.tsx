import React, {Dispatch, FC, SetStateAction} from 'react';

import {IGenres} from "../../interfaces";

import css from './GenreBadge.module.css'
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hooks";

interface IProps {
    genre: IGenres
    setFlag?: Dispatch<SetStateAction<boolean>>
    setGenreName?: Dispatch<SetStateAction<string>>
}

const GenreBadge: FC<IProps> = ({genre, setFlag, setGenreName}) => {

    const {name, id} = genre

    const [, setQuery] = useSearchParams({with_genre: ''})

    const handleClick = ():void => {
        setQuery(prev => {
            prev.set('page', '1')
            prev.set('with_genre', `${id}`)
            return prev
        })
        setFlag(prevState => !prevState)
        setGenreName(name)
    }

    const {state} = useAppContext()

    return (
        <a className={`${css.GenreBadge} ${state === 'dark' ? '' : css.light}`} onClick={handleClick}>
            {name}
        </a>
    );
};

export {
    GenreBadge
};