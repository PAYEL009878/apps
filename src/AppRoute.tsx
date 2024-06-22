import React from "react";
import {
  CreateStudent,
  HomePage,
  StudentOutlet,
  Students,
  UpdateStudent,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import ToApp from "./pages/ToApp";
import Test1 from "./pages/Test1";
const AppRoute: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="student" element={<StudentOutlet />}/>
          <Route path="" element={<Students />} />
          <Route path="create-student" element={<CreateStudent />}/ >
          <Route path="update-student" element={<UpdateStudent />} />
          <Route path="todo-App" element={<ToApp />} />
          <Route path="test" element={<Test1 />}/>      
      </Routes>
    </>
  );
};

export default AppRoute;
