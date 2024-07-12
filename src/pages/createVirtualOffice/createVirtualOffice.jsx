import React, { useEffect, useState } from "react";
import Img from "../../assets/Button.png";
import Img1 from "../../assets/Group 48095764.png";
import { useForm } from "react-hook-form";
import { useCreateVirtualOffice } from "../hooks/useCreateVirtualOfficehooks";
import { Button, Typography } from "@material-tailwind/react";

const CreateVirtualOffice = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";
  const createVirtualOfficeHook = useCreateVirtualOffice();

  const handleChange = (value) => {
    setValue("type", value === watch("type") ? null : value);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = () => {
    setSelectedImage(null);
    document.getElementById("logo").value = null;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("logo",file);
      };
    }
  };
  const country = "USA";
  const category = "Technology";
 
  const onSubmit = (data) => {
    const formData = new FormData();

    // Append each form field to FormData individually
    // formData.append("businessEmail", data.businessEmail);
    // formData.append("companyAddress", data.companyAddress);
    // formData.append("companyName", data.companyName);
    // formData.append("governmentID", data.governmentID);
    // formData.append("idCard", data.idCard);
    // formData.append("license", data.license);
    // formData.append("logo", data.logo);
    // formData.append("country",country);
    // formData.append("category", category);
    // formData.append("type", data.type);

    console.log(data, "data");
    createVirtualOfficeHook.handleCreateVirtualOffice(data).then(() => {
      reset();
    });
    setSelectedImage(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <div className="container max-w-[1000px]">
            <div
              className="rounded-xl flex justify-center"
              style={{ boxShadow: shadow }}
            >
              <div className="h-[190px] w-[190px] rounded-full bg-[#C4C4C4] p-4 m-3">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected logo"
                    className="h-full w-full rounded-full object-cover"
                    onClick={handleImageClick}
                  />
                ) : (
                  <label htmlFor="logo" className="cursor-pointer">
                    <p className="text-[18px] text-black pt-16 text-center font-semibold">
                      Upload Your logo
                    </p>
                  </label>
                )}
                <input
                  type="file"
                  {...register("logo")}
                  className="hidden"
                  id="logo"
                  onChange={handleImageChange}
                />
              </div>
              <div className="abc py-6">
                <p className="mb-6 text-center text-[#616161] font-bold">
                  Select Type
                </p>
                <div className="flex gap-4 items-center">
                  <input
                    id="company-radio"
                    type="radio"
                    value="company"
                    {...register("type")}
                    onChange={() => handleChange("company")}
                    checked={watch("type") === "company"}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="company-radio"
                    className="bg-gradient-to-b from-blue-500 to-indigo-600 text-[12px] hover:bg-blue-700 text-white font-semibold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline"
                  >
                    Company
                  </label>
                </div>

                <p className="mt-6 mb-6 text-center text-[#616161] font-bold">
                  OR
                </p>
                <div className="flex gap-4 items-center">
                  <input
                    id="individual-radio"
                    type="radio"
                    value="individual"
                    {...register("type")}
                    onChange={() => handleChange("individual")}
                    checked={watch("type") === "individual"}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="individual-radio"
                    className="bg-gradient-to-b from-blue-500 to-indigo-600 text-[12px] hover:bg-blue-700 text-white font-semibold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline"
                  >
                    Individual
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-6">
              <div
                className="column2 rounded-xl px-6 py-2"
                style={{ boxShadow: shadow }}
              >
                <h1 className="text-center text-[#616161] text-[25px] mb-4 font-semibold">
                  Virtual Office
                </h1>
                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="fullName"
                  >
                    Company Name
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3] rounded-full w-full py-4 px-6 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="fullName"
                    type="text"
                    placeholder="Company Name"
                    style={{
                      border: errors.companyName
                        ? "1px solid red"
                        : "1px solid #8A8AA033",
                    }}
                    {...register("companyName", { required: true })}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="businessEmail"
                  >
                    Business Email
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3] rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="businessEmail"
                    type="email"
                    placeholder="Business Email"
                    style={{
                      border: errors.businessEmail
                        ? "1px solid red"
                        : "1px solid #8A8AA033",
                    }}
                    {...register("businessEmail", { required: true })}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="license"
                  >
                    License
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3] rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="license"
                    type="text"
                    placeholder="License"
                    style={{
                      border: errors.license
                        ? "1px solid red"
                        : "1px solid #8A8AA033",
                    }}
                    {...register("license", { required: true })}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="companyAddress"
                  >
                    Company Address
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3] rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="companyAddress"
                    type="text"
                    placeholder="Company Address"
                    style={{
                      border: errors.companyAddress
                        ? "1px solid red"
                        : "1px solid #8A8AA033",
                    }}
                    {...register("companyAddress", { required: true })}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="governmentID"
                  >
                    Government I'D
                  </label>
                  <div className="flex justify-between">
                    <input
                      className="appearance-none border bg-[#ECF0F3] rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                      id="governmentID"
                      type="text"
                      placeholder="Government I'D"
                      style={{
                        border: errors.governmentID
                          ? "1px solid red"
                          : "1px solid #8A8AA033",
                      }}
                      {...register("governmentID", { required: true })}
                    />
                    <div className="ml-[-25px] mt-2">
                      <img className="pl-[-5px]" src={Img1} alt="abc" />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="idCard"
                  >
                    I'D Card
                  </label>
                  <div className="flex justify-between">
                    <input
                      className="appearance-none border bg-[#ECF0F3] rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                      id="idCard"
                      type="number"
                      placeholder="I'D Card"
                      style={{
                        border: errors.idCard
                          ? "1px solid red"
                          : "1px solid #8A8AA033",
                      }}
                      {...register("idCard", { required: true })}
                    />
                    <div className="ml-[-25px] mt-2">
                      <img className="pl-[-5px]" src={Img1} alt="abc" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  <button
                    type="submit"
                    className="rounded-full px-8 text-white py-2 bg-[#1F5E7C]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[200px] rounded-xl shadow-xl mt-6 mb-4"></div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateVirtualOffice;
