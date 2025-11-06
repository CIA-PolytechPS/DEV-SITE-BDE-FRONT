import { unknownToNumber, unknownToString } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Club {
    club_id:    number;
    club_name:  string;
    club_pic:   string;
    club_description:  string;
}

export const mapClub = createMapper<Club>({
    club_id: createConverter(unknownToNumber,-1),
    club_name: createConverter(unknownToString,""),
    club_pic: createConverter(unknownToString,""),
    club_description: createConverter(unknownToString,""),
});