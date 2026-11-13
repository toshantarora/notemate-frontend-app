
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

import FutureAcademyBackground from "../components/FutureAcademyBackground";
import { registerUser } from "../services/authService";

const SignupPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const response = await registerUser(formData);

      console.log("Registration successful:", response);

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-white/10 py-3 pl-11 pr-12 text-white placeholder-gray-400 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";

  return (
    <FutureAcademyBackground>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">

          {/* Left Section */}
          <div className="hidden text-white lg:block">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-3">
                <GraduationCap size={32} />
              </div>

              <span className="text-3xl font-bold">
                NOTE <span className="text-cyan-400">MATE</span>
              </span>
            </div>

            <h1 className="mb-5 text-5xl font-extrabold leading-tight">
              Build Your
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                SMART LEARNING
              </span>
            </h1>

            <p className="mb-8 max-w-md text-lg leading-8 text-gray-300">
              Start your learning journey today. Learn new skills,
              explore courses, and achieve your goals.
            </p>

            <div className="space-y-4 text-gray-200">
              {[
                "Learn from expert instructors",
                "Access courses anytime, anywhere",
                "Track your learning progress",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Signup Card */}
          <div className="w-full max-w-md justify-self-center rounded-3xl border border-white/20 bg-white/10 p-7 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-9">
            <div className="mb-7 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
                <GraduationCap size={30} />
              </div>

              <h2 className="text-3xl font-bold text-white">
                Create Account
              </h2>

              <p className="mt-2 text-sm text-gray-300">
                Join Future Academy and start learning
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-200">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={19} />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-200">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={19} />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-200">
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={19} />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className={inputClass}
                    minLength={8}
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-300">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
                {!loading && <ArrowRight size={19} />}
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/15" />
              <span className="text-xs text-gray-400">OR</span>
              <div className="h-px flex-1 bg-white/15" />
            </div>

            <p className="text-center text-sm text-gray-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-cyan-300 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </FutureAcademyBackground>
  );
};

export default SignupPage;
