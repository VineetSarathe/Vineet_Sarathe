import { Link } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

const NotFoundPage = () => {
  return (
    <MainLayout>

      <div className="flex flex-col items-center justify-center text-center py-20">

        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3 max-w-md">
          The page you are looking for does not exist
          or has been moved.
        </p>


        <Link
          to="/"
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-sm"
        >
          Back to Dashboard
        </Link>

      </div>

    </MainLayout>
  );
};

export default NotFoundPage;