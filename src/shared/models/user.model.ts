import { unknownToDate, unknownToNumber, unknownToString } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface User {
    id             : number;
    email          : string;
    pseudo         : string;
    firstname      : string;
    lastname       : string;
    created_on     : Date;
    last_connection: Date;
}

export const mapUser = createMapper<User>({
    id             : createConverter(unknownToNumber, -1),
    email          : createConverter(unknownToString, ""),
    pseudo         : createConverter(unknownToString, ""),
    firstname      : createConverter(unknownToString, ""),
    lastname       : createConverter(unknownToString, ""),
    created_on     : createConverter(unknownToDate, new Date()),  // eslint-disable-line @typescript-eslint/naming-convention
    last_connection: createConverter(unknownToDate, new Date()),  // eslint-disable-line @typescript-eslint/naming-convention
});

export interface Role {
    id  : number;
    name: string;
}

export const mapRole = createMapper<Role>({
    id  : createConverter(unknownToNumber, -1),
    name: createConverter(unknownToString, ""),
});
