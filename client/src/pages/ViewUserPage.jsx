import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";

import { getSingleUser } from "../services/userService";

const ViewUserPage = () => {
  const { id } = useParams();

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
      console.log(error);
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
  if (loading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center py-20">
          <h1 className="text-xl font-semibold text-gray-600">
            Loading...
          </h1>
        </div>
      </MainLayout>
    );
  }


  // ==========================================
  // NO USER
  // ==========================================
  if (!user) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center py-20">
          <h1 className="text-xl font-semibold text-red-500">
            User not found
          </h1>
        </div>
      </MainLayout>
    );
  }


  return (
    <MainLayout>

      {/* BACK BUTTON */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-8 text-blue-600 hover:text-blue-800 transition"
      >
        <FaArrowLeft />
        Back to Users
      </Link>


      {/* PROFILE CARD */}
      <div className="bg-white border rounded-3xl shadow-sm p-8 max-w-4xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col items-center text-center border-b pb-8">

          <div className="relative">

            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-4xl font-bold text-white shadow-md">
              {user.firstName?.charAt(0)}
            </div>

            <div
              className={`absolute bottom-1 right-1 w-7 h-7 rounded-full border-4 border-white flex items-center justify-center text-xs font-bold text-white ${
                user.gender === "Male"
                  ? "bg-blue-500"
                  : "bg-pink-500"
              }`}
            >
              {user.gender === "Male" ? "M" : "F"}
            </div>

          </div>


          <h1 className="text-3xl font-bold mt-5 text-gray-800">
            {user.firstName} {user.lastName}
          </h1>


          <span
            className={`mt-3 px-4 py-1 rounded-full text-sm font-medium ${
              user.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user.status}
          </span>

        </div>


        {/* DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

          <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-lg" />

            <div>
              <p className="text-sm text-gray-500">
                Email
              </p>

              <h3 className="font-medium text-gray-800 break-all">
                {user.email}
              </h3>
            </div>
          </div>


          <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
            <FaPhone className="text-green-500 text-lg" />

            <div>
              <p className="text-sm text-gray-500">
                Mobile
              </p>

              <h3 className="font-medium text-gray-800">
                {user.mobile}
              </h3>
            </div>
          </div>


          <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500 text-lg" />

            <div>
              <p className="text-sm text-gray-500">
                Location
              </p>

              <h3 className="font-medium text-gray-800">
                {user.location}
              </h3>
            </div>
          </div>


          <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
            <FaUser className="text-purple-500 text-lg" />

            <div>
              <p className="text-sm text-gray-500">
                Gender
              </p>

              <h3 className="font-medium text-gray-800">
                {user.gender}
              </h3>
            </div>
          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default ViewUserPage;