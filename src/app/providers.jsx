import { AuthProvider } from "../context/AuthProvider";


const Providers = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default Providers;
