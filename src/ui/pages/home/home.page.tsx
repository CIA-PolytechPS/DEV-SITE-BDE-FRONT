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
        <>
            <h1 className="text-red-500">In development</h1>
            <CircularProgress />
        </>
    );
};

export default HomePage;
