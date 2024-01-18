import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForms from "../Pages/CreateForms";
import ViewForms from "../Pages/ViewForms";
import PrivateRoute from "./privaterouter";


const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute Component={<CreateForms />} />} path="/" />
                <Route element={<PrivateRoute Component={<ViewForms />} />} path="/view" />
                {/* <Route path="/*" element={<NotFoundPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;