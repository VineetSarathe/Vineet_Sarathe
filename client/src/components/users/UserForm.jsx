import { useForm } from "react-hook-form";

const UserForm = ({ onSubmit, loading, defaultValues = {}, isEdit = false,}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
  defaultValues,
});

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-md p-6"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* FIRST NAME */}
        <div>
          <label className="block mb-2 font-medium">
            First Name
          </label>

          <input
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>


        {/* LAST NAME */}
        <div>
          <label className="block mb-2 font-medium">
            Last Name
          </label>

          <input
            type="text"
            {...register("lastName", {
              required: "Last name is required",
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>


        {/* EMAIL */}
        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>


        {/* MOBILE */}
        <div>
          <label className="block mb-2 font-medium">
            Mobile
          </label>

          <input
            type="text"
            {...register("mobile", {
              required: "Mobile number is required",
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mobile.message}
            </p>
          )}
        </div>


        {/* GENDER */}
        <div>
          <label className="block mb-2 font-medium">
            Gender
          </label>

          <select
            {...register("gender", {
              required: "Gender is required",
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">
              {errors.gender.message}
            </p>
          )}
        </div>


        {/* STATUS */}
        <div>
          <label className="block mb-2 font-medium">
            Status
          </label>

          <select
            {...register("status")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>


        {/* LOCATION */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Location
          </label>

          <input
            type="text"
            {...register("location")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

      </div>


      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
      >
        {loading
  ? "Submitting..."
  : isEdit
  ? "Update User"
  : "Add User"}
      </button>

    </form>
  );
};

export default UserForm;