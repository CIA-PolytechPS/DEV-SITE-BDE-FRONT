import { FC } from "react";
import { Member } from "@/shared/models/member.model";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const MemberCardComp: FC<Member> = (membre: Member) => {
    return (
        <>
            <div
                className="flex flex-col md:flex-row items-start mx-auto my-5
            border border-[#FFAA00] shadow-2xl/50 rounded-3xl bg-[#E6E6E610] w-full max-w-5xl p-4
            hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out"
            >
                <div className="flex-shrink-0 w-64 h-64 overflow-hidden">
                    <img src={membre.photo} alt="Ceci n'est pas une image" className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col justify-between ml-2">
                    <div className="flex flex-row md:flex-col justify-between items-start my-0">
                        <div className="inline-flex items-center my-0">
                            <PersonIcon fontSize="large" className="scale(2)" sx={{ color: "#FFAA00" }} />
                            <h2 className="text-[35px] my-0 leading-none pt-1">{membre.nom}</h2>
                        </div>

                        <h3 className="text-[25px] my-0 leading-none pt-3">{membre.fonction}</h3>
                    </div>

                    <div className="inline-flex items-center my-0 pt-2">
                        <EmailIcon sx={{ color: "#FFAA00" }} />
                        <h3 className="text-sm text-gray-400 my-0 leading-none pl-1">{membre.email}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberCardComp;
