
import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import SignupPage from "../features/auth/pages/SignupPage";



export const router = createBrowserRouter([
  // Default route
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  // Public routes
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },

  // Protected routes
//   {
//     element: <ProtectedRoute />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <DashboardLayout />,
//         children: [
//           {
//             index: true,
//             element: <DashboardPage />,
//           },
//           {
//             path: "courses",
//             element: <CoursesPage />,
//           },
//           {
//             path: "profile",
//             element: <ProfilePage />,
//           },
//           {
//             path: "settings",
//             element: <SettingsPage />,
//           },
//         ],
//       },
//     ],
//   },

  // 404 fallback
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
