import './styles/globals.css'
import React from "react";
import ThemeProvider from "./ThemeProvider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
                <head /> will contain the components returned by the nearest parent
                head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head/>
            <body className='dark:bg-black dark:text-white'>

            {/*
                Render our provider as deep as possible in the tree so Next.js can optimize the static
                parts of our Server Components.
            */}
            <ThemeProvider>
                {children}
            </ThemeProvider>
            </body>
        </html>
    )
}
