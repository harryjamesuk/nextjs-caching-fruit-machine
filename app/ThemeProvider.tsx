'use client'; // we use state for dark mode toggling, therefore this must be a Client Component.
import React, {useEffect} from "react";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [isDarkMode, setDarkMode] = React.useState(false);

    /*
        Both useEffect and useLayoutEffect are good solutions.
        Note the differences when using SSR could be of importance:
        https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85

        Note that useLayoutEffect gives you a warning when using SSR, and must be wrapped in a condition
        ('if typeof window !== 'undefined'') to avoid it (and this in itself breaks the rules of hooks).
        This edge case could be acceptable to break this rule, since the check always passes on the client
        and always fails on the server.

        Note the main difference between the two functions is useLayoutEffect will fire the function
        and process the updates inside it immediately whereas useEffect will fire the function but defer
        updates.
        In our case, it makes sense just to use useEffect, since there is no real performance benefit.
        This is because React will do the following:
        1. isDarkMode changes, triggers a component re-render.
        2. React 'commits changes' to the DOM. In fact, at this stage there is no changes as far as React knows
        (changing isDarkMode never affects the React virtual DOM). ** This is the main reason we can use useEffect
        instead of useLayoutEffect ** - we never paint, do something that affects the DOM and then paint again, we
        only paint once ** because the virtual DOM is never affected **.
        3. useEffect is triggered in the commit phase, React itself never triggers a browser paint because
        according to React, nothing has changed. However, since our side effect now runs, the browser will
        perform a browser paint.
     */
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
