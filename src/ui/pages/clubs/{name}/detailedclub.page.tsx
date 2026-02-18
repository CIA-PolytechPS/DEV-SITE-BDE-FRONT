import { getClubByShortName } from "@/api/club.api";
import { Club } from "@/shared/models/club.model";
import DetailedClubsSectionComp from "@/ui/components/clubs/detailedclubsection.component";
import { FC, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedClubPage : FC = ():ReactNode => {
    const { short_name } = useParams<{ short_name: string }>();
    const [club, setClub] = useState<Club>();

    useEffect(() => {
        getClubByShortName(short_name ?? "")
            .then(setClub)
            .catch(console.error);
    }, []);

    useEffect(() => {
        console.log("Rendered: DetailedClubPage");
    });

    return (
        !club
            ? (
                <>
                    <h1 style={{ textAlign: "center" }}>Club Not Found</h1>

                    <p style={{ textAlign: "center" }}>
                        Le club que vous cherchez n'existe pas ou une erreur est survenue lors de la récupération de ses données.
                    </p>
                </>
            )
            : (
                <>
                    <DetailedClubsSectionComp club={club} />
                    <div className="separator" />
                </>
            )
    );
};

export default DetailedClubPage;
