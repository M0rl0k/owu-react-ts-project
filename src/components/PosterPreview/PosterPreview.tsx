import React, {FC} from 'react';

import {posterURL} from "../../constants";
import css from './PosterPreview.module.css'

interface IProps {
    posterPath: string
}

const PosterPreview:FC<IProps> = ({posterPath}) => {
    return (
        <div className={css.PosterPreview}>
            <img src={`${posterURL}${posterPath}`} alt=""/>
        </div>
    );
};

export {
    PosterPreview
};