"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiUser, FiLock, FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

// Define validation schema with Zod
const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[0-9]/, "Must contain at least one number"),
});

type FormValues = z.infer<typeof formSchema>;

export default function UniqueLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || "Login failed");
      } else {
        // ✅ Login success
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-amber-50 to-rose-50 p-4 min-h-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Floating Card Design */}
        <div className="bg-white shadow-xl border border-amber-100 rounded-3xl overflow-hidden">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-violet-800 to-fuchsia-700 p-8 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <div className="flex justify-center items-center bg-white shadow-lg backdrop-blur-sm mx-auto border border-white/20 rounded-full w-24 h-24">
                <Image
                  src="/logo/logo.png"
                  alt="login page logo"
                  draggable="false"
                  width={150}
                  height={10}
                  className="p-4 rounded-full"
                />
              </div>
            </motion.div>
            <h1 className="mt-6 font-bold text-white text-2xl">Welcome Back</h1>
            <p className="mt-2 text-violet-200">Sign in to your account</p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Username Field */}
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-sm">
                  Username
                </label>
                <div className="relative">
                  <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                    <FiUser className="text-fuchsia-600" />
                  </div>
                  <input
                    {...register("username")}
                    type="text"
                    className="block bg-amber-50/50 py-3 pr-3 pl-10 border border-amber-200 focus:border-fuchsia-500 rounded-lg focus:ring-2 focus:ring-fuchsia-200 w-full transition-all"
                    placeholder="Enter your username"
                  />
                </div>
                {errors.username && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-rose-600 text-sm"
                  >
                    {errors.username.message}
                  </motion.p>
                )}
              </div>

              {/* Password Field with Toggle */}
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-sm">
                  Password
                </label>
                <div className="relative">
                  <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                    <FiLock className="text-fuchsia-600" />
                  </div>
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    className="block bg-amber-50/50 py-3 pr-10 pl-10 border border-amber-200 focus:border-fuchsia-500 rounded-lg focus:ring-2 focus:ring-fuchsia-200 w-full transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="right-0 absolute inset-y-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="text-fuchsia-600 hover:text-fuchsia-800" />
                    ) : (
                      <FiEye className="text-fuchsia-600 hover:text-fuchsia-800" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-rose-600 text-sm"
                  >
                    {errors.password.message}
                  </motion.p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-fuchsia-700 hover:text-fuchsia-900 text-sm transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`flex justify-center items-center bg-gradient-to-r from-fuchsia-600 to-violet-700 shadow-lg px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-300 focus:ring-offset-2 w-full font-medium text-white text-sm transition-all ${
                  loading
                    ? "opacity-70"
                    : "hover:from-fuchsia-700 hover:to-violet-800"
                }`}
              >
                {loading ? "Signing in..." : "Sign In"}{" "}
                <FiArrowRight className="ml-2" />
              </motion.button>
            </form>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-rose-600 text-sm text-center"
              >
                {error}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
