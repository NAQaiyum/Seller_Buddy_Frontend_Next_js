import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateContact = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/user/updateuser/${data.id}`,
        { contact: data.contact }
      );
      console.log(response.data);
      router.push("/dashboard/user_list");
    } catch (error) {
      if (error.response?.data?.message) {
        if (Array.isArray(error.response.data.message)) {
          setError(error.response.data.message.join(", "));
        } else {
          setError(error.response.data.message);
        }
      } else {
        setError("Something went wrong!");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <center>
        <h1 className="text-2xl font-bold mb-4">Update Contact</h1>
      </center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="id">ID</label>
          <input
            {...register("id", { required: true })}
            type="number"
            id="id"
            name="id"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.id && <span className="text-red-500">ID is required</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="contact">New Contact</label>
          <input
            {...register("contact", { required: true })}
            type="number"
            id="contact"
            name="contact"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.contact && (
            <span className="text-red-500">Contact is required</span>
          )}
        </div>

        {error && <p className="text-red-500">{error}</p>}
        <center>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Update Contact
          </button>
        </center>
      </form>
    </div>
  );
};

export default UpdateContact;
