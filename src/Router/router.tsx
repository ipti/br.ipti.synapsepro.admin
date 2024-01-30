import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForms from "../Pages/CreateForms";
import ViewForms from "../Pages/ViewForms";
import PrivateRoute from "./privaterouter";
import ListForm from "../Pages/ListForm";
import CreateOrEditForm from "../Pages/CreateForms";


const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute Component={<CreateOrEditForm />} />} path="/" />
                <Route element={<PrivateRoute Component={<ViewForms />} />} path="/view/:id" />
                <Route element={<PrivateRoute Component={<ListForm />} />} path="/list" />
                <Route element={<PrivateRoute Component={<CreateForms />} />} path="/edit/:id" />
                {/* <Route path="/*" element={<NotFoundPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;