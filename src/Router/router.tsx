import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForms from "../Pages/CreateForms";
import ViewForms from "../Pages/Form/ViewForms";
import PrivateRoute from "./privaterouter";
import ListForm from "../Pages/Form/ListForm";
import CreateOrEditForm from "../Pages/CreateForms";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Register from "../Pages/Register";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<PrivateRoute Component={<CreateOrEditForm />} />}
          path="/create"
        />
        <Route
          element={<PrivateRoute Component={<ViewForms />} />}
          path="/view/:id"
        />
        <Route
          element={<PrivateRoute Component={<ListForm />} />}
          path="/list"
        />
        <Route
          element={<PrivateRoute Component={<CreateForms />} />}
          path="/edit/:id"
        />
        <Route element={<Login />} path="/" />
        <Route element={<SignUp />} path="/register" />
        <Route element={<Register />} path="/matricula/:step" />


        {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
