import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import MainLayout from "../components/layout/MainLayout";
import UserForm from "../components/users/UserForm";

import { createUser } from "../services/userService";

const AddUserPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);


  // ==========================================
  // CREATE USER
  // ==========================================
  const handleCreateUser = async (formData) => {
    try {
      setLoading(true);

      const data = await createUser(formData);

      toast.success(data.message);

      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <MainLayout>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Add New User
        </h1>

        <p className="text-gray-500 mt-1">
          Fill all details to create user
        </p>
      </div>


      <UserForm
        onSubmit={handleCreateUser}
        loading={loading}
      />

    </MainLayout>
  );
};

export default AddUserPage;