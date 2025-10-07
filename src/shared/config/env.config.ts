import { unknownToBoolean, unknownToString } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

interface IEnv {
    dev     : boolean;
    host    : string;
    api_url : string;
    data_url: string;
}

const mapEnv = createMapper<IEnv>({
    dev     : createConverter(unknownToBoolean, false),
    host    : createConverter(unknownToString, "127.0.0.1"),
    api_url : createConverter(unknownToString, "https://127.0.0.1/api"),  // eslint-disable-line @typescript-eslint/naming-convention
    data_url: createConverter(unknownToString, "https://127.0.0.1/data"),  // eslint-disable-line @typescript-eslint/naming-convention
});

export const ENV = mapEnv(await (await fetch("/runtime-config.json")).json());
