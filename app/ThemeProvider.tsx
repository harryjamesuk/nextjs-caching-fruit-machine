'use client'; // we use state for dark mode toggling, therefore this must be a Client Component.
import React from "react";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [isDarkMode, _setDarkMode] = React.useState(false);

    function setDarkMode() {
        _setDarkMode(prevDarkMode => {
            const newDarkMode = !prevDarkMode;

            /*
                DO NOT DO THIS - included for demonstration purposes only.

                This is bad because it introduces side effects which *might* affect the render process.
                (this probably will still work, since setDarkMode is called in an event handler, but
                it's bad practice anyhow).
             */
            if (newDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newDarkMode;
        });
    }

    return (
        <>
            <DarkModeSwitch isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
            {children}
        </>
    );
}
