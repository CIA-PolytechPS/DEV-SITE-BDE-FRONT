import { FC, ReactNode, useEffect } from "react";

const NotFoundPage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: NotFoundPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: NotFoundPage");
    });

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Page not found :(</h1>
            <p>Maybe it is under development</p>
            <p>Or just you try something bad</p>
        </>
    );
};

export default NotFoundPage;
