import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { useGeneralVars } from "@/shared/contexts/common/general.context";
import { useReRender } from "@/shared/utils/common/hook.util";
import "@/ui/components/navbar/navbar.component.css";

const NavbarComp: FC = () => {
    const navigate = useNavigate();
    const { navbar_title } = useGeneralVars();
    const reRender = useReRender();

    useEffect(() => {
        console.log("Loaded: NavbarComp");

        const unsubscribers: (() => void)[] = [];

        unsubscribers.push(navbar_title.subscribe(() => { reRender(); }));

        return () => { unsubscribers.forEach((fn) => { fn(); }); };
    }, []);

    useEffect(() => {
        console.log("Rendered: NavbarComp");
    });

    return (
        <header id="navbar">
            <p>Menu</p>
            <h1 className="navbar-title">{navbar_title.current}</h1>

            <FontAwesomeIcon
                icon={faComments}
                onClick={() => { void navigate("/contact"); }}
                className="navbar-icon"
            />
        </header>
    );
};

export default NavbarComp;
