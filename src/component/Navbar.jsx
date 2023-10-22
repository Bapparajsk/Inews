import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={'w-full h-[50px] bg-gray-800 flex items-center justify-between sticky top-0 z-50'}>
            <ul className={'text-gray-300 px-7'}>
                <NavLink
                    to={'/'}
                    className={'hover:text-amber-500'}
                >
                    <i className="fa-solid fa-earth-americas"></i>
                </NavLink>
                <NavLink
                    to={'/'}
                    className={'font-serif px-3 hover:text-amber-500'}
                >
                    Inews
                </NavLink>
            </ul>
            <ul className={'text-gray-300 px-14'}>
                <NavLink
                    to={'/'}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100': 'text-gray-400'} hover:text-amber-500`
                        );
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/phone'}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100': 'text-gray-400'} hover:text-amber-500`
                        );
                    }}
                >
                    Phone
                </NavLink>
                <NavLink
                    to={'/technology'}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100': 'text-gray-400'} hover:text-amber-500`
                        );
                    }}
                >
                    Technology
                </NavLink>
                <NavLink
                    to={'/coding'}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100': 'text-gray-400'} hover:text-amber-500`
                        );
                    }}
                >
                    Coding
                </NavLink>
                <NavLink
                    to={'/sports'}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100': 'text-gray-400'} hover:text-amber-500`
                        );
                    }}
                >
                    Sports
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;