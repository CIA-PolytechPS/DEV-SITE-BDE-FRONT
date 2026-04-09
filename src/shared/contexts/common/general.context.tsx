import { FC, ReactNode, createContext, useContext, useEffect } from "react";
import { SmartRef } from "@/shared/models/common/hook.model";
import { useSmartRef } from "@/shared/utils/common/hook.util";
import { mapUser, User } from "@/shared/models/user.model";
import { EventCategory } from "@/shared/models/event.model";
import { getSelf } from "@/api/user.api";
import { getAllEventCategories } from "@/api/event.api";

interface GeneralVarsType {
    token           : SmartRef<string>;
    lang            : SmartRef<string>;
    user            : SmartRef<User>;
    navbar_title    : SmartRef<string>;
    event_categories: SmartRef<EventCategory[]>;
}

const GeneralVarsContext = createContext<GeneralVarsType | undefined>(undefined);

export interface GeneralVarsProviderProps {
    readonly children: ReactNode;
}

export const GeneralVarsProvider: FC<GeneralVarsProviderProps> = (props: GeneralVarsProviderProps): ReactNode => {
    const context_value: GeneralVarsType = {
        token           : useSmartRef(""),
        lang            : useSmartRef("en"),
        user            : useSmartRef(mapUser({})),
        navbar_title    : useSmartRef("BDE - PoPS"),
        event_categories: useSmartRef<EventCategory[]>([]),
    };

    useEffect(() => {
        console.log("Loaded: GeneralVarsProvider");

        const unsubscribers: (() => void)[] = [];

        unsubscribers.push(context_value.token.subscribe((_, curr) => { sessionStorage.setItem("token", curr); }));
        unsubscribers.push(context_value.lang.subscribe((_, curr) => { localStorage.setItem("lang", curr); }));

        unsubscribers.push(context_value.token.subscribe((_, curr) => {
            getSelf(curr)
                .then((value) => { context_value.user.current = value; })
                .catch(alert);
        }, true));

        context_value.token.current = sessionStorage.getItem("token") ?? "";
        context_value.lang.current = localStorage.getItem("lang") ?? "en";

        getAllEventCategories()
            .then((cats) => { context_value.event_categories.current = cats; })
            .catch(console.error);

        return () => { unsubscribers.forEach((fn) => { fn(); }); };
    }, []);

    useEffect(() => {
        console.log("Rendered: GeneralVarsProvider");
    });

    return (
        <GeneralVarsContext.Provider value={context_value}>
            {props.children}
        </GeneralVarsContext.Provider>
    );
};

export function useGeneralVars(): GeneralVarsType {
    const context = useContext(GeneralVarsContext);

    if (!context) throw new Error("useGeneralVars must be used within a GeneralVarsProvider");

    return context;
}
