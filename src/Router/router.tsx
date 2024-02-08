import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewForms from "../Pages/Form/ViewForms";
import PrivateRoute from "./privaterouter";
import ListForm from "../Pages/Form/ListForm";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Register from "../Pages/Register";
import CreateOrEditForm from "../Pages/Form/CreateForms";
import ListSchedule from "../Pages/Schedule/ListSchedule";
import FormSchedule from "../Pages/Schedule/FormSchedule";
import ListClassroom from "../Pages/Classroom/ListClassroom";
import FormClassroom from "../Pages/Classroom/FormClassroom";

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
          path="/"
        />
        <Route
          element={<PrivateRoute Component={<ListSchedule />} />}
          path="/cronograma"
        />
        <Route
          element={<PrivateRoute Component={<FormSchedule />} />}
          path="/cronograma/criar"
        />

        <Route
          element={<PrivateRoute Component={<ListClassroom />} />}
          path="/turma"
        />
        <Route
          element={<PrivateRoute Component={<FormClassroom />} />}
          path="/turma/criar"
        />
        <Route
          element={<PrivateRoute Component={<CreateOrEditForm />} />}
          path="/edit/:id"
        />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/register" />
        <Route element={<Register />} path="/matricula/:step" />



        {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
