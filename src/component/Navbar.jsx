import React, {useState} from 'react';
import {NavLink, useNavigate  } from "react-router-dom";

const Navbar = (props) => {
    const [search, setSearch] = useState();
    const navigate  = useNavigate ();
    const [show_bar, setShow_bar] = useState("");
    const [arow, setArow] = useState("left");

    const submit_form = (e) => {
        e.preventDefault()
        let nav = search.replace(/\s+/g, '-');
        if(nav.charAt(nav.length - 1) === '-') {
            nav = nav.substring(0, nav.length - 1);
        }
        props.setinput(search, nav);
        navigate(nav);
    }

    const chang = (e) => {
        setSearch(e.target.value);
    }

    const show_right_nav = () => {
        setShow_bar(show_bar.length === 0 ? "show-bar": "");
        setArow(arow === "left" ? "right" : "left");
    }

    const close = () => {
        setShow_bar("");
        setSearch("");
    }

    return (
        <div className={'navbar w-full h-[50px] bg-gray-800 flex items-center justify-between sticky top-0 z-50'}>
            <ul className={'text-gray-300 px-5'}>
                <NavLink
                    to={'/'}
                    className={'hover:text-amber-500 nav-item left-item'}
                >
                    <i className="fa-solid fa-earth-americas"></i>
                </NavLink>
                <NavLink
                    to={'/'}
                    className={'font-serif px-3 hover:text-amber-500 nav-item left-item'}
                >
                    Inews
                </NavLink>
            </ul>
            <ul className={`text-gray-300 px-14 flex items-center right-nav-item ${show_bar}`}>
                <NavLink
                    to={'/'}
                    onClick={close}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100' : 'text-gray-400'} hover:text-amber-500 nav-item`
                        );
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/phone'}
                    onClick={close}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100' : 'text-gray-400'} hover:text-amber-500 nav-item `
                        );
                    }}

                >
                    Phone
                </NavLink>
                <NavLink
                    to={'/technology'}
                    onClick={close}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100' : 'text-gray-400'} hover:text-amber-500 nav-item `
                        );
                    }}
                >
                    Technology
                </NavLink>
                <NavLink
                    to={'/coding'}
                    onClick={close}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100' : 'text-gray-400'} hover:text-amber-500 nav-item`
                        );
                    }}
                >
                    Coding
                </NavLink>
                <NavLink
                    to={'/sports'}
                    onClick={close}
                    className={({isActive}) => {
                        return (
                            `px-2 font-bold ${isActive ? 'text-gray-100' : 'text-gray-400'} hover:text-amber-500 nav-item`
                        );
                    }}
                >
                    Sports
                </NavLink>
            </ul>
            <div className={'w-auto h-full flex items-center justify-center'}>
                <form onSubmit={submit_form} className={'form flex items-center pr-2'}>
                    <input type="text" onChange={chang}
                           value={search}
                           className={'input-text rounded-[5px] text-blue-800 p-1 font-bold'}/>
                    <button type={'submit'}
                            className={'search bg-cyan-400 w-[50px] h-[35px] flex items-center justify-center ml-1 text-black rounded-[5px] hover:bg-cyan-700 hover:text-amber-50 transition-all'}>
                        <i className="fa-solid fa-magnifying-glass "></i></button>
                </form>
                <button
                    onClick={show_right_nav}
                    className={'rounded-[5px] mr-2 show-button w-[40px] h-[30px] flex items-center justify-center hidden'}>
                    <i className={`fa-solid fa-chevron-${arow}`}></i>
                    {/*<i className="fa-solid fa-chevron-right"></i>*/}
                </button>
            </div>
        </div>
    );
};

export default Navbar;