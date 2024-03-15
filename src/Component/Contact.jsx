import React from "react";
import "./Global.css";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className="background-contact">
      <div className="p-2 flex">
        <div className="w-full flex justify-center flex-col items-center my-5 mt-24">
          <div className="w-full flex flex-col items-center p-5">
            <input
              type="text"
              className="outline-none w-96 my-2 h-12 text-xl p-3 border-b-4 border-white"
              placeholder="First Name"
              style={{ background: "rgba(223, 228, 234,1.0)" }}
            />
            <input
              type="text"
              className="outline-none w-96 my-2 h-12 text-xl p-3 border-b-4 border-white"
              placeholder="Email"
              style={{ background: "rgba(223, 228, 234,1.0)" }}
            />
            <textarea
              className="outline-none w-96 h-36 text-xl p-3 my-4 border-b-4 border-white"
              placeholder="Text your message here..."
              style={{ background: "rgba(223, 228, 234,1.0)" }}
            />
            <button className="bg-blue-400 w-24 h-10 font-bold my-2 opacity-80 hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
