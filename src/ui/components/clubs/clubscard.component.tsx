import { FC } from "react";
import { Club } from "./clubslist.component";

const ClubCardComp: FC<Club> = ({ nom, logo, description }) => {
    return (
        <>
            <div
                className="flex flex-col md:flex-row items-start mx-auto my-5
            border border-[#F5F5F7] shadow-2xl rounded-3xl bg-[#E6E6E610] w-full max-w-5xl p-4
            hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out"
            >
                <div className="flex-shrink-0 w-64 h-64 overflow-hidden">
                    <img src={logo} alt="Ceci n'est pas une image" className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col justify-between ml-2">
                    <div className="flex justify-between items-start my-0">
                        <h2 className="text-[35px] my-0 leading-none">{nom}</h2>
                        <button className="hover:bg-[#e2910e] font-medium text-sm px-4 py-1 rounded-lg translate-y-1/8  ">More</button>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </>
    );
};

export default ClubCardComp;
