import { FC, ReactNode, useEffect } from "react";
import "@/ui/pages/home/home.page.css";

const HomePage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: HomePage");
    }, []);

    useEffect(() => {
        console.log("Rendered: HomePage");
    });

    return (
        <h1>In development</h1>
    );
};

export default HomePage;
