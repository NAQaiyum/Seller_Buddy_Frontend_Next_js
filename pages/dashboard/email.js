import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const EmailSender = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = React.useState("");
  const [error, setError] = React.useState("");

  const sendEmail = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/admin/send-email", {
        to: data.to,
        subject: data.subject,
        text: data.text,
      });
      setStatus("Email sent successfully!");
      setError("");
      setTimeout(() => {
        setStatus("");
        router.push("/dashboard/home");
      }, 3000);
    } catch (error) {
      setStatus("");
      setError("Error sending email");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Send Email</h2>
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className="mb-4">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">
            To:
          </label>
          <input
            type="email"
            id="to"
            {...register("to", { required: true })}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200"
          />
          {errors.to && <p className="text-red-600">To field is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject", { required: true })}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200"
          />
          {errors.subject && <p className="text-red-600">Subject field is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
            Text:
          </label>
          <textarea
            id="text"
            {...register("text", { required: true })}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200"
            rows="4"
          />
          {errors.text && <p className="text-red-600">Text field is required</p>}
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Send Email
          </button>
        </div>
        {status && <p className="text-green-600 mt-4">{status}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default EmailSender;
