import { FaEye, FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";
import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserTable = ({ users, handleDeleteClick }) => {

    const [openMenu, setOpenMenu] = useState(null);

    const getRandomColor = (seed) => {
        const colors = [
            "#f87171", "#60a5fa", "#34d399",
            "#fbbf24", "#a78bfa", "#fb7185"
        ];

        let index = seed.charCodeAt(0) % colors.length;
        return colors[index];
    };
    return (
        <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full">
                <thead className="bg-gray-50 border-b">

                    <tr>

                        <th className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wide">
                            Name
                        </th>

                        <th className="px-6 py-5 text-center text-sm font-bold text-gray-900 uppercase tracking-wide">
                            Email
                        </th>

                        <th className="px-6 py-5 text-center text-sm font-bold text-gray-900 uppercase tracking-wide">
                            Mobile
                        </th>

                        <th className="px-6 py-5 text-center text-sm font-bold text-gray-900 uppercase tracking-wide">
                            Status
                        </th>

                        <th className="px-6 py-5 text-center text-sm font-bold text-gray-900 uppercase tracking-wide">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user._id}
                            className="border-b hover:bg-blue-50/40 transition duration-200"
                        >
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">

                                    <div className="relative flex-shrink-0">

                                        {/* <div
                                           className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold shadow-sm"
                                            style={{
                                                backgroundColor: getRandomColor(user.firstName)
                                            }}
                                        >
                                            {user.firstName.charAt(0).toUpperCase()}
                                        </div> */}

                                        {
                                            user.profileImage ? (
                                                <img
                                                    src={`https://vineet-sarathe.onrender.com${user.profileImage}`}
                                                    alt="profile"
                                                    className="w-11 h-11 rounded-full object-cover shadow-sm"
                                                />
                                            ) : (
                                                <div
                                                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold shadow-sm"
                                                    style={{
                                                        backgroundColor: getRandomColor(user.firstName)
                                                    }}
                                                >
                                                    {user.firstName.charAt(0).toUpperCase()}
                                                </div>
                                            )
                                        }

                                        <span
                                            className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white ${user.gender === "Male"
                                                ? "bg-blue-500 text-white"
                                                : "bg-pink-500 text-white"
                                                }`}
                                        >
                                            {user.gender === "Male" ? "M" : "F"}
                                        </span>

                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900 capitalize">
                                            {user.firstName} {user.lastName}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            {user.location}
                                        </p>
                                    </div>

                                </div>
                            </td>

                            <td className="px-6 py-4 text-center">
                                {user.email}
                            </td>

                            <td className="px-6 py-4 text-center">
                                {user.mobile}
                            </td>

                            <td className="px-6 py-4 text-center">
                                <StatusBadge status={user.status} />
                            </td>

                            <td className="px-6 py-4 relative text-center">

                                <button
                                    onClick={() =>
                                        setOpenMenu(
                                            openMenu === user._id ? null : user._id
                                        )
                                    }
                                    className="p-2 hover:bg-gray-100 rounded-lg"
                                >
                                    <FaEllipsisV />
                                </button>


                                {openMenu === user._id && (
                                    <div className="absolute right-6 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-lg z-10 overflow-hidden">

                                        <Link
                                            to={`/view-user/${user._id}`}
                                            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-blue-50 transition text-blue-600"
                                        >
                                            <FaEye />
                                            View
                                        </Link>


                                        <Link
                                            to={`/edit-user/${user._id}`}
                                            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-blue-50 transition text-green-600"
                                        >
                                            <FaEdit />
                                            Edit
                                        </Link>


                                        <button
                                            onClick={() => handleDeleteClick(user._id)}
                                            className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-blue-50 transition text-red-600"
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
    );
};

export default UserTable;