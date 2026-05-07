import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import MainLayout from "../components/layout/MainLayout";
import UserForm from "../components/users/UserForm";

import {
  getSingleUser,
  updateUser,
} from "../services/userService";

const EditUserPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);


  // ==========================================
  // FETCH USER
  // ==========================================
  const fetchUser = async () => {
    try {
      setLoading(true);

      const data = await getSingleUser(id);

      setUser(data.user);
    } catch (error) {
      toast.error("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };


  // ==========================================
  // UPDATE USER
  // ==========================================
  const handleUpdateUser = async (formData) => {
    try {
      setLoading(true);

      const data = await updateUser(id, formData);

      toast.success(data.message);

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to update user"
      );
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchUser();
  }, []);


  // ==========================================
  // LOADING
  // ==========================================
  if (loading && !user) {
    return (
      <MainLayout>
        <h1 className="text-center text-xl font-semibold">
          Loading...
        </h1>
      </MainLayout>
    );
  }


  return (
    <MainLayout>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Edit User
        </h1>

        <p className="text-gray-500 mt-1">
          Update user details
        </p>
      </div>


      {user && (
        <UserForm
          onSubmit={handleUpdateUser}
          loading={loading}
          defaultValues={user}
          isEdit={true}
        />
      )}

    </MainLayout>
  );
};

export default EditUserPage;