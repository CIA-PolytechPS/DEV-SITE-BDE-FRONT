import { FC, ReactNode, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/common/loading.component.css";

const LoadingComp: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: LoadingComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: LoadingComp");
    });

    return (
        <div className="common-loading">
            <FontAwesomeIcon icon={faRotate} spin />
        </div>
    );
};

export default LoadingComp;
