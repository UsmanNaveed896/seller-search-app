import React, { useEffect, useState } from "react";
import Img from "../../assets/download (4) 1.png";
import { useCreateVirtualOffice } from "../hooks/useCreateVirtualOfficehooks";
import { BallTriangle } from "react-loader-spinner";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ViewVirtualOffice = () => {
  const virtualOffice = useCreateVirtualOffice();
  const [isEditing, setIsEditing] = useState(false);
  const [currentOffice, setCurrentOffice] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  let token = localStorage.getItem("token");

  useEffect(() => {
    virtualOffice.getAllVirtualOffices();
  }, []);

  const allVirtualOffice = virtualOffice?.virtualOffice;

  const handleDelete = async (id) => {
    let headers = {
      Authorization: "Bearer " + token,
    };
    try {
      await axios
        .delete(`https://searchapi.codematesolution.com/api/v1/virtualoffices/${id}`, {
          headers,
        })
        .then((res) => {
          toast.success("Virtual Office Deleted Successfully!");
          virtualOffice.getAllVirtualOffices();
        });
    } catch (error) {
      toast.error("Something Went Wrong!");
      console.log(error, "error");
    }
  };

  const handleEdit = (office) => {
    setCurrentOffice(office);
    setIsEditing(true);
    reset({
      companyName: office.companyName,
      businessEmail: office.businessEmail,
      license: office.license,
      companyAddress: office.companyAddress,
      governmentID: office.governmentID,
      photos: office.photos,
      idCard: office.idCard,
      type: office.type,
      category: office.category,
    });
  };

  const onSubmit = async (data) => {
    let headers = {
      Authorization: "Bearer " + token,
    };
    try {
      await axios
        .patch(
          `https://searchapi.codematesolution.com/api/v1/virtualoffices/${currentOffice._id}`,
          data,
          {
            headers,
          }
        )
        .then((res) => {
          toast.success("Virtual Office Edited Successfully!");
          virtualOffice.getAllVirtualOffices();
          setIsEditing(false);
          setCurrentOffice(null);
        });
    } catch (error) {
      toast.error("Something Went Wrong!");
      console.log(error, "error");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="container max-w-[1000px]">
          <p className="font-semibold text-center">Virtual Office</p>
          {allVirtualOffice === null ||
          allVirtualOffice?.virtualOffices === undefined ? (
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
          ) : (
            allVirtualOffice?.virtualOffices?.map((item) => (
              <div key={item._id}>
                <div className="notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-12 text-black">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <div className="">
                        <img src={Img} alt="rect" />
                      </div>
                      <div>
                        <p className="text-[16px] font-bold">{item?.companyName}</p>
                        <p className="text-[14px] font-semibold">
                          {item?.businessEmail}
                        </p>
                        <p className="text-[14px] font-semibold">
                          {item?.companyAddress}
                        </p>
                      </div>
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
              </div>
            ))
          )}
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg overflow-auto h-[600px] w-[600px]">
            <h2 className="text-lg font-semibold mb-4">Edit Virtual Office</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  {...register("companyName", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-1 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700">
                  Business Email
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  {...register("businessEmail", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-1 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="license" className="block text-sm font-medium text-gray-700">
                  License
                </label>
                <input
                  type="text"
                  id="license"
                  {...register("license", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-1 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">
                  Company Address
                </label>
                <input
                  type="text"
                  id="companyAddress"
                  {...register("companyAddress", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-1 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="governmentID" className="block text-sm font-medium text-gray-700">
                  Government ID
                </label>
                <input
                  type="text"
                  id="governmentID"
                  {...register("governmentID", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-1 px-3"
                />
              </div>
              {/* <div className="mb-4">
                <label htmlFor="photos" className="block text-sm font-medium text-gray-700">
                  Photos URL
                </label>
                <input
                  type="text"
                  id="photos"
                  {...register("photos", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-1 px-3"
                />
              </div> */}
              <div className="mb-4">
                <label htmlFor="idCard" className="block text-sm font-medium text-gray-700">
                  ID Card
                </label>
                <input
                  type="text"
                  id="idCard"
                  {...register("idCard", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-1 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <input
                  type="text"
                  id="type"
                  {...register("type", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-1 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  {...register("category", { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-1 px-3"
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
    </>
  );
};

export default ViewVirtualOffice;
