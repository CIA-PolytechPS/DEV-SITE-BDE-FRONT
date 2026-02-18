import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";
import { unknownToArray, unknownToNumber, unknownToString } from "@/shared/utils/common/convert.util";
import { Event, mapEvent } from "@/shared/models/event.model";
import { Project, mapProject } from "@/shared/models/project.model";

export interface Club {
    id            : number;
    name          : string;
    short_name    : string;
    image_location: string;
    description   : string;
    board_members : string;
    events        : Event[];
    projects      : Project[];
}

export const mapClub = createMapper<Club>({
    id            : createConverter(unknownToNumber, -1),
    name          : createConverter(unknownToString, ""),
    short_name    : createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    image_location: createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    description   : createConverter(unknownToString, ""),
    board_members : createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    events        : createConverter(unknownToArray(mapEvent), []),
    projects      : createConverter(unknownToArray(mapProject), []),
});
