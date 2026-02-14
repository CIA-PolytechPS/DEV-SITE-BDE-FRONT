import { FC, useEffect } from "react";
import "@/ui/components/forms/timeline.component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";

const TimeFieldComp: FC = () => {
    useEffect(() => {
        console.log("Loaded: TimelineComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: TimelineComp");
    });

    return (
        <div className="form-timeline-comp">
            <h3><FontAwesomeIcon icon={faListUl} /> Events List</h3>

            <div className="form-timeline">
                <div className="form-timeline-container">
                    <div className="form-timeline-content right">
                        <p>Weekend d'intégration</p>
                    </div>
                </div>

                <div className="form-timeline-container">
                    <div className="form-timeline-content right">
                        <p>Porte Ouverte</p>
                    </div>
                </div>

                <div className="form-timeline-container">
                    <div className="form-timeline-content right">
                        <p>Première journée de ...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeFieldComp;
