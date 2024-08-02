import React, { useState, useEffect } from "react";
import "../styles/CodeAuth.css";
import "../styles/PhoneAuth.css";
import { Link, useSearchParams } from "react-router-dom";

const CodeAuthentication = () => {
  const [code, setCode] = useState("");
  const [validate, setValidate] = useState(false);
  const handleCodeSubmit = () => {
    fetch("http://localhost:8000/api/user/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessCode: code,
        phoneNumber: phoneNumber,
      }),
    }).then((response) => {
      setValidate(response.ok);
    });
    console.log(validate);
  };

  const [searchParam] = useSearchParams();
  const phoneNumber = searchParam.get("phoneNumber");

  useEffect(() => {
    localStorage.setItem("phoneNumber", phoneNumber);
  }, [phoneNumber]);
  return (
    <div className="container">
      <p className="heading">Welcome to Skipli Gen AI</p>
      <p className="description">
        Your phone is
        <p className="description__phone"> {phoneNumber}</p>, if you want to
        change it, please back in
        <a href=".." className="description__back">
          here
        </a>
      </p>
      <form action="" className="form-container">
        <input
          type="text"
          name="phone"
          id=""
          className="text-input"
          placeholder="Code here"
          onChange={(e) => setCode(e.target.value)}
        />
        <Link
          to={validate === true ? `/dashboard?phoneNumber=${phoneNumber}` : `#`}
          value="Submit Verified Code"
          className="submit-input"
          onClick={() => {
            handleCodeSubmit();
          }}
        >
          Submit Verified Code
        </Link>
      </form>
      <div className="resend-container">
        <p className="description">If your don't get Code!</p>
        <button className="submit-input button-resend">Resend Code</button>
      </div>
    </div>
  );
};

export default CodeAuthentication;
