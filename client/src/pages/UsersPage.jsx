import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaFileExport, FaPlus } from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import SearchBar from "../components/users/SearchBar";
import UserTable from "../components/users/UserTable";

import EmptyState from "../components/common/EmptyState";
import Pagination from "../components/common/Pagination";

import {
  getUsers,
  exportUsersCSV,
  deleteUser,
} from "../services/userService";

import { toast } from "react-toastify";

import DeleteUserModal from "../components/users/DeleteUserModal";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const [totalPages, setTotalPages] = useState(1);

    const [loading, setLoading] = useState(false);

    const [deleteModal, setDeleteModal] = useState(false);

    const [selectedUserId, setSelectedUserId] = useState(null);

    const [deleteLoading, setDeleteLoading] = useState(false);


    // ==========================================
    // FETCH USERS
    // ==========================================
    const fetchUsers = async () => {
        try {
            setLoading(true);

            const data = await getUsers(currentPage, 5, search);

            setUsers(data.users);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    // ==========================================
    // USE EFFECT
    // ==========================================
    useEffect(() => {
        fetchUsers();
    }, [search, currentPage]);


    const handleDeleteClick = (id) => {
        setSelectedUserId(id);

        setDeleteModal(true);
    };


    const handleDeleteUser = async () => {
        try {
            setDeleteLoading(true);

            const data = await deleteUser(selectedUserId);

            toast.success(data.message);

            fetchUsers();

            setDeleteModal(false);
        } catch (error) {
            toast.error("Failed to delete user");
        } finally {
            setDeleteLoading(false);
        }
    };


    return (
        <MainLayout>

            {/* TOP HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Users Management
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage all users from dashboard
                    </p>
                </div>


                {/* ACTIONS */}
                <div className="flex flex-col sm:flex-row gap-3">

                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />

                    <button
                        onClick={exportUsersCSV}
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300"
                    >
                        <FaFileExport />
                        Export CSV
                    </button>

                    <Link
                        to="/add-user"
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
                    >
                        <FaPlus />
                        Add User
                    </Link>

                </div>
            </div>


            {/* LOADING */}
            {loading ? (
                <h1 className="text-center text-lg font-semibold">
                    Loading...
                </h1>
            ) : (
                users.length > 0 ? (
                    <>
                        <UserTable
                            users={users}
                            handleDeleteClick={handleDeleteClick}
                        />

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                        />
                    </>
                ) : (
                    <EmptyState />
                )
            )}

            <DeleteUserModal
                isOpen={deleteModal}
                onClose={() => setDeleteModal(false)}
                onDelete={handleDeleteUser}
                loading={deleteLoading}
            />

        </MainLayout>
    );
};

export default UsersPage;