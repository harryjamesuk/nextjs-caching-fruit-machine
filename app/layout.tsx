'use client'; // we use state for dark mode toggling, therefore this must be a Client Component.

import './styles/globals.css'
import React from "react";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isDarkMode, setDarkMode] = React.useState(false);

    return (
        <html lang="en" className={`${isDarkMode ? 'dark' : ''}`}>
            {/*
                <head /> will contain the components returned by the nearest parent
                head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head/>
            <body className='dark:bg-black dark:text-white'>
                <DarkModeSwitch isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
                {children}
            </body>
        </html>
    )
}
