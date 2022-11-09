'use client'; // this must be a client component due to interactivity (onClick).

import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import React from "react";

interface Props {
    isDarkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DarkModeSwitch(props: Props) {
    const {isDarkMode, setDarkMode} = {...props};
    const iconStyles = 'w-8 h-8';

    return (
        <button type='button' className='fixed top-0 right-0 p-2' onClick={() => setDarkMode(!isDarkMode)}>
            {isDarkMode ? <SunIcon className={`${iconStyles} stroke-white`} /> : <MoonIcon className={iconStyles} />}
        </button>
    )
}
