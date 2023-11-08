import React, {FC} from 'react';


import css from './GenreBadge.module.css'
import {IGenres} from "../../interfaces";
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hooks";
import {ISetState} from "../../types/ISetState";

interface IProps {
    genre: IGenres
    setFlag?: ISetState<boolean>
}

const GenreBadge: FC<IProps> = ({genre, setFlag}) => {

    const {name, id} = genre

    const [query, setQuery] = useSearchParams({with_genre: ''})

    const handleKey = (e:React.KeyboardEvent<HTMLAnchorElement>):void => {
      if (e.key !== 'Enter') return
        setQuery(prev => {
            prev.set('page', '1')
            prev.set('with_genre', `${id}`)
            return prev
        })
        setFlag(prevState => !prevState)
    }
    const handleClick = ():void => {
        setQuery(prev => {
            prev.set('page', '1')
            prev.set('with_genre', `${id}`)
            return prev
        })
        setFlag(prevState => !prevState)
    }

    const {state} = useAppContext()

    return (
        <a tabIndex={0} className={`${css.GenreBadge} ${state === 'dark' ? '' : css.light}
         ${query.get('with_genre') === genre.id.toString() ? css.active : ''}`}
           onClick={handleClick}
            onKeyDown={(e) => handleKey(e)}>
            {name}
        </a>
    );
};

export {
    GenreBadge
};