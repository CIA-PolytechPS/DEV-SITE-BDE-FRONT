import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import InfobarLinkBlockComp from "@/ui/components/infobar/infobarlinkblock.component";
import "@/ui/components/infobar/infobar.component.css";

const InfobarComp: FC = () => {
    useEffect(() => {
        console.log("Loaded: InfobarComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: InfobarComp");
    });

    return (
        <footer id="infobar">
            <div className="infobar-info">
                <h2 className="infobar-title">About Us</h2>
                <p>Some text about the BDE will go here (or not) </p>
            </div>

            <div className="infobar-links">
                <InfobarLinkBlockComp title="Quick Links">
                    <Link to="/">Home</Link>
                    <Link to="/event">Event</Link>
                    <Link to="/club">Club</Link>
                </InfobarLinkBlockComp>

                <InfobarLinkBlockComp title="Community">
                    <Link to="https://www.instagram.com/bde_polytech_psaclay">
                        <FontAwesomeIcon icon={faInstagram} />
                        Instagram
                    </Link>

                    <Link to="https://www.facebook.com/bdepolytechpsaclay">
                        <FontAwesomeIcon icon={faFacebook} />
                        Facebook
                    </Link>

                    <Link to="https://www.whatsapp.com">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        Whatsapp
                    </Link>

                    <Link to="https://www.polytech.universite-paris-saclay.fr">
                        <FontAwesomeIcon icon={faGlobe} />
                        contact@bde-pps.fr
                    </Link>
                </InfobarLinkBlockComp>

                <InfobarLinkBlockComp title="Help">
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/status">Status</Link>
                </InfobarLinkBlockComp>
            </div>

            <div className="infobar-legal">
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>

                <p>&copy; BDE Polytech Paris-Saclay 2025</p>
            </div>
        </footer>
    );
};

export default InfobarComp;
