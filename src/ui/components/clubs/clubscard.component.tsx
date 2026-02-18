import { FC } from "react";
import { Club } from "@/shared/models/club.model";
import { useNavigate } from "react-router-dom";

interface ClubCardProp {
    club: Club;
}

const ClubCardComp: FC<ClubCardProp> = ({ club }: ClubCardProp) => {
    const navigate = useNavigate();

    return (
        <div
            className="
            flex flex-col md:flex-row items-start mx-auto my-5 bg-[#FFFDED] backdrop-blur-lg border
            border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            rounded-3xl w-full max-w-5xl p-6 hover:shadow-[0_3px_10px_0_rgba(31,38,135,0.37)]
            hover:border-white/40
            hover:-translate-y-2
            transition-all duration-300 ease-in-out
            "
        >
            <div className="flex-shrink-0 w-64 h-64 overflow-hidden rounded-full">
                <img src={club.image_location} alt="Ceci n'est pas une image" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col grow-1 justify-between ml-5">
                <div className="flex justify-between items-start my-0">
                    <h2 className="text-[35px] my-0 leading-none">{club.name}</h2>

                    <button
                        className="hover:bg-[#58AEFF] font-medium text-sm px-4 py-1 rounded-lg translate-y-1/8
                        border-blue-400 border-2"
                        onClick={
                            () => {
                                void navigate(`/club/${club.name}`);
                            }
                        }
                    >
                        More
                    </button>
                </div>

                <p className="mt-2 text-lg leading-relaxed">{club.description}</p>
            </div>
        </div>
    );
};

export default ClubCardComp;
