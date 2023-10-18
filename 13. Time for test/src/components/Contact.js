import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Contact Us</h1>

      <form className="m-2 p-4 text-center">
        <div>
          <input
            className="border border-solid p-2 rounded-lg w-[75%] my-2"
            placeholder="Email Id"
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            className="border border-solid p-2 rounded-lg w-[75%] my-2"
            rows={5}
          />
        </div>
        <div>
          <button
            type="button"
            className="border font-semibold px-4 py-2 rounded-lg w-[75%] bg-gray hover:bg-black hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
