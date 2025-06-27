
import "bootstrap/dist/css/bootstrap.css";
import "../styles/defaults.css";
import "../styles/app.css";
import { Route, Routes, useLocation } from "react-router-dom";
import {NotFound} from "../pages/notfound.tsx";
import {Footer} from "../components/Footer.tsx";
import { getPathMapping } from "../utils/getPathMapping.ts";
import { useEffect } from "react";
import {Navbar} from "../components/Navbar.tsx";
import {OurSidebar} from "../components/sidebar.tsx";

const App = () => {
    const location = useLocation();

    const pathMapping = getPathMapping();
    const currentPath =
        location.pathname;

    // Set Page Title
    const title =
        currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";
    useEffect(() => {
        document.title = `${title || ""} | Bielefeld-CeBiTec - iGEM 2024`;
    }, [title]);

    return (
        <>
            <div className="page-wrapper" >
            {/* Navigation */}
            <Navbar />

            {/* Header and PageContent */}
            <Routes key={location.pathname} >
                {Object.entries(pathMapping).map(([path, {component: Component, navlist: tabinfo}]) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <>
                                {/* <Header /> */}
                              {/*  <Header title={title || ""} />*/}
                                {/* Page content */}

                                    <div className="row">
                                       <OurSidebar tabs={tabinfo ?? []} />
                                        <div className="col-8 max-1240 m-auto py-3" style={{minHeight: "50vh"}}>
                                           <div className="container">
                                               <Component />
                                           </div>
                                          {/*  <CardRow/>*/}
                                        </div>
                                        <div className="col-1 none d-lg-block">
                                            {/* <!-- empty!--> */}
                                        </div>
                                    </div>

                                {/* End page content */}
                            </>
                        }
                    />
                ))}
                <Route
                    path="*"
                    element={
                        <>
                           {/* <Header
                                title="Not Found"
                                /*  lead="The requested URL was not found on this server." */
                            />*/}
                            <NotFound />
                        </>
                    }
                />
            </Routes>
            {/* Footer */}
            <Footer />
            </div>
        </>
    );
};

export default App;
