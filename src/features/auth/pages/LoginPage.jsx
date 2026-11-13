
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";


const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await loginUser(data);

      // Validate API response
      if (!response.token || !response.user) {
        throw new Error("Invalid login response from server");
      }

      // Save token in localStorage
      localStorage.setItem("token", response.token);

      // Save user information in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      console.log("Login Successful:", response);

      // Navigate to dashboard
      navigate("/dashboard");

    } catch (err) {
      console.error("Login Error:", err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Invalid email or password"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090B38]">

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#21065D] via-[#10145B] to-[#070B30]" />

      {/* Glow effects */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-600/40 blur-[130px]" />

      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/40 blur-[140px]" />

      <div className="absolute bottom-[-200px] left-1/3 h-[500px] w-[500px] rounded-full bg-pink-600/30 blur-[140px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating circles */}
      <div className="absolute left-[10%] top-[25%] h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_30px_10px_rgba(34,211,238,0.3)] animate-pulse" />

      <div className="absolute right-[12%] top-[18%] h-5 w-5 rounded-full bg-purple-400 shadow-[0_0_35px_10px_rgba(168,85,247,0.4)] animate-pulse" />

      <div className="absolute bottom-[15%] left-[45%] h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_30px_10px_rgba(236,72,153,0.4)]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-12 lg:px-12">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Left content */}
          <section className="text-center lg:text-left">

            {/* Logo */}
            <div className="mb-12 flex items-center justify-center gap-3 lg:justify-start">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 text-3xl shadow-lg shadow-purple-500/30">
                🎓
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-wide text-white">
                  NOTE <span className="text-cyan-300">MATE</span>
                </h2>

                <p className="text-sm tracking-widest text-white/50">
                  LEARN • PRACTICE • GROW
                </p>
              </div>

            </div>

            {/* Hero heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl xl:text-6xl">
              Build Your
              <br />

              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Smart Learning
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-white/65 lg:mx-0 lg:text-lg">
              Unlock your potential with smart learning,
              interactive courses and endless possibilities.
            </p>

            {/* Feature cards */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">

              {[
                "📚 Smart Learning",
                "🚀 Expert Courses",
                "🏆 Track Progress",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}

            </div>

          </section>

          {/* Right login card */}
          <section className="mx-auto w-full max-w-md">

            <div className="rounded-[30px] border border-white/25 bg-white/10 p-7 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl sm:p-10">

              {/* Login header */}
              <div className="mb-8 text-center">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-purple-500/80 to-blue-500/80 text-3xl shadow-lg shadow-purple-500/30">
                  📖
                </div>

                <h2 className="text-3xl font-bold text-white">
                  Welcome Back!
                </h2>

                <p className="mt-2 text-sm text-white/55">
                  Sign in to continue your learning journey
                </p>

              </div>

              {/* Error message */}
              {error && (
                <div className="mb-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* Login form */}
              <form onSubmit={handleLogin} className="space-y-5">

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white outline-none transition placeholder:text-white/40 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/30"
                  />
                </div>

                {/* Password */}
                <div>

                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-white/80">
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-xs font-medium text-cyan-300 hover:text-white"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      required
                      autoComplete="current-password"
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 pr-16 text-white outline-none transition placeholder:text-white/40 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/30"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-cyan-300 hover:text-white"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>

                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center justify-between">

                  <label className="flex cursor-pointer items-center gap-2 text-sm text-white/70">
                    <input
                      type="checkbox"
                      name="remember"
                      className="h-4 w-4 accent-purple-500"
                    />

                    Remember me
                  </label>

                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full rounded-xl bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {loading ? "Signing In..." : "Sign In"}

                  {!loading && (
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  )}

                </button>

              </form>

              {/* Signup */}
              <p className="mt-8 text-center text-sm text-white/60">
                Don't have an account?{" "}

                <Link
                  to="/signup"
                  className="font-semibold text-cyan-300 transition hover:text-white"
                >
                  Create Account
                </Link>
              </p>

            </div>

            {/* Footer */}
            <p className="mt-6 text-center text-xs text-white/40">
              © 2026 NOTE MATE. All rights reserved.
            </p>

          </section>

        </div>
      </div>
    </main>
  );
};

export default LoginPage;
