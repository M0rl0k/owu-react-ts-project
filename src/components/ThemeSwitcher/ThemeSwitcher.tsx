import React, {useState} from 'react';


import css from './ThemeSwitcher.module.css'
import {useAppContext} from "../../hooks";
const ThemeSwitcher = () => {

    const [isOn, setIsOn] = useState<boolean>(false);
    const {state, setState} = useAppContext()

    const handleSwitch = () => {
        setIsOn(!isOn);
        if (state === 'dark') {
            setState('light')
        }
        if (state === 'light') {
            setState('dark')
        }
    };

    return (
        <div className={css.ThemeSwitcher}>
            <input
                type="checkbox"
                className={css.Checkbox}
                id="themeSwitch"
                checked={isOn}
                onChange={handleSwitch}
            />
            <label className={css.Switch} htmlFor="themeSwitch">
                <span className={`${css.Slider} ${isOn? css.on : css.off} ${state === 'dark'? '' : css.light}`}></span>
            </label>
        </div>
    );
};

export {
    ThemeSwitcher
};