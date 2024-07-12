import Img from "../../assets/House.png";
import Img1 from "../../assets/Group.png";
import Img6 from "../../assets/photo.png";
// import ReactPannellum, { getConfig } from "react-pannellum";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleMaps from "../../components/googleMap/googleMap";
import { useForm, Controller } from "react-hook-form";
import { usePostAd } from "../hooks/usePostAdHook";
const AddPosting = () => {
  const adPostHook = usePostAd();
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";
  const facilitiesList = [
    "Parking Lot",
    "Pet Allowed",
    "Garden",
    "Gym",
    "Park",
    "Home Theatre",
    "Kid's Friendly",
  ];
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);
  const [show360, setShow360] = useState(false);
  const [images, setImages] = useState([]);
  const [selectImage, setSelectImage] = useState({
    walls: null,
    ceiling: null,
    floor: null,
  });
  const [counters, setCounters] = useState({
    totalRooms: 1,
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
  });
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [listingType, setListingType] = useState("rent");
  const period = watch("period");

  const discountPeriod = watch("discountPeriod");
  const handleIncrement = (key) => {
    setCounters((prevState) => {
      const newValue = prevState[key] + 1;
      setValue(key, newValue);
      return { ...prevState, [key]: newValue };
    });
  };

  const handleDecrement = (key) => {
    setCounters((prevState) => {
      const newValue = prevState[key] > 1 ? prevState[key] - 1 : 1;
      setValue(key, newValue);
      return { ...prevState, [key]: newValue };
    });
  };
  const handleFacilityChange = (selectedFacility) => {
    if (
      !selectedFacilities.includes(selectedFacility) &&
      selectedFacilities.length < 5
    ) {
      const updatedFacilities = [...selectedFacilities, selectedFacility];
      setSelectedFacilities(updatedFacilities);
      setValue("facilities", updatedFacilities);
    }
  };

  const handleRemoveFacility = (facility) => {
    const updatedFacilities = selectedFacilities.filter((f) => f !== facility);
    setSelectedFacilities(updatedFacilities);
    setValue("facilities", updatedFacilities);
  };
  const handleChangeImage = (e) => {
    setSelectImage((st) => ({
      ...st,
      [e.target.name]: e.target.files[0],
    }));
  };
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length + images.length <= 4) {
      const blobUrls = files.map((file) => URL.createObjectURL(file));

      setImages((prevImages) => [...prevImages, ...blobUrls]);
      setValue("photos", [...images, ...blobUrls]);
    } else {
      alert("You can only upload up to 4 images.");
    }
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleListingTypeChange = (e) => {
    const value = e.target.value;
    setListingType(value);
    setValue("listingType", value); // Update form value
  };
  const config = {
    autoRotate: -2,
  };
  let userId = localStorage.getItem("user_id");
  const photo = "https://example.com/images/picture1.jpg";
  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append each field to the FormData object
    formData.append("title", data.title);
    formData.append("propertyType", data.propertyType);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("period", data.period);
    formData.append("discountPrice", data.discountPrice);
    formData.append("discountPeriod", data.discountPeriod);
    formData.append("bedrooms", data.bedrooms);
    formData.append("bathrooms", data.bathrooms);
    formData.append("balconies", data.balconies);
    formData.append("area", data.area);
    formData.append("facilitySelect", data.facilitySelect);
    formData.append("listingType", data.listingType);
    formData.append("location", data.location);
    formData.append("office", userId);
    formData.append("photo", photo);
   
    data.amenities.forEach((amenity, index) => {
      formData.append(`amenities[${index}]`, amenity);
    });

    // Append facilities array
    data.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    if (data.photos) {
      for (let i = 0; i < data.photos.length; i++) {
        formData.append("photos", data.photos[i]);
      }
    }

    adPostHook.handlePostAd(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <div className="container max-w-[1000px]">
            <div
              className="grid grid-cols-3  rounded-xl gap-4 mt-6 pb-4 items-center"
              style={{ boxShadow: shadow }}
            >
              <div className="column1 px-6 py-2">
                <h1 className="text-[#252B5C] font-semibold ">Ad Post Title</h1>
                <div className="mt-4 rounded flex justify-between px-4 py-2 bg-[#F5F4F8] items-center">
                  <div className="flex items-center rounded text-black">
                    <input
                      className="bg-transparent outline-none"
                      placeholder="Schoolview House"
                      {...register("title", { required: true })}
                    />

                    <img src={Img} alt="abc" className="" />
                  </div>
                </div>
                {errors.title && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="column2 px-6 py-2">
                <h1 className="text-[#252B5C] font-semibold">
                  Property Category
                </h1>
                <div className="mt-4 rounded-xl  py-3">
                  <select
                    className="bg-[#F5F4F8] py-3 px-4 rounded text-[#252B5C] text-[12px] w-full"
                    {...register("propertyType", { required: true })}
                  >
                    <option value="house">House</option>
                    <option value="hotels">Hotels</option>
                    <option value="land">Land</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="offices">Offices</option>
                  </select>
                  {errors.category && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="column3 px-6 py-2">
                <h1 className="text-[#252B5C] font-semibold">Listing Type</h1>
                <div className="mt-4 rounded-xl flex gap-6 py-3">
                  <select
                    className="bg-[#F5F4F8] py-3 px-4 rounded-full text-[#252B5C] text-[12px] w-full"
                    value={listingType}
                    onChange={handleListingTypeChange}
                    // {...register("listingType", { required: true })}
                  >
                    <option value="rent">Rent</option>
                    <option value="sell">Sell</option>
                  </select>
                  {errors.listingType && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-3  rounded-xl gap-4 mt-6 px-4 py-4 "
              style={{ boxShadow: shadow }}
            >
              <div className="column1 px-2 py-2">
                <div className="flex justify-between">
                  <h1 className="text-[#252B5C] font-semibold">
                    Ad Description
                  </h1>
                  {/* <button className="bg-[#1A4F6F] py-2 px-4 rounded text-white text-[12px]">
                  Auto Generate
                </button> */}
                </div>
                <div className="p-2 mt-6 bg-[#f5f4f8] rounded">
                  <textarea
                    className="w-full bg-transparent text-[gray] text-[12px] p-2 rounded outline-none"
                    rows="6"
                    placeholder="Enter your ad description here..."
                    {...register("description", { required: true })}
                  ></textarea>
                </div>
                {errors.description && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="column2 px-2 py-2">
                <h1 className="text-[#252B5C] font-semibold ">Location</h1>
                {/* <div className="flex gap-2 mt-6 items-center">
                  <img src={Img1} alt="abc" />
                  <p className="text-[12px] text-[#53587A]">
                    Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa
                    Tengah 50277
                  </p>
                </div>
                <GoogleMaps /> */}
                <div className="mt-4 rounded-xl flex justify-between px-4 py-3 bg-[#F5F4F8] text-[#252B5C] max-w-[70%]">
                  <input
                    type="text"
                    placeholder="Enter Location"
                    className="text-[12px] font-bold bg-[#F5F4F8] outline-none border-none"
                    {...register("location", {
                      required: "location is required",
                    })}
                  />
                
                </div>
                {errors.location && (
                    <span className="text-red-500">
                      {errors.location.message}
                    </span>
                  )}
                {/* <img className='mt-6' src={Img2} alt='abc' /> */}
              </div>
              <div className="column3 px-2 py-2">
                <h1 className="text-[#252B5C] font-semibold">Listing Photos</h1>
                <div className="flex flex-wrap gap-1 mt-6">
                  {images.map((blobUrl, index) => (
                    <div className="relative" key={index}>
                      <div
                        className="rounded-full absolute right-[4px] bg-[#1e50b2] h-6 w-6 top-[2px] cursor-pointer"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <i className="fa fa-close absolute text-white right-[6px] top-[3px] font-thin" />
                      </div>
                      <img
                        className="h-[100px] w-[100px] rounded-xl"
                        src={blobUrl}
                        alt={`Uploaded ${index + 1}`}
                      />
                      <p className="text-[8px] font-bold text-center">
                        {index + 1}/4
                      </p>
                    </div>
                  ))}
                  {images.length < 4 && (
                    <div>
                      <label className="bg-[#F5F4F8] py-3 px-6 rounded-full cursor-pointer border border-gray-700 border-dashed text-gray-700">
                        +
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </label>
                    </div>
                  )}
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-gradient-to-b from-blue-500 to-indigo-600 hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => alert("Add 360 functionality")}
                  >
                    Add 360
                  </button>
                </div>
              </div>
            </div>
            {show && (
              <div
                className="mt-6 photos rounded-xl"
                style={{ boxShadow: shadow }}
              >
                <div className="icon text-end p-3 cursor-pointer">
                  <i className="fa fa-close" onClick={() => setShow(false)} />
                </div>
                <div className="flex gap-2 px-6 py-6 items-center">
                  <div className="frst flex flex-col items-center">
                    <p className="text-[12px] font-semibold">
                      Upload Panorama Image
                    </p>

                    <label htmlFor="fileInput" className="cursor-pointer">
                      {selectImage?.walls ? (
                        <img
                          className="h-32 w-32 mt-4"
                          src={URL.createObjectURL(selectImage.walls)}
                          alt="Selected"
                        />
                      ) : (
                        <img className="h-16 w-16 mt-4" src={Img6} alt="abc" />
                      )}
                    </label>

                    <input
                      id="fileInput"
                      accept="image/*"
                      className="hidden"
                      name="walls"
                      type="file"
                      onChange={handleChangeImage}
                    />
                  </div>

                  <div className="">
                    <button
                      className="bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => setShow360(!show360)}
                    >
                      {show360 ? "Cancel" : "View 360 "}
                    </button>
                  </div>
                  {show360 && (
                    <div className="flex justify-center">
                      {/* <div>
                                            <ReactPannellum
                                                id="1"
                                                sceneId="firstScene"
                                                imageSource={URL.createObjectURL(selectImage?.walls)}
                                                config={config}
                                            />
                                        </div> */}
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 pb-6">
              <div
                className="column1 px-6 py-2 mt-6 rounded-xl"
                style={{ boxShadow: shadow }}
              >
                {listingType == "rent" ? (
                  <>
                    <div>
                      <h1 className="text-[#252B5C] font-semibold">
                        Rent Price
                      </h1>
                      <div className="mt-4 rounded-xl flex justify-between px-4 py-3 bg-[#F5F4F8] text-[#252B5C] max-w-[70%]">
                        <input
                          type="number"
                          {...register("price", {
                            required: "Price is required",
                          })}
                          placeholder="Enter price"
                          className="text-[12px] font-bold bg-[#F5F4F8] outline-none border-none"
                        />
                        <span className="font-bold">
                          {period === "Monthly" ? "/month $" : "/year $"}
                        </span>
                      </div>
                      {errors.price && (
                        <span className="text-red-500">
                          {errors.price.message}
                        </span>
                      )}
                      <div className="mt-4 rounded-xl flex gap-6 py-3">
                        <select
                          {...register("period", { required: true })}
                          className="bg-[#1A4F6F] py-3 px-5 rounded-full text-white text-[12px]"
                        >
                          <option value="Monthly">Monthly</option>
                          <option value="Yearly">Yearly</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="mt-4">
                        <h1 className="text-[#252B5C] font-semibold">
                          Discount Rent Price
                        </h1>

                        <div className="mt-4 rounded-xl flex justify-between px-4 py-3 bg-[#F5F4F8] text-[#252B5C] max-w-[70%]">
                          <input
                            type="number"
                            {...register("discountPrice", {
                              required: "Discount price is required",
                            })}
                            placeholder="Enter discount price"
                            className="text-[12px] font-bold bg-[#F5F4F8] outline-none border-none"
                          />
                          <span className="font-bold">
                            {discountPeriod === "Monthly"
                              ? "/month $"
                              : "/year $"}
                          </span>
                        </div>
                        {errors.discountPrice && (
                          <span className="text-red-500">
                            {errors.discountPrice.message}
                          </span>
                        )}
                        <div className="mt-4 rounded-xl flex gap-6 py-3">
                          <select
                            {...register("discountPeriod", { required: true })}
                            className="bg-[#1A4F6F] py-3 px-5 rounded-full text-white text-[12px]"
                          >
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="mb-2">
                    <h1 className="text-[#252B5C] font-semibold mt-2 ">
                      Price
                    </h1>
                    <div className="mt-4 rounded-xl flex justify-between px-4 py-3 bg-[#F5F4F8] text-[#252B5C] max-w-[70%]">
                      <input
                        type="number"
                        placeholder="Enter price"
                        className="text-[12px] font-bold bg-[#F5F4F8] outline-none border-none"
                        {...register("price", {
                          required: "Price is required",
                        })}
                      />
                      <span className="font-bold">{"$"}</span>
                    
                    </div>
                    {errors.price && (
                        <span className="text-red-500">
                          {errors.price.message}
                        </span>
                      )}
                  </div>
                )}
                <div className="">
                  <div>
                    <h1 className="text-[#252B5C] font-semibold">
                      Total Rooms
                    </h1>
                    <div className="flex gap-3 mt-2">
                      <div
                        className="bg-[#1A4F6F] py-3 px-6 rounded-full text-[12px] cursor-pointer"
                        onClick={() => handleDecrement("totalRooms")}
                      >
                        <h1>-</h1>
                      </div>
                      <div className="bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px] text-black">
                        <h1>{counters.totalRooms}</h1>
                      </div>
                      <div
                        className="bg-[#1A4F6F] py-3 px-6 rounded-full text-[12px] text-white cursor-pointer"
                        onClick={() => handleIncrement("totalRooms")}
                      >
                        <h1>+</h1>
                      </div>
                    </div>
                  </div>

                  <input
                    type="hidden"
                    {...register("bedrooms", { value: counters.totalRooms })}
                  />
                  <div className="mt-4 max-w-[70%]">
                    <h1 className="text-[#252B5C] font-semibold">
                      Property Features
                    </h1>

                    {/* Bathroom Counter */}
                    <div className="flex justify-between mt-2 px-4 py-3 pb-6 bg-[#F5F4F8] text-[#252B5C] rounded-xl">
                      <div className="rounded-full text-[12px]">
                        <p className="text-[12px] text-[#252B5C] font-semibold">
                          Bathroom
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div
                          className="h-6 w-6 bg-[#A1A5C1] rounded text-white flex items-center justify-center cursor-pointer"
                          onClick={() => handleDecrement("bathrooms")}
                        >
                          <h1 className="text-center text-[14px]">-</h1>
                        </div>
                        <div className="h-6 w-6 text-black flex items-center justify-center">
                          <h1 className="text-center text-[12px] font-semibold">
                            {counters.bathrooms}
                          </h1>
                        </div>
                        <div
                          className="h-6 w-6 bg-[#A1A5C1] rounded text-white flex items-center justify-center cursor-pointer"
                          onClick={() => handleIncrement("bathrooms")}
                        >
                          <h1 className="text-center text-[14px]">+</h1>
                        </div>
                      </div>
                    </div>

                    <input
                      type="hidden"
                      {...register("bathrooms", { value: counters.bathrooms })}
                    />

                    {/* Balcony Counter */}
                    <div className="flex justify-between mt-2 px-4 py-3 bg-[#F5F4F8] text-[#252B5C] rounded-xl">
                      <div className="rounded-full text-[12px]">
                        <p className="text-[12px] text-[#252B5C] font-semibold">
                          Balcony
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div
                          className="h-6 w-6 bg-[#A1A5C1] rounded text-white flex items-center justify-center cursor-pointer"
                          onClick={() => handleDecrement("balconies")}
                        >
                          <h1 className="text-center text-[14px]">-</h1>
                        </div>
                        <div className="h-6 w-6 text-black flex items-center justify-center">
                          <h1 className="text-center text-[12px] font-semibold">
                            {counters.balconies}
                          </h1>
                        </div>
                        <div
                          className="h-6 w-6 bg-[#A1A5C1] rounded text-white flex items-center justify-center cursor-pointer"
                          onClick={() => handleIncrement("balconies")}
                        >
                          <h1 className="text-center text-[14px]">+</h1>
                        </div>
                      </div>
                    </div>

                    {/* Hidden input to store the balconies value */}
                    <input
                      type="hidden"
                      {...register("balconies", { value: counters.balconies })}
                    />
                  </div>
                </div>
              </div>
              <div
                className="column-2  px-6 py-2 mt-6 rounded-xl"
                style={{ boxShadow: shadow }}
              >
                <div className="">
                  <div className="">
                    <h1 className="text-[#252B5C] font-semibold">
                      Nearby Facilities
                    </h1>
                    <div className="mt-1 rounded-xl flex flex-wrap gap-6 py-3 max-w-[70%]">
                      {selectedFacilities.map((facility, index) => (
                        <button
                          key={index}
                          className="bg-[#1A4F6F] py-3 px-5 rounded-full text-white text-[12px]"
                          onClick={() => handleRemoveFacility(facility)}
                          type="button"
                        >
                          {facility}
                        </button>
                      ))}
                      {selectedFacilities.length < 5 && (
                        <Controller
                          control={control}
                          name="facilitySelect"
                          render={({ field }) => (
                            <select
                              className="bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px] text-black"
                              onChange={(e) => {
                                handleFacilityChange(e.target.value);
                                field.onChange(e);
                              }}
                              value=""
                            >
                              <option value="" disabled>
                                Select Facility
                              </option>
                              {facilitiesList.map((facility, index) => (
                                <option key={index} value={facility}>
                                  {facility}
                                </option>
                              ))}
                            </select>
                          )}
                        />
                      )}
                    </div>
                  </div>

                  {/* Hidden input to store the facilities value */}
                  <input
                    type="hidden"
                    {...control.register("amenities", {
                      value: selectedFacilities,
                    })}
                  />
                  <h1 className="text-[#252B5C] font-semibold mt-2">Area</h1>
                  <div className="mt-4 rounded-xl flex justify-between px-4 py-3 bg-[#F5F4F8] text-[#252B5C] max-w-[70%]">
                    <input
                      type="number"
                      {...register("area", { required: "Area is required" })}
                      placeholder="Enter area"
                      className="text-[12px] font-bold bg-[#F5F4F8] outline-none border-none"
                    />
                    <span className="font-bold">{"Sqft"}</span>
                  </div>
                  <div className="py-3">
                    <h1 className="text-[#252B5C] font-semibold mt-2">
                      Property Type
                    </h1>

                    <select
                      {...register("propertyType", {
                        required: "Property type is required",
                      })}
                      className="bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px] text-black mt-3"
                    >
                      <option value="" disabled>
                        Select Property Type
                      </option>
                      <option value="Villa">Villa</option>
                      <option value="House">House</option>
                      <option value="Appartment">Appartment</option>
                      <option value="Bungalow">Bungalow</option>
                    </select>
                  </div>
                  <button
                    className="bg-gradient-to-b w-full mt-6 from-blue-500 to-indigo-600 hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Post Ad
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddPosting;
