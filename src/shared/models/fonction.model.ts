import { unknownToNumber, unknownToString } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Fonction {
    id       : number;
    name     : string;
    group_id : number;
    parent_id: number;
}

export const mapFonction = createMapper<Fonction>({
    id       : createConverter(unknownToNumber, 0),
    name     : createConverter(unknownToString, ""),
    group_id : createConverter(unknownToNumber, 0), // eslint-disable-line @typescript-eslint/naming-convention
    parent_id: createConverter(unknownToNumber, 0), // eslint-disable-line @typescript-eslint/naming-convention
});
