import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    password: " ",
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:8080/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(res);
    setUser({ firstName: " ", lastName: " ", email: " ", password: " " });
  };

  return (
    <div className="form">
      <div>
        <h1 className="title">User Registration</h1>
      </div>
      <form>
        <label className="label"> First Name</label>
        <input
          onChange={(e) => handleChange(e)}
          className="input"
          value={user.firstName}
          name="firstName"
          type="text"
        />

        <label className="label"> Last Name</label>
        <input
          onChange={(e) => handleChange(e)}
          className="input"
          value={user.lastName}
          name="lastName"
          type="text"
        />

        <label className="label">Email</label>
        <input
          onChange={e => handleChange(e)}
          className="input"
          value={user.email}
          type="email"
          name="email"
        />

        <label className="label">Password</label>
        <input
          onChange={e => handleChange(e)}
          className="input"
          value={user.password}
          type="password"
          name="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
