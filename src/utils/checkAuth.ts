import React from "react";
import axios from "axios";

const checkAuth = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/auth/me`,
      {
        withCredentials: true,
      }
    );

    console.log("check auth response", res.data);
    return res.data;
  } catch {
    return { authenticated: false };
  }
};

export default checkAuth;
