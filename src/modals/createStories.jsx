import React, { useState } from "react";

import Img from "../assets/photo.png";
import axios from "axios";
export function CreateStories({ handleOpen, setOpen, open }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [storyContent, setStoryContent] = useState("");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(selectedImage,"selected")
  const handleContentChange = (event) => {
    setStoryContent(event.target.value);
  };

  const createStories = () => {
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userid");

    let headers = {
      Authorization: `Bearer ` + token,
    };
    let payLoad = {
      content: storyContent,
      photo: selectedImage,
      user: userId,
    };
    axios.post("/api/v1/users/stories", payLoad, { headers }).then((res) => {
      console.log(res,"respose");
    });
  };
  return (
    <>
      <div>
        {open && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Create Story
                      </h3>
                      <div className="mt-2">
                        <div className="flex justify-center">
                          <div>
                            <label htmlFor="fileInput">
                              <img
                                src={selectedImage || Img}
                                alt="story"
                                className="cursor-pointer h-12"
                              />
                            </label>
                            <input
                              id="fileInput"
                              type="file"
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={handleImageUpload}
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <textarea
                            value={storyContent}
                            onChange={handleContentChange}
                            rows="4"
                            className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            placeholder="Write your story here..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handleOpen}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border text-black shadow-sm px-4 py-2 text-base font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={createStories}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
