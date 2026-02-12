import {FC , ReactNode, useEffect} from "react";
import { useParams } from "react-router-dom";

const DetailedClubPage : FC = ():ReactNode =>{
    const { clubName } = useParams<{clubName : string}>();

    useEffect(() => {
    console.log("Loaded: DetailedClubPage");

    }, []);

    useEffect(() => {
        console.log("Rendered: DetailedClubPage");
    });

    return (
        <div>     
        </div>
    )
    ;

} 

export default DetailedClubPage