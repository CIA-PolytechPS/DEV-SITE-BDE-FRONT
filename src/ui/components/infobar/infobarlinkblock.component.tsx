import { FC, Children, useEffect, ReactNode } from "react";
import { ComponentProps } from "@/shared/models/common/props.model";
import "@/ui/components/infobar/infobarlinkblock.component.css";

interface InfobarLinkBlockCompProps extends ComponentProps {
    title   : string;
    children: ReactNode[];
}

const InfobarLinkBlockComp: FC<InfobarLinkBlockCompProps> = (props) => {
    useEffect(() => {
        console.log("Loaded: InfobarLinkBlockComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: InfobarLinkBlockComp");
    });

    const items = Children.map(props.children, (child) => { return <li className="infobar-link-block-item">{child}</li>; });

    return (
        <div className="infobar-link-block">
            <h3>{props.title}</h3>
            <ul className="infobar-link-block-content">{items}</ul>
        </div>
    );
};

export default InfobarLinkBlockComp;
