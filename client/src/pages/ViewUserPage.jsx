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
        className="
          inline-flex
          items-center
          gap-2
          mb-6
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

      </Link>

      {/* PROFILE CARD */}
      <div className="max-w-5xl mx-auto bg-white border shadow-md rounded-md overflow-hidden">

        {/* HEADER */}
        <div className="bg-[#1c2230] py-8 flex flex-col items-center">

          {/* IMAGE */}
          {
            user.profileImage ? (

              <img
                src={`https://vineet-sarathe.onrender.com${user.profileImage}`}
                alt="profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-white"
              />

            ) : (

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="profile"
                className="w-28 h-28 rounded-full border-4 border-white"
              />

            )
          }

          {/* NAME */}
          <h1 className="text-3xl font-bold text-white mt-4">

            {user.firstName} {user.lastName}

          </h1>

          {/* STATUS */}
          <span
            className={`
              mt-3
              px-4
              py-1
              rounded
              text-sm
              font-medium
              text-white
              ${
                user.status === "Active"
                  ? "bg-green-600"
                  : "bg-red-500"
              }
            `}
          >

            {user.status}

          </span>

        </div>

        {/* DETAILS */}
        <div className="p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* EMAIL */}
            <div className="border rounded p-5 flex items-start gap-4">

              <FaEnvelope className="text-[#a94442] text-xl mt-1" />

              <div>

                <p className="text-gray-500 text-sm mb-1">

                  Email Address

                </p>

                <h3 className="text-lg font-medium text-black break-all">

                  {user.email}

                </h3>

              </div>

            </div>

            {/* MOBILE */}
            <div className="border rounded p-5 flex items-start gap-4">

              <FaPhone className="text-[#a94442] text-xl mt-1" />

              <div>

                <p className="text-gray-500 text-sm mb-1">

                  Mobile Number

                </p>

                <h3 className="text-lg font-medium text-black">

                  {user.mobile}

                </h3>

              </div>

            </div>

            {/* LOCATION */}
            <div className="border rounded p-5 flex items-start gap-4">

              <FaMapMarkerAlt className="text-[#a94442] text-xl mt-1" />

              <div>

                <p className="text-gray-500 text-sm mb-1">

                  Location

                </p>

                <h3 className="text-lg font-medium text-black">

                  {user.location}

                </h3>

              </div>

            </div>

            {/* GENDER */}
            <div className="border rounded p-5 flex items-start gap-4">

              <FaUser className="text-[#a94442] text-xl mt-1" />

              <div>

                <p className="text-gray-500 text-sm mb-1">

                  Gender

                </p>

                <h3 className="text-lg font-medium text-black">

                  {user.gender}

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default ViewUserPage;