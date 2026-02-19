import { unknownToString } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Member {
    nom     : string;
    photo   : string;
    fonction: string;
    email   : string;
}

export const mapMember = createMapper<Member>({
    nom     : createConverter(unknownToString, ""),
    photo   : createConverter(unknownToString, ""),
    fonction: createConverter(unknownToString, ""),
    email   : createConverter(unknownToString, ""),
});
