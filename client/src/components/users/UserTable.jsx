import {
    FaEye,
    FaEdit,
    FaTrash,
    FaEllipsisV,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";

const UserTable = ({ users, handleDeleteClick }) => {
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <div className="bg-white rounded-md shadow border overflow-hidden">

            {/* TABLE */}
            <div className="overflow-x-auto">

                <table className="w-full text-sm">

                    {/* HEADER */}
                    <thead className="bg-[#1d222b] text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">ID</th>

                            <th className="px-4 py-3 text-left">
                                FullName
                            </th>

                            <th className="px-4 py-3 text-left">
                                Email
                            </th>

                            <th className="px-4 py-3 text-left">
                                Gender
                            </th>

                            <th className="px-4 py-3 text-center">
                                Status
                            </th>

                            <th className="px-4 py-3 text-center">
                                Profile
                            </th>

                            <th className="px-4 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user._id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                {/* ID */}
                                <td className="px-4 py-4">
                                    {index + 1}
                                </td>

                                {/* NAME */}
                                <td className="px-4 py-4">
                                    {user.firstName} {user.lastName}
                                </td>

                                {/* EMAIL */}
                                <td className="px-4 py-4 text-gray-700">
                                    {user.email}
                                </td>

                                {/* GENDER */}
                                <td className="px-4 py-4">
                                    {user.gender === "Male" ? "M" : "F"}
                                </td>

                                {/* STATUS */}
                                <td className="px-4 py-4 text-center align-middle">

                                    <div
                                        className={`
    inline-flex
    items-center
    justify-center
    px-4
    py-2
    rounded-md
    text-white
    text-sm
    font-medium
    ${user.status === "Active"
                                                ? "bg-green-600"
                                                : "bg-red-500"
                                            }
  `}
                                    >
                                        {user.status}
                                    </div>

                                </td>

                                {/* PROFILE */}
                                <td className="px-4 py-4 text-center">

                                    {user.profileImage ? (
                                        <img
                                            src={`https://vineet-sarathe.onrender.com${user.profileImage}`}
                                            alt="profile"
                                            className="w-10 h-10 rounded-full object-cover mx-auto border"
                                        />
                                    ) : (
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                            alt="profile"
                                            className="w-10 h-10 rounded-full mx-auto"
                                        />
                                    )}

                                </td>

                                {/* ACTION */}
                                <td className="px-4 py-4 relative text-center">

                                    <button
                                        onClick={() =>
                                            setOpenMenu(
                                                openMenu === user._id
                                                    ? null
                                                    : user._id
                                            )
                                        }
                                        className="p-2"
                                    >
                                        <FaEllipsisV />
                                    </button>

                                    {openMenu === user._id && (
                                        <div className="absolute right-6 top-12 bg-white shadow-lg border rounded w-36 z-50">

                                            <Link
                                                to={`/view-user/${user._id}`}
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-green-600"
                                            >
                                                <FaEye />
                                                View
                                            </Link>

                                            <Link
                                                to={`/edit-user/${user._id}`}
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-blue-600"
                                            >
                                                <FaEdit />
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    handleDeleteClick(user._id)
                                                }
                                                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600"
                                            >
                                                <FaTrash />
                                                Delete
                                            </button>

                                        </div>
                                    )}

                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default UserTable;