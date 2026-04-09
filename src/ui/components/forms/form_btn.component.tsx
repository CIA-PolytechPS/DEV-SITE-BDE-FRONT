import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/form_btn.component.css";

interface FormBtnCompProps {
    text         : string;
    icon?        : IconDefinition;
    btn_disabled?: boolean;
    btnOnClick?  : () => void;
}

const FormBtnComp: FC<FormBtnCompProps> = (props: FormBtnCompProps) => {
    return (
        <button
            type="button"
            disabled={props.btn_disabled ?? false}
            onClick={props.btnOnClick}
        >
            <FontAwesomeIcon icon={props.icon ?? faFile} />
            <span>{props.text}</span>
        </button>
    );
};

export default FormBtnComp;
