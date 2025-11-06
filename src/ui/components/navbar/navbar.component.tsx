import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useGeneralVars } from "@/shared/contexts/common/general.context";
import { useReRender } from "@/shared/utils/common/hook.util";
import "@/ui/components/navbar/navbar.component.css";

const NavbarComp: FC = () => {
    const { navbar_title } = useGeneralVars();
    const reRender = useReRender();

    useEffect(() => {
        console.log("Loaded: NavbarComp");

        const unsubscribers: (() => void)[] = [];

        unsubscribers.push(
            navbar_title.subscribe(() => {
                reRender();
            }),
        );

        return () => {
            unsubscribers.forEach((fn) => {
                fn();
            });
        };
    }, []);

    useEffect(() => {
        console.log("Rendered: NavbarComp");
    });

    return (
        <header id="navbar" className="">
            <span className="flex flex-auto">
                <img src="./logo.png" />
                <p className="mt-[revert] pl-2">BDE Polytech Paris Saclay - Université Paris Saclay</p>
            </span>

            <nav className="grid grid-cols-5 gap-1">
                <Link className="text-center" to="/clubs">Clubs</Link>
                <Link className="text-center" to="/events">Events</Link>
                <Link className="text-center" to="/members">Members</Link>

                <Link className="m-auto" to="/settings">
                    <FontAwesomeIcon icon={faGear} />
                </Link>

                <button className="rounded-[8px] bg-black  px-3 py-2"><Link className="text-[#F7F7F7]" to="/">Home</Link></button>
            </nav>
        </header>
    );
};

export default NavbarComp;
