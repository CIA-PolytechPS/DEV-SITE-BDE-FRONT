import { FC } from "react";
import { Member } from "@/shared/models/member.model";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

interface MemberCardProps {
    member: Member;
}

const MemberCardComp: FC<MemberCardProps> = (props: MemberCardProps) => {
    return (
        <div
            className="flex flex-row mb-5 p-4 w-full max-w-5xl
            border-3 border-[#58aeff] shadow-2xl/50 rounded-3xl bg-[#d3d3d3]
            hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out"
        >
            <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden">
                <img src={props.member.photo} alt="Ceci n'est pas une image" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col justify-between h-24 sm:h-32 mx-3">
                <div className="flex-2 flex flex-col justify-around item-center my-0">
                    <div className="flex inline-flex items-center my-0">
                        <PersonIcon fontSize="large" className="scale(2)" sx={{ color: "#000000" }} />
                        <h3 className="text-[25px] sm:text-[30px] lg:text-[25px] my-0 leading-none pt-1">{props.member.nom}</h3>
                    </div>

                    <h3 className="flex text-[20px] my-0 leading-none pt-1">{props.member.fonction}</h3>
                </div>

                <div className="inline-flex flex-1 justify-between my-0 pt-2">
                    <EmailIcon sx={{ color: "#000000" }} />
                    <h3 className="text-[15px] sm:text-[20px] text-gray-700 my-0 leading-none pl-1">{props.member.email}</h3>
                </div>
            </div>
        </div>
    );
};

export default MemberCardComp;
