import { unknownToString } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Events {
    nom        : string;
    photo      : string;
    fonction   : string;
    description: string;
}

export const mapEvents = createMapper<Events>({

    nom        : createConverter(unknownToString, ""),
    photo      : createConverter(unknownToString, ""),
    fonction   : createConverter(unknownToString, ""),
    description: createConverter(unknownToString, ""),
});
