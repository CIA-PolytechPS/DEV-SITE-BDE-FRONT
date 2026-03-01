import { unknownToString, unknownToNumber } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Project {
    id         : number;
    club_id    : number;
    title      : string;
    description: string;
    image      : string;

}

export const mapProject = createMapper<Project>({
    id         : createConverter(unknownToNumber, -1),
    club_id    : createConverter(unknownToNumber, -1), // eslint-disable-line @typescript-eslint/naming-convention
    title      : createConverter(unknownToString, ""),
    description: createConverter(unknownToString, ""),
    image      : createConverter(unknownToString, ""),
});
