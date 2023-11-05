import React, {FC} from 'react';
import {Rating} from "react-simple-star-rating";

import css from './StarsRating.module.css'

interface IProps {
    initialValue: number
    readonly: boolean
    allowFraction: boolean
    size: number
    showTooltip?: boolean
}

const StarsRating: FC<IProps> = ({initialValue, readonly, allowFraction, size, showTooltip}) => {

    return (
        <div className={css.StarsRating}>
            <Rating initialValue={initialValue}
                    readonly={readonly}
                    allowFraction={allowFraction}
                    size={size}
                    iconsCount={10}
                    fillColor={'rgb(225, 69, 23)'}
                    emptyColor={'rgb(185, 185, 185)'}
            />
            {showTooltip && <div className={css.StarsRatingNumber}>{initialValue}</div>}
        </div>

    );
};

export {
    StarsRating
};