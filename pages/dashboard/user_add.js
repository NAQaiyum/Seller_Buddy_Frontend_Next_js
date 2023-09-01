import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const insert = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/user/insertuser", data);
      console.log(response.data);
      router.push('/dashboard/user_list');
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message.join(", "));
      } else {
        setError("Something went wrong!");
      }
    }
  };
  

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <center><h1 className="text-2xl font-bold mb-4">Employee Add</h1></center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="id">Id</label>
          <input
            {...register("id", { required: true })}
            type="number"
            id="id"
            name="id"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.name && <span className="text-red-500">Id is required</span>}
        </div>


        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}
        </div>
        
        
        
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
                  {...register("password", { required: true })}
                  type="password"
                  id="password"
                  name="password"
                  className="border border-gray-400 rounded w-full p-2"
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>

              <div className="mb-4">
          <label htmlFor="contact">Contact</label>
          <input
            {...register("contact", { required: true })}
            type="number"
            id="contact"
            name="contact"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.contact && <span className="text-red-500">Contact is required</span>}
        </div>

              <div className="mb-4">
          <label htmlFor="type">Type</label>
          <input
            {...register("type", { required: true })}
            type="text"
            id="type"
            name="type"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.type && <span className="text-red-500">Type is required</span>}
        </div>
              
        {error && <p className="text-red-500">{error}</p>}
        <center><button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button></center>
      </form>
    </div>
  );
};

export default insert;
