const DeleteUserModal = ({
  isOpen,
  onClose,
  onDelete,
  loading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Delete User
        </h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this user?
        </p>


        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>


          <button
            onClick={onDelete}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default DeleteUserModal;