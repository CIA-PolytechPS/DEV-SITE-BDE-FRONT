import { getClubByShortName } from "@/api/club.api";
import { Club } from "@/shared/models/club.model";
import DetailedClubsSectionComp from "@/ui/components/clubs/detailedclubsection.component";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedClubPage: FC = () => {
    const { name: short_name } = useParams<{ name: string }>();
    const [club, setClub] = useState<Club | undefined>(undefined);
    const [is_loading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (!short_name) {
            setIsLoading(false);
            setError(true);

            return;
        }

        setIsLoading(true);
        setError(false);

        getClubByShortName(short_name)
            .then((club) => {
                setClub(club);

                if (!club) setError(true);
            })
            .catch((err: unknown) => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [short_name]);

    if (is_loading) {
        return <div className="text-center p-10">Chargement en cours...</div>;
    }

    if (error || !club) {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Club Introuvable</h1>

                <p style={{ textAlign: "center" }}>
                    Le club que vous cherchez n'existe pas ou une erreur est survenue.
                </p>
            </>
        );
    }

    return (
        <>
            <DetailedClubsSectionComp club={club} />
            <div className="separator" />
        </>
    );
};

export default DetailedClubPage;
