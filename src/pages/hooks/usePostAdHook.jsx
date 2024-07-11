import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const usePostAd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [virtualOffice, setVirtualOffice] = useState();
  let token = localStorage.getItem("token");
  let userId = localStorage.getItem("user_id");

  const handlePostAd = async (data) => {
    setLoading(true);
    let headers = {
      Authorization: `Bearer ` + token,
    };

    const payLoad = {
      ...data,
      office: userId,
      photo: "https://example.com/images/picture1.jpg",
    };

    try {
      const res = await axios.post(
        "https://searchapi.codematesolution.com/api/v1/postAdvertisements",
        data,
        { headers }
      );

      if (res?.status === 200 || res?.status == 201) {
        toast.success("Ad Posted Successfully!");
        setLoading(false);
        let notificationPayload = {
          title: "New Ad",
          description: "New Ad Created!",
        };

        await axios.post(
          "https://searchapi.codematesolution.com/api/v1/notifications",
          notificationPayload,
          { headers }
        );
      } else {
        toast.error(res?.data?.message || "An error occurred");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error occurred:", err);
      setLoading(false);
      toast.error(
        err?.response?.data?.message || err.message || "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };
  const handlePostCarAd = async (data) => {
    setLoading(true);
    let headers = {
      Authorization: `Bearer ` + token,
    };

    const payLoad = {
      ...data,
      office: userId,
      photo: "https://example.com/images/picture1.jpg",
    };

    try {
      const res = await axios.post(
        "https://searchapi.codematesolution.com/api/v1/carAdvertisements",
        data,
        { headers }
      );

      if (res?.status === 200 || res?.status == 201) {
        toast.success("Ad Posted Successfully!");

        let notificationPayload = {
          title: "New Ad",
          description: "New Ad Created!",
        };

        await axios.post(
          "https://searchapi.codematesolution.com/api/v1/notifications",
          notificationPayload,
          { headers }
        );
      } else {
        toast.error(res?.data?.message || "An error occurred");
      }
    } catch (err) {
      console.error("Error occurred:", err);
      toast.error(
        err?.response?.data?.message || err.message || "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    handlePostAd,
    loading,
    handlePostCarAd,
  };
};
