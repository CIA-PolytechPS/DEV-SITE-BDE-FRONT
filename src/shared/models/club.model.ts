import { unknownToNumber, unknownToString, unknownToArrayOf } from "../utils/common/convert.util";
import { createMapper, createConverter } from "../utils/common/mapper.util";
import { mapEvent, Event } from "./event.model";
import { mapProject, Project } from "./project.model";

export interface Club {
    id            : number;
    name          : string;
    image_location: string;
    description   : string;
    board_members : string;
    events        : Event[];
    projects      : Project[];
}

export const mapClub = createMapper<Club>({
    id            : createConverter(unknownToNumber, -1),
    name          : createConverter(unknownToString, ""),
    image_location: createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    description   : createConverter(unknownToString, ""),
    board_members : createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    events        : createConverter(unknownToArrayOf(mapEvent), []),
    projects      : createConverter(unknownToArrayOf(mapProject), []),
});
