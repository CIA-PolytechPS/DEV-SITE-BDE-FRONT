export function unknownToBoolean(obj: unknown): boolean {
    return Boolean(obj);
}

export function unknownToNumber(obj: unknown): number {
    try {
        return Number(obj);
    }
    catch {
        return Number(String(obj));
    }
}

export function unknownToString(obj: unknown): string {
    if (typeof obj === "string") return obj;

    try {
        return JSON.stringify(obj);
    }
    catch {
        try {
            return String(obj);
        }
        catch {
            return "";
        }
    }
}

export function unknownToDate(obj: unknown): Date {
    try {
        if (obj instanceof Date) return obj;

        return new Date(obj as string | number);
    }
    catch {
        try {
            return new Date(unknownToNumber(obj));
        }
        catch {
            return new Date(unknownToString(obj));
        }
    }
}
