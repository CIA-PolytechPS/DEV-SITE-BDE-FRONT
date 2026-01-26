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
            <div className="bg-[#D0D0D0] rounded-8">
                <div className="m-8">
                    <h2 className="text">BDE Polytech Paris-Saclay</h2>
                    <p className="small-text">Bienvenue sur le site du BDE !</p>
                    <p className="small-text">Retrouvez toutes les activités et évenements !</p>
                </div>
            </div>

            <h1 className="text-red-500">In development</h1>
            <CircularProgress />
            <TimelineComp />
        </>
    );
};

export default HomePage;
