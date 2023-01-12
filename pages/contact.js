import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [desc, setdesc] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // fetch API post request
    const data = {
      username: username,
      email: email,
      password: password,
      desc: desc,
    };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setemail("");
        setdesc("");
        setpassword("");
        setusername("");
      })
      .catch((error) => {
        <p>Error...</p>;
      });
  };
  const onHandleChange = (e) => {
    if (e.target.name == "username") {
      setusername(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "password") {
      setpassword(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact us</h1>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onHandleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onHandleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="phone"
            name="password"
            value={password}
            onChange={onHandleChange}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="text"
            name="desc"
            value={desc}
            onChange={onHandleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
