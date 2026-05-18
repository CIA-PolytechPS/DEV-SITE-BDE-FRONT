import { unknownToNumber } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Member {
    user_id: number;
    club_id: number;
    job_id : number;
}

export const mapMember = createMapper<Member>({
    user_id: createConverter(unknownToNumber, 0), // eslint-disable-line @typescript-eslint/naming-convention
    club_id: createConverter(unknownToNumber, 0), // eslint-disable-line @typescript-eslint/naming-convention
    job_id : createConverter(unknownToNumber, 0), // eslint-disable-line @typescript-eslint/naming-convention
});
