import { useContext } from "react";

import { AuthContext } from "../contexts/FirebaseAuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("AuthContext must be placed within AuthProvider");

  return context;
};

export default useAuth;
