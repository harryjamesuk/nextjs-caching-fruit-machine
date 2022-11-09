const fruits = ['apple', 'banana', 'cherry', 'pear', 'pineapple'];

export function getFruitTextColor(fruit: string) {
    switch (fruit) {
        case 'apple':
            return 'text-lime-500 dark:text-lime-400';
        case 'banana':
            return 'text-yellow-500 dark:text-yellow-300';
        case 'cherry':
            return 'text-red-500 dark:text-red-400';
        case 'pear':
            return 'text-lime-700 dark:text-lime-500';
        case 'pineapple':
            return 'text-yellow-600 dark:text-amber-300';
        default:
            return 'text-slate-500';
    }
}

export function getRandomFruit() {
    return fruits[Math.floor(Math.random() * fruits.length)];
}
