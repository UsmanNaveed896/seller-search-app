import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/images-black-1/civic-1.jpg";
import Img2 from "../../assets/images-black-1/civic-2.jpg";
import Img3 from "../../assets/images-black-1/civic-3.jpg";
import Img4 from "../../assets/images-black-1/civic-4.jpg";
import Img5 from "../../assets/images-black-1/civic-5.jpg";
import Img6 from "../../assets/images-black-1/civic-6.jpg";
import Img7 from "../../assets/images-black-1/civic-7.jpg";
import Img8 from "../../assets/images-black-1/civic-8.jpg";
import Productview from "../../components/productview/productview";
import { useForm } from "react-hook-form";
import { usePostAd } from "../hooks/usePostAdHook";
const CarSelling = () => {
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectImage, setSelectImage] = useState([
    null, // img1
    null, // img2
    null, // img3
    null, // img4
    null, // img5
    null, // img6
    null, // img7
    null, // img8
  ]);
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
  const usePostCarAd = usePostAd();
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [blobUrls, setBlobUrls] = useState([]);
  const [view360, setView360] = useState(false);

  const handleChangeImage = (e, imageKey) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      const blobUrl = URL.createObjectURL(file);

      setSelectImage((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[imageKey] = file;
        return updatedImages;
      });

      setBlobUrls((prevUrls) => {
        const updatedUrls = [...prevUrls];
        updatedUrls[imageKey] = blobUrl;
        return updatedUrls;
      });

      // Get current photos state using watch
      const currentPhotos = watch("photos") || [];
      const updatedPhotos = [...currentPhotos];
      updatedPhotos[imageKey] = blobUrl;

      setValue("photos", updatedPhotos);
    }
  };
  const handleViewButton = () => {
    if (Object.values(selectImage).every((image) => image !== null)) {
      setView360(true);
    }
  };
  const handleFeatureChange = (event) => {
    const { options } = event.target;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    if (selected.length <= 4) {
      setSelectedFeatures(selected);
      setValue("features", selected);
    }
  };
  useEffect(() => {
    setValue("features", selectedFeatures);
  }, [selectedFeatures, setValue]);
  const removeFeature = (featureToRemove) => {
    const updatedFeatures = selectedFeatures.filter(
      (feature) => feature !== featureToRemove
    );
    setSelectedFeatures(updatedFeatures);
    setValue("features", updatedFeatures); // update the value in the form state
  };

  const onSubmit = (data) => {
    usePostCarAd.handlePostCarAd(data);
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <div className="container max-w-[1000px] text-black">
            <div
              className="usedCars rounded-lg px-3 py-6 mt-12"
              style={{ boxShadow: shadow }}
            >
              <div className="mt-4  flex justify-between items-center">
                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Title</h1>
                  <input
                    {...register("title", { required: "Title is required" })}
                    className="pr-12 pl-2 py-3 rounded-xl bg-[#F5F4F8] text-[12px]"
                    placeholder="Enter Title"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-[12px]">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Condition</h1>
                  <label className="inline-flex items-center">
                    <input
                      {...register("condition", {
                        required: "Condition is required",
                      })}
                      type="radio"
                      value="New"
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="mr-2 ml-2 text-gray-700 text-[12px] font-semibold">
                      New
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      {...register("condition", {
                        required: "Condition is required",
                      })}
                      type="radio"
                      value="Used"
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 text-[12px] font-semibold">
                      Used
                    </span>
                  </label>
                  {errors.condition && (
                    <p className="text-red-500 text-[12px]">
                      {errors.condition.message}
                    </p>
                  )}
                </div>
                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Year</h1>
                  <input
                    {...register("year", { required: "Year is required" })}
                    className="pl-2 py-3 rounded-xl bg-[#F5F4F8] text-[12px]"
                    placeholder="Enter Year"
                    type="number"
                  />
                  {errors.year && (
                    <p className="text-red-500 text-[12px]">
                      {errors.year.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div
              className="usedCars rounded-lg px-3 py-6 mt-6"
              style={{ boxShadow: shadow }}
            >
              <div className="mt-4  flex justify-between items-start">
                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Brand</h1>
                  <select
                    {...register("make", { required: "Brand is required" })}
                    className="px-6 py-3 rounded-xl bg-[#F5F4F8] text-[14px] text-[#8C9199]"
                  >
                    <option value="">Select Brand</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="ford">Ford</option>
                  </select>
                  {errors.brand && (
                    <p className="text-red-500 text-[12px]">
                      {errors.brand.message}
                    </p>
                  )}
                </div>
                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">
                    Transmission
                  </h1>
                  <select
                    {...register("transmission", {
                      required: "Model is required",
                    })}
                    className="px-6 py-3 rounded-xl bg-[#F5F4F8] text-[12px] text-[#8C9199]"
                  >
                    <option value="">Select Transmission</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                  </select>
                  {errors.transmission && (
                    <p className="text-red-500 text-[12px]">
                      {errors.transmission.message}
                    </p>
                  )}
                </div>
                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Model</h1>
                  <select
                    {...register("model", { required: "Model is required" })}
                    className="px-6 py-3 rounded-xl bg-[#F5F4F8] text-[12px] text-[#8C9199]"
                  >
                    <option value="">Select Model</option>
                    <option value="corolla">Corolla</option>
                    <option value="civic">Civic</option>
                    <option value="mustang">Mustang</option>
                  </select>
                  {errors.model && (
                    <p className="text-red-500 text-[12px]">
                      {errors.model.message}
                    </p>
                  )}
                </div>

                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Mileage</h1>
                  <input
                    {...register("mileage", { required: "Year is required" })}
                    className="pl-2 py-3 rounded-xl bg-[#F5F4F8] text-[12px]"
                    placeholder="Enter Year"
                    type="number"
                  />
                  {errors.mileage && (
                    <p className="text-red-500 text-[12px]">
                      {errors.mileage.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Features</h1>
                  {selectedFeatures.length > 0 && (
                    <div className="mb-2 flex flex-wrap">
                      {selectedFeatures.map((feature) => (
                        <p
                          key={feature}
                          className="mr-2 mb-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-[12px] flex items-center"
                        >
                          {feature}
                          <button
                            type="button"
                            className="ml-2 text-red-500"
                            onClick={() => removeFeature(feature)}
                          >
                            &times;
                          </button>
                        </p>
                      ))}
                    </div>
                  )}
                  <select
                    {...register("features")}
                    className="px-6 py-3 rounded-xl bg-[#F5F4F8] text-[12px] text-[#8C9199]"
                    onChange={handleFeatureChange}
                    value={selectedFeatures}
                  >
                    <option value="">Select Feature</option>

                    <option value="alarm">Alarm</option>
                    <option value="cruise_control">Cruise Control</option>
                    <option value="bluetooth">Bluetooth</option>
                    <option value="front_parking_sensor">
                      Front Parking Sensor
                    </option>
                    <option value="gps">GPS</option>
                    <option value="heated_seats">Heated Seats</option>
                  </select>
                  {errors.features && (
                    <p className="text-red-500 text-[12px]">
                      {errors.features.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div
              className="usedCars rounded-lg px-3 py-6 mt-12 "
              style={{ boxShadow: shadow }}
            >
              <div className="mt-4  flex justify-between items-start">
                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Location</h1>
                  <input
                    {...register("location", {
                      required: "Location is required",
                    })}
                    className="pl-2 py-3 rounded-xl bg-[#F5F4F8] text-[12px]"
                    placeholder="Search Location"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-[12px]">
                      {errors.location.message}
                    </p>
                  )}
                </div>
                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Price</h1>
                  <input
                    {...register("price", { required: "Price is required" })}
                    className="px-3 py-3 rounded-xl bg-[#F5F4F8] text-[12px]"
                    placeholder="Enter Price"
                  />
                  {errors.price && (
                    <p className="text-red-500 text-[12px]">
                      {errors.price.message}
                    </p>
                  )}
                </div>
                <div>
                  <h1 className="text-[#252B5C] font-bold mb-2">Description</h1>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    className="px-3 w-64 h-32 rounded-xl bg-[#F5F4F8] text-[12px]"
                    placeholder="Enter Description"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-[12px]">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div
              className="usedCars rounded-lg px-3 py-6 mt-12 "
              style={{ boxShadow: shadow }}
            >
              <h1 className="text-[#252B5C] font-bold mb-2">
                Upload Photos w.r.t to Images Below
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                {selectImage.map((image, index) => (
                  <div key={index}>
                    <label
                      htmlFor={`image-${index}`}
                      className="cursor-pointer"
                    >
                      {image ? (
                        <img
                          className="h-32 w-32 mt-4"
                          src={blobUrls[index] || URL.createObjectURL(image)}
                          alt={`Selected ${index}`}
                        />
                      ) : (
                        <img
                          className="h-32 w-32 mt-4"
                          src={images[index]}
                          alt={`abc ${index}`}
                        />
                      )}
                    </label>

                    <input
                      id={`image-${index}`}
                      accept="image/*"
                      className="hidden"
                      name={`image-${index}`}
                      type="file"
                      onChange={(e) => handleChangeImage(e, index)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-start mt-5">
                <button
                  className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 text-white text-[14px] font-semibold py-3 px-12 rounded-lg focus:outline-none focus:shadow-outline"
                  onClick={handleViewButton}
                  type="button"
                >
                  View 360
                </button>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 text-white text-[14px] font-semibold py-3 px-12 rounded-lg focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sell Your Car
                </button>
              </div>
              {view360 && (
                <div className="mt-8">
                  <Productview
                    setView360={setView360}
                    selectImage={selectImage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CarSelling;
