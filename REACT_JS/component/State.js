import React, { useState } from "react";
import "./State.css";
const State = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    phno: "",
    address: "",
  });
  const { name, email, age, phno, address } = input;
  const handleOnInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input);
  };

  return (
    <div className="form">
      <h1>Registration</h1>
      <input
        placeholder="Enter name.."
        name="name"
        value={input.name}
        onChange={handleOnInput}
      />
      <p>Name:{name}</p>
      <input
        placeholder="Enter age.."
        name="age"
        value={input.age}
        onChange={handleOnInput}
      />
      <p>Age:{age}</p>
      <input
        placeholder="Enter email.."
        name="email"
        value={input.email}
        onChange={handleOnInput}
      />
      <p>Email:{email}</p>
      <input
        placeholder="Enter phno.."
        name="phno"
        value={input.phno}
        onChange={handleOnInput}
      />
      <p>PhoneNumber:{phno}</p>
      <input
        placeholder="Enter address.."
        name="address"
        value={input.address}
        onChange={handleOnInput}
      />
      <p>Address:{address}</p>
      <button>Submit</button>
    </div>
  );
};

export default State;
