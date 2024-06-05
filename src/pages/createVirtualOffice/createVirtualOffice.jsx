import React from "react";
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
    formState: { errors },
  } = useForm();
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";
  const createVirtualOfficeHook = useCreateVirtualOffice();
  const handleChange = (value) => {
    setValue("type", value === watch("type") ? null : value); // Deselect if already selected
  };
  const onSubmit = (data) => {
    createVirtualOfficeHook.handleCreateVirtualOffice(data)
    console.log(data, "data");
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
              <div className="abc py-6">
                <p className="mb-6 text-center text-[#616161] font-bold">
                  Select Type
                </p>
                <div className="flex gap-4 items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value="company"
                    {...register("type")}
                    onChange={() => handleChange("company")}
                    checked={watch("type") === "company"}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <button
                    className="bg-gradient-to-b from-blue-500 to-indigo-600 text-[12px] hover:bg-blue-700 text-white font-semibold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Company
                  </button>
                </div>

                <p className="mt-6 mb-6 text-center text-[#616161] font-bold">
                  OR
                </p>
                <div className="flex gap-4 items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value="individual"
                    {...register("type")}
                    onChange={() => handleChange("individual")}
                    checked={watch("type") === "individual"}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <button
                    className="bg-gradient-to-b from-blue-500 to-indigo-600 text-[12px] hover:bg-blue-700 text-white font-semibold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Individual
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div
                className="column1 rounded-xl  px-6 py-2"
                style={{ boxShadow: shadow }}
              >
                <div className="flex justify-center">
                  <div className="h-[190px] w-[190px] rounded-full bg-[#C4C4C4]">
                    <p className="text-[18px] text-black pt-16 text-center font-demibold">
                      Upload Your logo
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img className="mt-[-2rem]" src={Img} alt="abc" />
                </div>
                <p className="text-center font-semibold">My Profile</p>
                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email (Optional)"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="rounded-full px-8 text-white py-2 bg-[#1F5E7C]">
                    Choose Category
                  </button>
                </div>
              </div>
              <div
                className="column2 rounded-xl  px-6 py-2"
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
                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-4 px-6 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
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
                    htmlFor="Bussiness Email"
                  >
                    Bussiness Email
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="Bussiness Email"
                    type="email"
                    placeholder="Bussiness Email"
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
                    htmlFor="email"
                  >
                    License
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="License"
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
                    htmlFor="email"
                  >
                    Company Address
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    id="Company Address"
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
                    htmlFor="email"
                  >
                    Government I'D
                  </label>
                  <div className="flex justify-between ">
                    <input
                      className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                      id="Government I'D"
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
                      <img className="pl-[-5px] " src={Img1} alt="abc" />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    I'D Card
                  </label>
                  <div className="flex justify-between ">
                    <input
                      className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                      id="I'D Card"
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
                      <img className="pl-[-5px] " src={Img1} alt="abc" />
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
