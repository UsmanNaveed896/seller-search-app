import { useState } from "react";

import { toast } from "react-toastify";

import axios from "axios";

export const useGetStoriesHook = () => {
  const [loading, setLoading] = useState(false);
  const [story, getStory] = useState();

  const id = localStorage.getItem("user_id");
  let token = localStorage.getItem("token");

  const handleGetStorybyId = () => {
    setLoading(true);
    let headers = {
      Authorization: `Bearer ` + token,
    };
    axios
      .get(`https://searchapi.codematesolution.com/api/v1/stories/${id}`, {
        headers,
      })
      .then((res) => {
        if (res?.status == 200) {
          console.log(res, "response");
          getStory(res.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  return {
    handleGetStorybyId,
    loading,
    story,
  };
};
