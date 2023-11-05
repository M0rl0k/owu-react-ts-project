import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";

import css from './MainLayout.module.css'
import {useAppContext} from "../hooks";

const MainLayout = () => {
    const {state} = useAppContext()
    return (
        <div className={css.GlobalWrap}>
            <Header/>
            <div className={`${css.Spacer} ${state === 'dark' ? '' : css.ligth}`}></div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};