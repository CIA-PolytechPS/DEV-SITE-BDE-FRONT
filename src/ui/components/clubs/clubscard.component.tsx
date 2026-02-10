import { FC } from "react";
import { Club } from "./clubslist.component";

const ClubCardComp: FC<Club> = ({ nom, logo, description }) => {
    return (
        <>
            <div
                className="
            flex flex-col md:flex-row items-start mx-auto my-5 bg-white/10 backdrop-blur-lg border
            border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            rounded-3xl w-full max-w-5xl p-6 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]
            hover:border-white/40
            hover:-translate-y-1
            transition-all duration-300 ease-in-out
            "
            >
                <div className="flex-shrink-0 w-64 h-64 overflow-hidden rounded-full">
                    <img src={logo} alt="Ceci n'est pas une image" className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col justify-between ml-2">
                    <div className="flex justify-between items-start my-0">
                        <h2 className="text-[35px] my-0 leading-none">{nom}</h2>

                        <button
                            className="hover:bg-[#58AEFF] font-medium text-sm px-4 py-1 rounded-lg translate-y-1/8
                        border-blue-400 border-2"
                        >
                            More
                        </button>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </>
    );
};

export default ClubCardComp;
