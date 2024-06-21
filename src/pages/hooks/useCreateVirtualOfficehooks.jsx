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
      country: "USA",
      category: "Technology",
      companyName: data?.companyName,
      businessEmail: data?.businessEmail,
      license: data?.license,
      companyAddress: data?.companyAddress,
      governmentID: data?.governmentID,
      idCard: data?.idCard,
      type: data?.type[0],
    };

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://searchapp.ai/api/v1/virtualoffices",
        payLoad,
        { headers }
      )
      .then((res) => {
        setLoading(false); // Reset loading state here as well
        if (res?.status === 200) {
          console.log(res, "response");
          toast.success("Virtual Office Created Successfully!");
        } else {
          toast.error(res?.data?.message || "An error occurred"); // Improved error message handling
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err); // Log the error to the console for debugging
        toast.error(
          err?.response?.data?.message || err.message || "An error occurred"
        );
      });
  };

  return {
    handleCreateVirtualOffice,
    loading,
  };
};
