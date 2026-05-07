import { Routes, Route } from "react-router-dom";

import UsersPage from "../pages/UsersPage";
import AddUserPage from "../pages/AddUserPage";
import EditUserPage from "../pages/EditUserPage";
import ViewUserPage from "../pages/ViewUserPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />

      <Route path="/add-user" element={<AddUserPage />} />

      <Route path="/edit-user/:id" element={<EditUserPage />} />

      <Route path="/view-user/:id" element={<ViewUserPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;