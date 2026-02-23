import { FC, MouseEvent } from "react";
import "@/ui/components/forms/timeline.component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

interface FormBtnCompProps {
    default_value?   : string;
    values?          : string[];
    valueChangeEvent?: (event: MouseEvent, value: string) => void;
}

const TimelineComp: FC<FormBtnCompProps> = ({ default_value = "", values = [], valueChangeEvent }) => {
    return (
        <div className="form-timeline-comp">
            <h3><FontAwesomeIcon icon={faListUl} /> Events List</h3>

            <div className="form-timeline">
                {
                    values.map((event_name) => {
                        return (
                            <button
                                className="form-timeline-container"
                                onClick={(event) => {
                                    valueChangeEvent?.(event, event_name);
                                }}
                            >
                                <div className="form-timeline-content right">
                                    <p style={event_name == default_value ? { color: "#222222", fontWeight: "bold" } : {}}>{event_name}</p>
                                </div>
                            </button>
                        );
                    })
                }

                <button className="form-timeline-container form-timeline-button-add">
                    <div className="form-timeline-content right">
                        <p><FontAwesomeIcon icon={faCirclePlus} /> New</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default TimelineComp;
