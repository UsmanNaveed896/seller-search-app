import React, { useEffect } from "react";
import Img from "../../assets/download (4) 1.png";
import { useCreateVirtualOffice } from "../hooks/useCreateVirtualOfficehooks";
import { BallTriangle } from "react-loader-spinner";
const ViewVirtualOfiice = () => {
  const virtualOffice = useCreateVirtualOffice();
  useEffect(() => {
    virtualOffice.getAllVirtualOffices();
  }, []);

  const allVirtualOffice = virtualOffice?.virtualOffice;
  console.log(allVirtualOffice,"all")
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
              <div>
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
                    <div className="">
                      <button className="bg-[#F2F2F3] border rounded border border-black py-2 px-4 text-[12px] font-bold">
                        Actived
                      </button>
                    </div>
                  </div>
                </div>
             
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ViewVirtualOfiice;
