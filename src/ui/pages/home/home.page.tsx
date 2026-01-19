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
            <div className="bg-[#D0D0D0] rounded-8">
                <div className="m-8">
                    <h2 className="text">BDE Polytech Paris-Saclay</h2>
                    <p className="text-[15px]">Bienvenu sur le site du BDE !</p>
                    <p className="text-[15px]">Retrouvez toutes les activités et évenements !</p>
                </div>
            </div>

            <h1 className="text-red-500">In development</h1>
            <CircularProgress />

        </>
    );
};

export default HomePage;
