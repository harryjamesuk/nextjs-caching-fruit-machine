import 'server-only'; // server component - we just add this so it's explicit, it behaves the same without.

import {getFruitTextColor, getRandomFruit} from "../helpers/fruits";

export default function RandomFruitComp() {
    const fruit = getRandomFruit();
    const textColor = getFruitTextColor(fruit);

    const italicStyles = 'text-slate-600 dark:text-slate-400 italic';

    return (
        <div className='text-center h-screen flex flex-col justify-center'>
            <h1 className='text-6xl font-extrabold'>Random fruit is <span className={`${textColor}`}>{fruit}</span></h1>
            <span className={italicStyles}>Please note: Caching is not
                enabled in dev mode.</span>
            <span className={`mt-4 ${italicStyles}`}>Generated at {new Date().toLocaleTimeString()}</span>
        </div>
    )
}
