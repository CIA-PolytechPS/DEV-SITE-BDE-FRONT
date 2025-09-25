import { FC, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ENV } from "@/shared/config/env.config";
import { GeneralVarsProvider } from "@/shared/contexts/common/general.context";

const CONTAINER = document.getElementById("root");

if (!CONTAINER) throw new Error("Can't find root container");

const ROOT = createRoot(CONTAINER);

function render(App: FC) {
    const app_tree = (
        <BrowserRouter>
            <GeneralVarsProvider>
                <App />
            </GeneralVarsProvider>
        </BrowserRouter>
    );

    ROOT.render(ENV.dev ? <StrictMode>{app_tree}</StrictMode> : app_tree);
}

render((await import("@/app")).default);

// @ts-expect-error normally no problem
if (import.meta.webpackHot) {
    console.log("webpackHot enabled");
    // @ts-expect-error we do a check before so no problem
    import.meta.webpackHot.accept("@/app", () => { void (async () => { render((await import("@/app")).default); })(); });  // eslint-disable-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
}
