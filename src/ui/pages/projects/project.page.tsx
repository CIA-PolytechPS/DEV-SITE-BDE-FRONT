import { FC, ReactNode, useEffect } from "react";

const HomePage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: ProjectPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: ProjectPage");
    });

    return (
        <>
            <div className="bg-[#D0D0D0] rounded-8">
                <div className="m-8">
                    <h2 className="text">BDE Polytech Paris-Saclay</h2>
                    <p className="text-[15px]">Projects Page</p>
                    <p className="text-[15px]">Retrouvez tous les projets</p>
                </div>
            </div>
        </>
    );
};

export default HomePage;
