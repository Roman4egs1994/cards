import React from 'react';
import styled from  './Header.module.scss'
import {Tabs} from "./Tabs/Tabs";

export const Header = () => {
    return (
        <header className={styled.header}>
            <div className={styled.packsList}>
                <Tabs/>
            </div>
        </header>
    );
};

