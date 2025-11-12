import { FC, ReactNode, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import "@/ui/pages/home/home.page.css";
import TimelineComp from "@/ui/components/timeline/timeline.component";

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
                <div className="text-area">
                    <h2 className="text">BDE Polytech Paris-Saclay</h2>
                    <p className="small-text">Bienvenu sur le site du BDE !</p>
                    <p className="small-text">Retrouvez toutes les activités et évenements !</p>
                </div>
            </div>

            <h1 className="text-red-500">In development</h1>
            <CircularProgress />

        </>
    );
};

export default HomePage;
