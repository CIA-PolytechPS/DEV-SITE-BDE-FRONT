import { CSSProperties } from "react";

export interface ComponentProps {
    readonly className?: string;  // eslint-disable-line @typescript-eslint/naming-convention
    readonly style?    : CSSProperties;
}
