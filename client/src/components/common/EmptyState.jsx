import { FaUsers } from "react-icons/fa";

const EmptyState = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-10 text-center">
      
      <div className="flex justify-center mb-4">
        <FaUsers className="text-5xl text-gray-400" />
      </div>

      <h2 className="text-2xl font-bold text-gray-700">
        No Users Found
      </h2>

      <p className="text-gray-500 mt-2">
        Add users to display them here.
      </p>

    </div>
  );
};

export default EmptyState;