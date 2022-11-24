'use client'; // we use state for dark mode toggling, therefore this must be a Client Component.
import React, {useEffect} from "react";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [isDarkMode, setDarkMode] = React.useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <>
            <DarkModeSwitch isDarkMode={isDarkMode} setDarkMode={() => setDarkMode(!isDarkMode)}/>
            {children}
        </>
    );
}
