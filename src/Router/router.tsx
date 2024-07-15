import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormClassroom from "../Pages/Classroom/ClassroomCreate";
import ClassroomOne from "../Pages/Classroom/ClassroomOne";
import RegistrationList from "../Pages/Classroom/ClassroomOne/RegistrationList";
import Registration from "../Pages/Classroom/ClassroomOne/RegistrationList/Registration";
import Report from "../Pages/Classroom/ClassroomOne/Report";
import ListClassroom from "../Pages/Classroom/ListClassroom";
import Help from "../Pages/Help";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register";
import CreateTechnologySocial from "../Pages/School/CreateSchool";
import TecnologySocial from "../Pages/School/SchoolList";
import BeneficiariesCreate from "../Pages/Student/StudentCreate";
import BeneficiariesEdit from "../Pages/Student/StudentEdit";
import BeneficiariesList from "../Pages/Student/StudentList";
import CreateUser from "../Pages/Users/CreateUser";
import ListUsers from "../Pages/Users/ListUsers";
import PrivateRoute from "./privaterouter";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<PrivateRoute Component={<TecnologySocial />} />}
          path="/"
        />
        <Route
          element={<PrivateRoute Component={<ListClassroom />} />}
          path="/turma"
        />
        <Route
          element={<PrivateRoute Component={<FormClassroom />} />}
          path="/turma/criar/:id"
        />
        <Route
          element={<PrivateRoute Component={<ClassroomOne />} />}
          path="/turma/:id"
        />
        <Route
          element={<PrivateRoute Component={<Report />} />}
          path="/turma/:id/relatorio"
        />
        {/* <Route
          element={<PrivateRouteNotLayout Component={<ReportClassroom />} />}
          path="/turma/:id/relatorio/pdf"
        /> */}
        <Route
          element={<PrivateRoute Component={<RegistrationList />} />}
          path="/turma/:id/alunos"
        />
        <Route
          element={<PrivateRoute Component={<Registration />} />}
          path="/turma/:id/aluno/:idRegistration"
        />
        <Route
          element={<PrivateRoute Component={<BeneficiariesList />} />}
          path="/beneficiarios"
        />
        <Route
          element={<PrivateRoute Component={<BeneficiariesCreate />} />}
          path="/beneficiarios/criar"
        />
        <Route
          element={<PrivateRoute Component={<BeneficiariesEdit />} />}
          path="/beneficiarios/:id"
        />
        <Route
          element={<PrivateRoute Component={<ListUsers />} />}
          path="/users"
        />
        <Route element={<PrivateRoute Component={<Help />} />} path="/ajuda" />
        <Route
          element={<PrivateRoute Component={<TecnologySocial />} />}
          path="/escolas"
        />
        <Route
          element={<PrivateRoute Component={<CreateTechnologySocial />} />}
          path="/escolas/criar"
        />
        <Route
          element={<PrivateRoute Component={<CreateUser />} />}
          path="/users/criar"
        />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/matricula" />
        {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
