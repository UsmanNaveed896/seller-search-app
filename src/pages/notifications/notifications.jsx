import React, { useEffect, useState } from "react";
import Img from "../../assets/Rectangle 774.png";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Notifications = () => {
  const [notification, getAllNotification] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(null);
  const { register, handleSubmit, reset } = useForm();
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
      console.log(error, "error");
    }
  };

  useEffect(() => {
    handleGetNotifications();
  }, []);

  const handleDelete = async (id) => {
    let headers = {
      Authorization: "Bearer " + token,
    };
    try {
      await axios
        .delete(`https://searchapi.codematesolution.com/api/v1/notifications/${id}`, {
          headers,
        })
        .then((res) => {
          toast.success("Notification Deleted Successfully!");
          handleGetNotifications();
        });
    } catch (error) {
      toast.error("Something Went Wrong!");
      console.log(error, "error");
    }
  };

  const handleEdit = (notification) => {
    setCurrentNotification(notification);
    setIsEditing(true);
    reset({
      title: notification.title,
      description: notification.description,
    });
  };

  const onSubmit = async (data) => {
    let headers = {
      Authorization: "Bearer " + token,
    };
    try {
      await axios
        .patch(
          `https://searchapi.codematesolution.com/api/v1/notifications/${currentNotification._id}`,
          data,
          {
            headers,
          }
        )
        .then((res) => {
          toast.success("Notification Edited Successfully!");
          handleGetNotifications();
          setIsEditing(false);
          setCurrentNotification(null);
        });
    } catch (error) {
      toast.error("Something Went Wrong!");
      console.log(error, "error");
    }
  };

  return (
    <div className="flex justify-center h-[90vh]">
      <div className="container max-w-[1000px] h-[80vh] overflow-scroll">
        <p className="font-semibold">Notifications</p>
        {notification?.notifications === null ||
        notification?.notifications === undefined ? (
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
          <div className="text-center mt-16">No Data Available</div>
        ) : (
          notification?.notifications?.map((item) => (
            <div
              key={item.id}
              className="notify bg-[#F9F9F9] rounded-lg px-3 py-1 mt-4"
            >
              <div className="flex gap-2 items-center justify-between">
                <div>
                  <p className="text-[14px] text-black">{item.title}</p>
                  <p className="text-[#708099] text-[12px]">
                    {item?.description}
                  </p>
                </div>
                <div className="icons flex gap-3 items-center">
                  <CiEdit
                    className="h-5 w-5 cursor-pointer hover:text-blue-500"
                    onClick={() => handleEdit(item)}
                  />
                  <MdDeleteOutline
                    className="h-5 w-5 cursor-pointer hover:text-red-500"
                    onClick={() => handleDelete(item._id)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Edit Notification</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="mr-4 border border-red-500 text-red-500  px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  className=" flex gap-2 items-center bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white text-[14px] font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  <CiEdit className="w-5 h-5"/>
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
