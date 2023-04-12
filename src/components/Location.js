import React from "react";
import { BsClock } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
const Location = () => {
  return (
    <div>
      <div
        id="address"
        className="flex gap-2 justify-center bg-regalbrown flex-wrap"
      >
        <div className=" p-10 w-96 mx-2">
          <div className="bg-regalLightgray border-regalyellow border-4 rounded-lg px-4 text-center min-h-full ">
            <h3 className="py-4 text-regalyellow font-extrabold ">Marriage</h3>
            <div className="flex justify-between px-2">
              <div>
                <div className="text-regalyellow flex justify-center">
                  <BsClock size={20} />
                </div>
                <div className="text-regalyellow py-2">10:30 am onwards</div>
              </div>
              <div>
                <div className="text-regalyellow flex justify-center">
                  <SlCalender size={20} />
                </div>
                <div className="text-regalyellow py-2">27th April, 2023 </div>
              </div>
            </div>
            <p className="text-regalyellow pt-4 ">
              Good Shepherd Church, Dharavi
            </p>
            <div>
              <button className="bg-regalbrown text-regalyellow mb-4 mt-4 px-8 py-1 hover:border-white border-transparent border-2 hover:bg-black">
                <a href="https://maps.app.goo.gl/xPgm7ViKuYexx8KKA">Maps</a>
              </button>
            </div>
          </div>
        </div>
        <div className=" p-10 w-96 mx-2">
          <div className="bg-regalLightgray border-regalyellow border-4 rounded-lg px-4 text-center min-h-full ">
            <h3 className="py-4 text-regalyellow font-extrabold">Reception</h3>
            <div className="flex justify-between px-2">
              <div>
                <div className="text-regalyellow flex justify-center py-2">
                  <BsClock size={20} />
                </div>
                <div className="text-regalyellow py-2">12:00pm to 3:00pm</div>
              </div>
              <div>
                <div className="text-regalyellow flex justify-center py-2">
                  <SlCalender size={20} />
                </div>
                <div className="text-regalyellow py-2">27th April, 2023</div>
              </div>
            </div>
            <p className="text-regalyellow pt-4">
              Kamarajar Memorial English High School and Junior College
            </p>
            <div>
              <button className="bg-regalbrown hover:border-2-white text-regalyellow mb-4 mt-4 px-8 py-1 hover:border-white border-transparent border-2 hover:bg-black">
                <a href="https://maps.app.goo.gl/Zm2uNkQPStEYXckZA"> Maps</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
