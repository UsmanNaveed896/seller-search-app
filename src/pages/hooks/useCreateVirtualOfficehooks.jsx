import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useCreateVirtualOffice = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [virtualOffice, setVirtualOffice] = useState();
  let token = localStorage.getItem("token");

  const handleCreateVirtualOffice = async (data) => {
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
      type: data?.type,
    };
  
    try {
      const res = await axios.post(
        "https://searchapi.codematesolution.com/api/v1/virtualoffices",
        payLoad,
        { headers }
      );
  
      if (res?.status === 200 || res?.status == 201) {
        toast.success("Virtual Office Created Successfully!");
        setLoading(false);
        let notificationPayload = {
          title: "Virtual Created",
          description: "Virtual Office Successfully Created!"
        };
  
        const notificationRes = await axios.post(
          "https://searchapi.codematesolution.com/api/v1/notifications",
          notificationPayload,
          { headers }
        );
  
        console.log(notificationRes, "notification response");
      } else {
        toast.error(res?.data?.message || "An error occurred");
      }
    } catch (err) {
      console.error('Error occurred:', err); 
      setLoading(false);
      toast.error(
        err?.response?.data?.message || err.message || "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };
  
  
  
 

  const getAllVirtualOffices = async (data) => {
    setLoading(true);
    let headers={
        Authorization: "Bearer " + token 
    }
    try {
      const response = await axios.get(`https://searchapi.codematesolution.com/api/v1/virtualoffices`, {headers});
      console.log(response,"response")
      setVirtualOffice(response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    handleCreateVirtualOffice,
    loading,
    getAllVirtualOffices,
    virtualOffice
  };
};
