import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GOOGLE_ACCESS_TOKEN } from "../token";

function RedirectGoogleAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("✅ RedirectGoogleAuth mounted successfully");

    const verifyGoogleToken = async (accessToken) => {
      try {
        console.log("🔑 AccessToken found: ", accessToken);

        // Store token in localStorage
        localStorage.setItem(GOOGLE_ACCESS_TOKEN, accessToken);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        // Verify token with the backend
        const response = await axios.get(
          "http://localhost:8000/api/auth/user/"
        );

        console.log("✅ User authenticated:", response.data);
        navigate("/dashboard"); // Redirect after successful verification
      } catch (error) {
        console.error(
          "❌ Error verifying token:",
          error.response ? error.response.data : error.message
        );

        // Remove any invalid token and redirect to login
        localStorage.removeItem(GOOGLE_ACCESS_TOKEN);
        navigate("/login");
      }
    };

    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get("access_token");

    if (accessToken) {
      verifyGoogleToken(accessToken);
    } else {
      console.log("⚠️ No token found in URL");
      navigate("/login");
    }

    return () => {
      console.log("🛑 Cleanup - RedirectGoogleAuth unmounted");
    };
  }, [navigate]);

  return <div className="text-center text-lg font-semibold">Logging in...</div>;
}

export default RedirectGoogleAuth;
