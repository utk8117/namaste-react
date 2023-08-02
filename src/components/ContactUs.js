import React from "react";

function ContactUs() {
  return (
    <div>
      <h1 className="font-bold m-2 p-2">ContactUs</h1>
      <form>
        <input placeholder="name" className="border border-black p-2 m-2" type="text" />
        <input placeholder="message" className="border border-black p-2 m-2" type="text" />
        <button className="bg-slate-300 rounded-lg p-2 m-2">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
