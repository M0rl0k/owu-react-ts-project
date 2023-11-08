import React from 'react';
import {useNavigate} from "react-router-dom";

import {UserInfo} from "../UserInfo";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {useAppContext} from "../../hooks";
import css from './Header.module.css'

const Header = () => {

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    const {state} = useAppContext()

    return (
        <header className={`${css.Header} ${state === `dark` ? '' : css.light}`}>
            <div className={css.HeaderContainer}>
                <div className={css.HeaderContainerLeft}>
                    <span onClick={goHome}>TEKA</span>
                    <ThemeSwitcher/>
                </div>
                <div className={css.HeaderContainerRight}>
                    <UserInfo/>
                </div>
            </div>
        </header>
    );
};

export {
    Header
};