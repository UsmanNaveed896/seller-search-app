import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useRegisterHook = () => {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    const payLoad = {
      email: data?.email,
      password: data?.password,
    };

    axios
      .post("/api/v1/users/login", payLoad)
      .then((res) => {
        if (res?.status == 200) {
          toast.success(res?.data?.status || "");
          const token = res?.data?.token;
          localStorage.setItem("token", token);
          navigate('/profile')
        } else {
          toast.error(res?.message);
        }
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err?.message);
      });
  };

  return {
    handleLogin,
  };
};
