import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { FaArrowLeft } from "react-icons/fa";

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
        error.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <MainLayout>

      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">

        {/* TOP BAR */}
        <div className="flex items-center mb-6">

          <button
            onClick={() => navigate("/")}
            className="
              flex
              items-center
              gap-2
              bg-[#a94442]
              hover:bg-[#923b39]
              text-white
              px-4
              py-2
              rounded
              transition
            "
          >

            <FaArrowLeft />

            Back

          </button>

        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center text-black mb-8">

          Register Your Details

        </h1>

        {/* FORM */}
        <UserForm
          onSubmit={handleCreateUser}
          loading={loading}
        />

      </div>

    </MainLayout>
  );
};

export default AddUserPage;