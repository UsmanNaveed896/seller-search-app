import React, { useEffect, useState } from "react";
import Img from "../../assets/Rectangle 774.png";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
const Notifications = () => {
  const [notification, getAllNotification] = useState();
  let token = localStorage.getItem("token");
  const handleGetNotifications = async () => {
    let headers = {
      Authorization: "Bearer " + token,
    };
    try {
      await axios
        .get("https://searchapi.codematesolution.com/api/v1/notifications", {
          headers,
        })
        .then((res) => {
          getAllNotification(res.data?.data);
        });
    } catch (error) {
      console.log(error, "eror");
    }
  };
  useEffect(() => {
    handleGetNotifications();
  }, []);
  return (
    <div className="flex justify-center h-[100vh] overflow-auto">
      <div className="container max-w-[1000px]">
        <p className="font-semibold">Notifications</p>
        {notification?.notifications === null || notification?.notifications === undefined ? (
          <div className="flex items-center justify-center mt-16">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="blue"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : notification?.notifications?.length === 0 ? (
          <div className="text-center mt-16">
            No Data Available
          </div>
        ) : (
          notification?.notifications?.map((item) => (
            <div key={item.id} className="notify bg-[#F9F9F9] rounded-lg px-3 py-1 mt-4">
              <div className="flex gap-2 items-center">
                <div>
                  <img src={Img} alt="rect" />
                </div>
                <div>
                  <p className="text-[14px] text-black">{item.title}</p>
                  <p className="text-[#708099] text-[12px]">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
