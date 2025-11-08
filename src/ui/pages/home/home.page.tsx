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
            <div className="title">
                <div className="zoneTexte">
                    <h2 className="txt">BDE Polytech Paris-Saclay</h2>
                    <p className="smltxt">Bienvenu sur le site du BDE !</p>
                    <p className="smltxt">Retrouvez toutes les activités et évenements !</p>
                </div>
            </div>

            <h1 className="text-red-500">In development</h1>
            <CircularProgress />

        </>
    );
};

export default HomePage;
