import React, { useContext, useEffect, useState } from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate,
    useNavigate,
} from "react-router-dom";
import Home from "../../landing-page/pages/Home";
import { Context } from "../context/store";
import Login from "../screens/auth/login";
import Dashboard from "../screens/Dashboard";
import ProgramAssistant from "../screens/team/ProgramAssistant";
import ProgramAssistantSinglePage from "../screens/team/ProgramAssistantSinglePage";
import Winners from "../screens/Winners";

const MainRouter = ({ reswidth }) => {
    const { state, dispatch } = useContext(Context);
    const [isLoading, setLoading] = useState(true);
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        async function fetchUserData() {
            let promise = new Promise((resolve, reject) => {
                let user_data = localStorage.getItem("user_data");
                user_data = JSON.parse(user_data);
                dispatch({ type: "UPDATE_USER_DATA", user_data: user_data });
                setTimeout(() => {
                    resolve("done!");
                    setLoading(false);
                }, 500);
            });

            let result = await promise;
        }
        fetchUserData();
    }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="*"
                        element={<Navigate to="/page-not-found" />}
                    />

                    <Route element={<Home reswidth={reswidth} />} path="/" />
                    {/* <Route element={<Login reswidth={reswidth} />} path="/" /> */}
                    <Route
                        element={<Dashboard reswidth={reswidth} />}
                        path="/dashboard"
                    />
                    <Route
                        element={<ProgramAssistant reswidth={reswidth} />}
                        path="/program-assistant"
                    />
                    <Route
                        element={<ProgramAssistantSinglePage />}
                        path="/program-assistant-single/:assistant_id"
                    />
                    <Route element={<Winners />} path="/winners" />
                </Routes>
            </Router>
        </>
    );
};
export default MainRouter;
