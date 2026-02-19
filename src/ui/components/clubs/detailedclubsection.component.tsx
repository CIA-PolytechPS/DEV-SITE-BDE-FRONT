import { Club } from "@/shared/models/club.model";
import { FC, ReactNode } from "react";
import Markdown from "react-markdown";

interface DetailedClubSectionProp {
    club: Club;
}

const DetailedClubsSectionComp: FC<DetailedClubSectionProp> = ({ club }: DetailedClubSectionProp): ReactNode => {
    return (
        <section className="py-16 px-8 bg-secondary w-screen relative left-1/2 -translate-x-1/2">
            <div className="max-w-6xl mx-auto grid grid-cols-[35%_65%] gap-10 items-start">
                <div className="">
                    <img className="rounded-full" src={club.image_location} alt="Ceci est une image." />
                </div>

                <div className="text-lg">
                    <h1>{club.name}</h1>

                    <div className="space-y-2">
                        <p>
                            <Markdown>
                                {club.description}
                            </Markdown>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailedClubsSectionComp;
