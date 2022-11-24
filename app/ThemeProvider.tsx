'use client'; // we use state for dark mode toggling, therefore this must be a Client Component.
import React from "react";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [isDarkMode, setDarkMode] = React.useState(false);

    /*
        Another valid solution is to call our side effect within the event handler. This means we don't have to
        use onEffect.
        Note: I'm not saying we should actively avoid onEffect. The docs on 'You Might Not Need an Effect' are a
        great read: https://beta.reactjs.org/learn/you-might-not-need-an-effect
        but there are cases (like this one) where it's a good fit.

        We should be careful when writing code like this because it's possible (although unlikely) that the user
        could 'click multiple times' before the new state is set (since state is set asynchronously).
        In other words, it's possible we could run our side effects, and have multiple scheduled updates to our state.

        e.g) Let's say we managed to click 3 times before the state was updated. We would have 3 scheduled updates:
        setDarkMode(true), setDarkMode(true), setDarkMode(true).
        This would also mean we've called document.documentElement.classList.add('dark'); 3 times.
        In our case, this isn't an issue, because we can't add or remove the same class twice, so it's a no-op.

        This is also why we must use the 'newDarkMode' variable for conditions and then set the state afterwards.
        If we setState() and tried to use that value, our state would be stale, and we'd be using an outdated value,
        since the state change is scheduled asynchronously.

        It's perfectly valid code, but I think it's a little more readable to use onEffect because you know the state
        at that time isn't stale.
     */
    function handleClick() {
        const newDarkMode = !isDarkMode;

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        setDarkMode(newDarkMode);
    }

    return (
        <>
            <DarkModeSwitch isDarkMode={isDarkMode} setDarkMode={handleClick}/>
            {children}
        </>
    );
}
