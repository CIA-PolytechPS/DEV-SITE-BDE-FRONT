import { FC, ReactNode, useEffect, Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoadingComp from "@/ui/components/common/loading.component";

import "@/ui/pages/admin/admin.page.css";
import "@/ui/components/admin/event_edit.component.css";

const EventsAdminPage = lazy(() => { return import("@/ui/pages/admin/event/events_admin.page"); });
const ClubsAdminPage = lazy(() => { return import("@/ui/pages/admin/club/clubs_admin.page"); });

const ContentAdminComp: FC = (): ReactNode => {
    return (
        <>
            <h2>Page Not Found !</h2>
        </>
    );
};

const AdminPage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: Admin Page");
    }, []);

    useEffect(() => {
        console.log("Rendered: Admin Page");
    });

    return (
        <div className="admin-page clubs-modification-page">
            <ul className="admin-page-topbars">
                <li>
                    <Link to="/admin/event">Events</Link>
                </li>

                <li>
                    <Link to="/admin/club">Clubs</Link>
                </li>
            </ul>
            
            <Suspense fallback={<LoadingComp size={150} />}>
                <Routes>
                    <Route path="/" element={<ContentAdminComp />} />
                    <Route path="event" element={<EventsAdminPage />} />
                    <Route path="club" element={<ClubsAdminPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default AdminPage;
