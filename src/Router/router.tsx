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
import ClassroomOne from "../Pages/Classroom/ClassroomOne";
import RegistrationList from "../Pages/Classroom/ClassroomOne/RegistrationList";
import Registration from "../Pages/Classroom/ClassroomOne/RegistrationList/Registration";
import MeetingList from "../Pages/Classroom/ClassroomOne/MeetingList";
import CreateMeeting from "../Pages/Classroom/ClassroomOne/MeetingList/CreateMeeting";
import Meeting from "../Pages/Classroom/ClassroomOne/MeetingList/Meeting";
import AttendanceListGenarate from "../Pages/Classroom/ClassroomOne/MeetingList/Meeting/UploadArchivesAttendanceList/AttendanceListGenarete";
import AttendanceListGenerate from "../Pages/Classroom/ClassroomOne/MeetingList/Meeting/UploadArchivesAttendanceList/AttendanceListGenarete";
import Report from "../Pages/Classroom/ClassroomOne/Report";

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
        <Route element={<PrivateRoute Component={<ListForm />} />} path="/" />
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
          element={<PrivateRoute Component={<ClassroomOne />} />}
          path="/turma/:id"
        />
        <Route
          element={<PrivateRoute Component={<Report />} />}
          path="/turma/:id/relatorio"
        />
        <Route
          element={<PrivateRoute Component={<RegistrationList />} />}
          path="/turma/:id/alunos"
        />
        <Route
          element={<PrivateRoute Component={<Registration />} />}
          path="/turma/:id/aluno/:idRegistration"
        />
        <Route
          element={<PrivateRoute Component={<MeetingList />} />}
          path="/turma/:id/encontros"
        />
        <Route
          element={<PrivateRoute Component={<CreateMeeting />} />}
          path="/turma/:id/encontros/criar"
        />
        <Route
          element={<PrivateRoute Component={<Meeting />} />}
          path="/turma/:id/encontros/:idMeeting"
        />
        <Route
          element={<PrivateRoute Component={<AttendanceListGenerate />} />}
          path="/turma/:id/encontros/:idMeeting/generate"
        />

        <Route
          element={<PrivateRoute Component={<CreateOrEditForm />} />}
          path="/edit/:id"
        />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/register" />
        <Route element={<Register />} path="/matricula" />

        {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
