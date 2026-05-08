import { useForm } from "react-hook-form";
import imageCompression from "browser-image-compression";

const UserForm = ({
  onSubmit,
  loading,
  defaultValues = {},
  isEdit = false,
}) => {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const submitForm = (data) => {

    const formData = new FormData();

    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("gender", data.gender);
    formData.append("status", data.status);
    formData.append("location", data.location);

    if (data.profileImage) {

      formData.append(
        "profileImage",
        data.profileImage
      );

    }

    onSubmit(formData);
  };

  return (

    <form
      onSubmit={handleSubmit(submitForm)}
      className="bg-white border rounded-md shadow-md p-6"
    >

      {/* TOP IMAGE */}
      <div className="flex justify-center mb-8">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="user"
          className="w-20 h-20 rounded-full"
        />

      </div>

      {/* FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* FIRST NAME */}
        <div>

          <label className="block mb-2 text-lg font-medium">

            First name

          </label>

          <input
            type="text"
            placeholder="Enter FirstName"
            {...register("firstName", {
              required: "First name is required",
            })}
            className="
              w-full
              border
              border-gray-300
              rounded
              px-4
              py-3
              outline-none
              focus:ring-1
              focus:ring-[#a94442]
            "
          />

          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">

              {errors.firstName.message}

            </p>
          )}

        </div>

        {/* LAST NAME */}
        <div>

          <label className="block mb-2 text-lg font-medium">

            Last Name

          </label>

          <input
            type="text"
            placeholder="Enter LastName"
            {...register("lastName", {
              required: "Last name is required",
            })}
            className="
              w-full
              border
              border-gray-300
              rounded
              px-4
              py-3
              outline-none
              focus:ring-1
              focus:ring-[#a94442]
            "
          />

          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">

              {errors.lastName.message}

            </p>
          )}

        </div>

        {/* EMAIL */}
        <div>

          <label className="block mb-2 text-lg font-medium">

            Email address

          </label>

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
            })}
            className="
              w-full
              border
              border-gray-300
              rounded
              px-4
              py-3
              outline-none
              focus:ring-1
              focus:ring-[#a94442]
            "
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">

              {errors.email.message}

            </p>
          )}

        </div>

        {/* MOBILE */}
        <div>

          <label className="block mb-2 text-lg font-medium">

            Mobile

          </label>

          <input
            type="text"
            placeholder="Enter Mobile"
            {...register("mobile", {
              required: "Mobile number is required",
            })}
            className="
              w-full
              border
              border-gray-300
              rounded
              px-4
              py-3
              outline-none
              focus:ring-1
              focus:ring-[#a94442]
            "
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">

              {errors.mobile.message}

            </p>
          )}

        </div>

        {/* GENDER */}
        <div>

          <label className="block mb-3 text-lg font-medium">

            Select Your Gender

          </label>

          <div className="space-y-2">

            <label className="flex items-center gap-2">

              <input
                type="radio"
                value="Male"
                {...register("gender", {
                  required: "Gender is required",
                })}
              />

              Male

            </label>

            <label className="flex items-center gap-2">

              <input
                type="radio"
                value="Female"
                {...register("gender", {
                  required: "Gender is required",
                })}
              />

              Female

            </label>

          </div>

          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">

              {errors.gender.message}

            </p>
          )}

        </div>

        {/* STATUS */}
        <div>

          <label className="block mb-2 text-lg font-medium">

            Select Your Status

          </label>

          <select
            {...register("status")}
            className="
              w-full
              border
              border-gray-300
              rounded
              px-4
              py-3
              outline-none
              focus:ring-1
              focus:ring-[#a94442]
            "
          >

            <option value="">
              Select...
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

          </select>

        </div>

        {/* PROFILE IMAGE */}
        <div>

          <label className="block mb-2 text-lg font-medium">

            Select Your Profile

          </label>

          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {

              const file = e.target.files[0];

              if (!file) return;

              const compressedFile =
                await imageCompression(file, {
                  maxSizeMB: 0.2,
                  maxWidthOrHeight: 500,
                  useWebWorker: true,
                });

              setValue(
                "profileImage",
                compressedFile
              );

            }}
            className="
              w-full
              border
              border-gray-300
              rounded
              px-4
              py-2
            "
          />

        </div>

        {/* LOCATION */}
        <div>

          <label className="block mb-2 text-lg font-medium">

            Enter Your Location

          </label>

          <input
            type="text"
            placeholder="Enter Your Location"
            {...register("location")}
            className="
              w-full
              border
              border-gray-300
              rounded
              px-4
              py-3
              outline-none
              focus:ring-1
              focus:ring-[#a94442]
            "
          />

        </div>

      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          mt-6
          bg-[#a94442]
          hover:bg-[#923b39]
          text-white
          py-3
          rounded
          text-lg
          font-medium
          transition
        "
      >

        {loading
          ? "Submitting..."
          : "Submit"}

      </button>

    </form>
  );
};

export default UserForm;