import RandomFruitComp from "../components/RandomFruitComp";

export const revalidate = 10; // Revalidate this page every 10 seconds.

export default function Home() {
    return <RandomFruitComp/>;
}
