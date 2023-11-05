import React from 'react';

import css from './Header.module.css'
import {useNavigate} from "react-router-dom";
import {UserInfo} from "../UserInfo";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {useAppContext} from "../../hooks";

const Header = () => {

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }


    const {state} = useAppContext()


    return (
        <div className={`${css.Header} ${state === `dark` ? '' : css.light}`}>
            <div className={css.HeaderContainer}>
                <div className={css.HeaderContainerLeft}>
                    <span onClick={goHome}>TEKA</span>
                    <ThemeSwitcher/>
                    {/*<div className={css.HeaderContainerLeftTheme}></div>*/}
                </div>
                <div className={css.HeaderContainerRight}>
                    <UserInfo/>
                </div>
            </div>
        </div>
    );
};

export {
    Header
};