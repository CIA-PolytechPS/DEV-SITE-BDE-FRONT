import { FC, ReactNode, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import "@/ui/pages/home/home.page.css";

const HomePage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: HomePage");
    }, []);

    useEffect(() => {
        console.log("Rendered: HomePage");
    });

    return (
        <div>
            <h1>BDE Polytech Saclay</h1>
            <>
                <h1 className="text-red-500">In development</h1>
                <CircularProgress />
            </>
        </div>
    );
};

export default HomePage;
