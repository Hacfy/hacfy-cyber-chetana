

"use client";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
  setLoading(true);

  const trimmedData = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    phoneNumber: formData.phoneNumber.trim(),
  };

  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trimmedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);

      toast.error(errorData.error || "Something went wrong!", {
        style: {
          background: "white",
          color: "var(--primary-blue)",
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 6px rgba(150,150,150,0.3)",
        },
      });
    } else {
      toast.success("Registration successful! Check your email.", {
        style: {
          background: "white",
          color: "var(--primary-blue)",
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 6px rgba(150,150,150,0.3)",
        },
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong!", {
      style: {
        background: "white",
        color: "var(--primary-blue)",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 6px rgba(150,150,150,0.3)",
      },
    });
  } finally {
  
    setLoading(false);
  }
};

  return (
      <section
  id="pledge"
  className="w-full flex flex-col justify-center items-center px-4 pb-10 h-screen md:min-h-screen"
  style={{ marginTop: -100 }}
>
  {/* Responsive heading */}
  <h1 className="text-2xl md:text-5xl  font-extrabold mb-20 text-center" style={{ color: "var(--primary-blue)" }}>
    Cyber Safety Pledge Registration
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden w-full max-w-none mx-auto">
    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 py-8 md:px-8 md:py-12">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
        style={{ color: "var(--primary-blue)" }}
      >
        Take the Cyber Safety Pledge
      </h2>
      <p
        className="text-base sm:text-lg md:text-xl mt-3"
        style={{ color: "var(--primary-blue)" }}
      >
        I, ____________, pledge to become a Cyber Awareness Ambassador with
        HacFy Cyber Chetana...
      </p>
    </div>

    <div className="flex justify-center items-center p-6 md:p-8">
      <div className="p-4 md:p-6 rounded-2xl shadow-lg w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] bg-white">
        <h2
          className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center"
          style={{ color: "var(--primary-blue)" }}
        >
          Join Now
        </h2>
        <div className="flex flex-col space-y-3 md:space-y-4">
          {/* Inputs */}
          <input
            className="p-3 md:p-4 text-black rounded-lg border focus:outline-none"
            placeholder="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="p-3 md:p-4 text-black rounded-lg border focus:outline-none"
            placeholder="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className="p-3 md:p-4 text-black rounded-lg border focus:outline-none"
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="p-3 md:p-4 text-black rounded-lg border focus:outline-none"
            placeholder="Phone Number"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <button
            className="text-white p-3 md:p-4 rounded-lg font-semibold transition flex justify-center items-center"
            style={{ backgroundColor: "var(--primary-orange)" }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
