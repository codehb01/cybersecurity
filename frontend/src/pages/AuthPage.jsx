import { useState, useEffect } from "react";
import AuthForm from "../components/LoginPage";

const AuthPage = ({ initialMethod }) => {
  const [method, setMethod] = useState(initialMethod);

  useEffect(() => {
    setMethod(initialMethod);
  }, [initialMethod]);

  const route = method === "login" ? "/api/token/" : "/api/user/create/";

  return (
    <div>
      <AuthForm route={route} method={method} />
    </div>
  );
};

export default AuthPage;
