import axios from "axios";
import React from "react";
import { useState } from "react";

const ContactForm = ({ contacts, setContacts }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("First year");

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!name || !email) return alert("Name and Email are required")
    try{
        const res = await axios.post("http://localhost:5000/contacts",{
            name,company,email,phone,status
        })
        setContacts(res.data, ...contacts)
        setName("")
        setCompany("")
        setEmail("")
        setPhone("")
        setStatus("First year")
    }
    catch(err){
        console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
      <input
        type="text"
        placeholder="Name"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <select
        value={status}
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0 cursor-pointer"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="First year">First year</option>
        <option value="Second year">Second year</option>
        <option value="Third year">Third year</option>
        <option value="Final Year">Final Year</option>
      </select>
      <button
        type="submit"
        className="text-white px-4 py-3 rounded hover:bg-[#001a52] bg-[#00277a] transition w-full mt-[-10px] cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
