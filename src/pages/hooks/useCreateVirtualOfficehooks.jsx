import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useCreateVirtualOffice = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let token = localStorage.getItem("token");

  const handleCreateVirtualOffice = (data) => {
    setLoading(true);
    let headers = {
      Authorization: `Bearer ` + token,
    };
    const payLoad = {
      companyName: data?.companyName,
      businessEmail: data?.businessEmail,
      license:data?.license,
      companyAddress:data?.companyAddress,
      governmentID:data?.governmentID,
      idCard:data?.idCard,
      type:data?.type[0]
    };

    axios
      .post("/api/v1/virtualoffices", payLoad, {headers})
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

  const getAllVirtualOffice =()=>{
    setLoading(true);

    axios.get()
  }

  return {
    handleCreateVirtualOffice,
    loading,
  };
};
