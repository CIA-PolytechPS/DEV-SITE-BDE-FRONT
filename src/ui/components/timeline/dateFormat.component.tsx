import { FC, ReactNode, useEffect } from "react";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";

export function sameDate(startdate : Date, enddate : Date): boolean {
    const start = new Date(startdate);
    const end = new Date(enddate);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    return end === start;
}

const formatConverter: FC<{ startdate: Date; enddate: Date }> = ({ startdate, enddate }): ReactNode => {
    useEffect(() => {
        console.log("used formatConverter");
    });

    if (sameDate(startdate, enddate)) {
        return (
            <div>
                <div className="text-[15px] sm:text-[20px] text-gray-700 my-0 leading-none pl-1 ml-0 mr-4">
                    <CalendarIcon />

                    <h3 className="text-[15px] sm:text-[20px] text-gray-700 my-0 leading-none pl-1 ml-1 mr-4">
                        {startdate.getDate()}
                        /
                        {startdate.getMonth()}
                        /
                        {startdate.getFullYear()}
                    </h3>
                </div>

                <div className="text-[15px] sm:text-[20px] text-gray-700 my-0 leading-none pl-1 ml-4 mr-4">
                    <ScheduleIcon />

                    <h3 className="ml-4 mr-4">
                        {startdate.getHours()}
                        H
                        {startdate.getMinutes()}
                        /
                        {enddate.getHours()}
                        H
                        {enddate.getMinutes()}
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="text-[15px] sm:text-[20px] text-gray-700 my-0 leading-none pl-1 ml-4 mr-4">
                <CalendarIcon />
                {startdate.getDate()}
                /
                {startdate.getMonth()}
                /
                {startdate.getFullYear()}
                ~
                {enddate.getDate()}
                /
                {enddate.getMonth()}
                /
                {enddate.getFullYear()}
            </div>

            <div className="text-[15px] sm:text-[20px] text-gray-700 my-0 leading-none pl-1 ml-4 mr-4">
                <ScheduleIcon />
                {startdate.getHours()}
                H
                {startdate.getMinutes()}
                /
                {enddate.getHours()}
                H
                {enddate.getMinutes()}
            </div>
        </div>
    );
};

export default formatConverter;
