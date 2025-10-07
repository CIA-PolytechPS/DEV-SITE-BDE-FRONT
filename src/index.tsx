import { FC, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ENV } from "@/shared/config/env.config";
import { GeneralVarsProvider } from "@/shared/contexts/common/general.context";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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

// @ts-expect-error normally no runtime/compile problem
if (import.meta.webpackHot) {
    console.log("webpackHot enabled");

    // @ts-expect-error it is executed only if the detected error is not an error
    import.meta.webpackHot.accept(  // eslint-disable-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        "@/app",
        () => {
            void import("@/app")
                .then((value) => { return value.default; })
                .then(render);
        },
    );
}
