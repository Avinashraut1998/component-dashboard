import React from "react";
import LoginCard from "../LoginCard";

const LoginPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        background:
          "url('https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginCard />
    </div>
  );
};

export default LoginPage;
