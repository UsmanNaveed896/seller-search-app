import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useRegisterHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (data) => {
    setLoading(true);
    const payLoad = {
      email: data?.email,
      password: data?.password,
    };

    axios
      .post("/api/v1/users/login", payLoad)
      .then((res) => {
        if (res?.status == 200) {
          console.log(res, "response");
          toast.success(res?.data?.status || "");
          const token = res?.data?.token;
          const userid = res?.data?.data?.user?._id;
          localStorage.setItem("token", token);
          localStorage.setItem("userid", userid);
          setLoading(false);
          navigate("/profile");
        } else {
          toast.error(res?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
        toast.error(err?.message);
      });
  };

  return {
    handleLogin,
    loading,
  };
};
