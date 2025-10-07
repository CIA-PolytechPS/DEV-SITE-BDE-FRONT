import { FC, ReactNode, useEffect } from "react";
import { CircularProgress } from "@mui/material";

interface LoadingCompProps {
    size?: number;
}

const LoadingComp: FC<LoadingCompProps> = (props): ReactNode => {
    useEffect(() => {
        console.log("Loaded: LoadingComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: LoadingComp");
    });

    return (
        <CircularProgress size={props.size ?? 16} enableTrackSlot />
    );
};

export default LoadingComp;
