import { useCallback, useState } from "react";
import { SmartRef } from "@/shared/models/common/hook.model";

export function useSmartRef<T>(value: T): SmartRef<T> {
    return new SmartRef(value);
}

export function useReRender(): (..._args: unknown[]) => void {
    const [, reRender] = useState(0);

    return useCallback((..._args: unknown[]) => { reRender((prev) => { return (prev + 1) & (1024 - 1); }); }, []);
}
