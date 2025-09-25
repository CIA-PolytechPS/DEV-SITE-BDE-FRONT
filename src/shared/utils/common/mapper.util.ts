type Converter<T> = ((obj?: unknown) => T) & { default: T };

export function createConverter<T>(func: (obj?: unknown) => T, default_val: T): Converter<T> {
    return Object.assign(func, { default: default_val });
}

type SchemaType<T> = {
    [K in keyof T]: Converter<T[K]>
};

function rawObjToType<T>(schema: SchemaType<T>, obj?: unknown): T {
    const result = {} as T;
    const safe_obj = obj as Record<PropertyKey, unknown>;

    for (const key in schema) {
        const defaulting = schema[key].default;
        let val;

        try {
            val = safe_obj[key];
        }
        catch {
            result[key] = defaulting;

            continue;
        }

        if (val === undefined || val === null) {
            result[key] = defaulting;

            continue;
        }

        try {
            result[key] = schema[key](val) ?? defaulting;
        }
        catch {
            result[key] = defaulting;
        }
    }

    return result;
}

type Mapper<T> = ((obj: unknown) => T) & { schema: SchemaType<T> };

export function createMapper<T>(schema: SchemaType<T>): Mapper<T> {
    return Object.assign((obj?: unknown) => { return rawObjToType(schema, obj); }, { schema: schema });
}

export function createRestrictedMapper<T, RK extends keyof T>(mapper: Mapper<T>, keys: readonly RK[]): Mapper<Pick<T, RK>> {
    const restricted_schema = {} as SchemaType<Pick<T, RK>>;

    for (const key of keys) {
        restricted_schema[key] = mapper.schema[key];
    }

    return createMapper(restricted_schema);
}
