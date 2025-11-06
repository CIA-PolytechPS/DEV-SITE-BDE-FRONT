import { FC, lazy, ReactNode, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComp from "@/ui/components/common/loading.component";
import NavbarComp from "@/ui/components/navbar/navbar.component";
import InfobarComp from "@/ui/components/infobar/infobar.component";

import "@/app.css";


const HomePage         = lazy(() => { return import("@/ui/pages/home/home.page"); });
const NotFoundPage     = lazy(() => { return import("@/ui/pages/not_found.page"); });
const DetailedClubPage = lazy(() => { return import("@/ui/pages/club/detailedclub.page")})

const App: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: App");
    }, []);

    useEffect(() => {
        console.log("Rendered: App");
    });

    return (
        <>
            <NavbarComp />

            <main id="main">
                <Suspense fallback={<LoadingComp size={150} />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/clubs/:name" element={<DetailedClubPage />} />
                    </Routes>
                </Suspense>
            </main>

            <InfobarComp />
        </>
    );
};

export default App;
