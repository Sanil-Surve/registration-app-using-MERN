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
    <div className="container">
      <div className="container__registration">
        <h1 className="registration">Registration Form</h1>
      </div>
      <div className="input-group">
        <span className="input-group-text">First and last name</span>
        <input
          type="text"
          aria-label="First name"
          id="firstname"
          name="firstName"
          value={user.firstName}
          onChange={(e) => handleChange(e)}
          className="form-control"
        />
        <input
          type="text"
          aria-label="Last name"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={(e) => handleChange(e)}
          className="form-control"
        />
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
          placeholder="name@example.com"
        />
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              className="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
